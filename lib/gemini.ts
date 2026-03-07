import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";
import { TranslationResult, GrammarCheckResult } from "@/types";

let genAI: GoogleGenerativeAI | null = null;

/**
 * Ordered list of Gemini models to try.
 * When a model hits rate limit or is unavailable, the next model is used.
 */
const MODEL_FALLBACK_CHAIN = [
    "gemini-3-flash",
    "gemini-3.1-pro",
    "gemini-2.5-pro",
    "gemini-2.5-flash",
    "gemini-2.5-flash-lite",
    "gemini-2.0-flash",
    "gemini-3-flash-preview",
    "gemini-3.1-flash-lite-preview",
] as const;

/** Index of the current "preferred" model — advances on rate-limit or model error */
let currentModelIndex = 0;

/** Timestamp when the current model was rate-limited (to reset after cooldown) */
let rateLimitedAt: number | null = null;

/** Cooldown period before trying the primary model again (5 minutes) */
const MODEL_COOLDOWN_MS = 5 * 60 * 1000;

function getGenAI() {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error("Please add GEMINI_API_KEY environment variable");
    }
    if (!genAI) {
        genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    }
    return genAI;
}

/**
 * Get a GenerativeModel instance with optional maxOutputTokens.
 */
function getModelByName(
    modelName: string,
    maxOutputTokens?: number
): GenerativeModel {
    return getGenAI().getGenerativeModel({
        model: modelName,
        generationConfig: {
            responseMimeType: "application/json",
            ...(maxOutputTokens && { maxOutputTokens }),
        },
    });
}

/**
 * Check if an error is a rate-limit / quota error.
 */
export function isRateLimitError(error: unknown): boolean {
    const message = (error as Error)?.message || "";
    return (
        message.includes("429") ||
        message.includes("quota") ||
        message.includes("RESOURCE_EXHAUSTED") ||
        message.includes("rate")
    );
}

/**
 * Check if an error means the model is unavailable (not found, not supported, etc.)
 */
function isModelUnavailableError(error: unknown): boolean {
    const message = (error as Error)?.message || "";
    return (
        message.includes("404") ||
        message.includes("not found") ||
        message.includes("NOT_FOUND") ||
        message.includes("is not supported") ||
        message.includes("does not exist") ||
        message.includes("INVALID_ARGUMENT")
    );
}

/**
 * Robustly extract JSON from a Gemini response that may contain
 * markdown fences, extra text, or explanations around the JSON.
 */
export function extractJson(raw: string): string {
    // 1. Try stripping markdown code fences first
    const fenceMatch = raw.match(/```(?:json)?\s*\n?([\s\S]*?)\n?```/);
    if (fenceMatch) {
        return fenceMatch[1].trim();
    }

    // 2. Find the first { and match to its closing }
    const startIdx = raw.indexOf("{");
    if (startIdx === -1) {
        return raw.trim();
    }

    let depth = 0;
    let inString = false;
    let escape = false;

    for (let i = startIdx; i < raw.length; i++) {
        const ch = raw[i];

        if (escape) {
            escape = false;
            continue;
        }

        if (ch === "\\") {
            if (inString) escape = true;
            continue;
        }

        if (ch === '"') {
            inString = !inString;
            continue;
        }

        if (inString) continue;

        if (ch === "{") depth++;
        else if (ch === "}") {
            depth--;
            if (depth === 0) {
                return raw.slice(startIdx, i + 1);
            }
        }
    }

    return raw.slice(startIdx).trim();
}

export function isWord(text: string): boolean {
    const trimmed = text.trim();
    return !trimmed.includes(" ") && trimmed.length <= 30;
}

/**
 * Execute an API call with retry + automatic model fallback using streaming.
 *
 * Strategy:
 * 1. Try the current model with generateContentStream for faster TTFB.
 * 2. Rate-limit errors: retry up to `retriesPerModel` times with exponential backoff.
 * 3. Model-unavailable errors: skip to next model immediately (no retries).
 * 4. Other errors: throw immediately.
 * 5. After cooldown, reset to primary model automatically.
 */
export async function withRetry(
    prompt: string,
    maxOutputTokens?: number,
    retriesPerModel = 2,
    baseDelay = 2000
): Promise<string> {
    let lastError: Error | null = null;

    // Reset to primary model after cooldown period
    if (
        currentModelIndex > 0 &&
        rateLimitedAt &&
        Date.now() - rateLimitedAt > MODEL_COOLDOWN_MS
    ) {
        console.log(
            `[Gemini] Cooldown expired, resetting to primary model: ${MODEL_FALLBACK_CHAIN[0]}`
        );
        currentModelIndex = 0;
        rateLimitedAt = null;
    }

    const startIndex = currentModelIndex;

    for (let modelIdx = 0; modelIdx < MODEL_FALLBACK_CHAIN.length; modelIdx++) {
        const actualIdx =
            (startIndex + modelIdx) % MODEL_FALLBACK_CHAIN.length;
        const modelName = MODEL_FALLBACK_CHAIN[actualIdx];
        const model = getModelByName(modelName, maxOutputTokens);

        for (let retry = 0; retry < retriesPerModel; retry++) {
            try {
                // Use streaming for faster time-to-first-byte
                const streamResult = await model.generateContentStream(prompt);

                // Collect all chunks into full text
                let fullText = "";
                for await (const chunk of streamResult.stream) {
                    fullText += chunk.text();
                }

                // Success — prefer this model going forward
                if (currentModelIndex !== actualIdx) {
                    console.log(`[Gemini] Using model: ${modelName}`);
                    currentModelIndex = actualIdx;
                }

                return fullText;
            } catch (error) {
                lastError = error as Error;

                if (isModelUnavailableError(error)) {
                    console.log(
                        `[Gemini] ${modelName} unavailable, skipping...`
                    );
                    break; // break retry loop, go to next model
                }

                if (isRateLimitError(error)) {
                    const delay = baseDelay * Math.pow(2, retry);
                    console.log(
                        `[Gemini] ${modelName} rate limited (attempt ${retry + 1}/${retriesPerModel}), retrying in ${delay}ms...`
                    );
                    await new Promise((resolve) =>
                        setTimeout(resolve, delay)
                    );
                    continue;
                }

                // Non-recoverable error → throw immediately
                throw error;
            }
        }

        // This model exhausted or unavailable → advance to next
        const nextIdx = (actualIdx + 1) % MODEL_FALLBACK_CHAIN.length;
        console.log(
            `[Gemini] ${modelName} failed, trying ${MODEL_FALLBACK_CHAIN[nextIdx]}...`
        );
        currentModelIndex = nextIdx;
        rateLimitedAt = Date.now();
    }

    console.error("[Gemini] All models exhausted. Throwing last error.");
    throw lastError;
}

export async function analyzeText(text: string): Promise<TranslationResult> {
    const trimmedText = text.trim();

    if (isWord(trimmedText)) {
        const prompt = `Analyze the English word "${trimmedText}".
Return JSON only. If NOT a valid English word: {"type":"invalid_word","word":"${trimmedText}","suggestions":["s1","s2","s3"]}
If valid: {"type":"word","word":"${trimmedText}","meaning":"Vietnamese meaning","partOfSpeech":"noun/verb/adj/adv/prep/conj/pron/intj","level":"A1/A2/B1/B2/C1/C2","phonetic":"/IPA/","example":"example sentence","exampleTranslation":"Vietnamese translation of example"}`;

        try {
            const response = await withRetry(prompt, 256);
            const parsed = JSON.parse(extractJson(response));

            if (parsed.type === "word" || parsed.type === "invalid_word") {
                return parsed as TranslationResult;
            }

            if (parsed.meaning) {
                parsed.type = "word";
                return parsed as TranslationResult;
            }

            throw new Error("Invalid response format");
        } catch (error) {
            if (isRateLimitError(error)) {
                throw new Error("RATE_LIMIT");
            }
            throw error;
        }
    } else {
        const prompt = `Translate to Vietnamese. Return JSON only: {"type":"sentence","original":"${trimmedText}","translation":"Vietnamese translation"}`;

        try {
            const response = await withRetry(prompt, 512);
            const parsed = JSON.parse(extractJson(response));
            parsed.type = "sentence";
            return parsed as TranslationResult;
        } catch (error) {
            if (isRateLimitError(error)) {
                throw new Error("RATE_LIMIT");
            }
            throw error;
        }
    }
}

export async function checkGrammar(text: string): Promise<GrammarCheckResult> {
    const trimmedText = text.trim();

    const prompt = `Check grammar of: "${trimmedText}". Return JSON only: {"isCorrect":boolean,"correction":"corrected sentence","explanation":"explanation","variations":{"formal":"formal version","friendly":"casual version"}}`;

    try {
        const response = await withRetry(prompt, 512);
        return JSON.parse(extractJson(response));
    } catch (error) {
        console.error("Grammar check error:", error);
        if (isRateLimitError(error)) {
            throw new Error("RATE_LIMIT");
        }
        throw error;
    }
}
