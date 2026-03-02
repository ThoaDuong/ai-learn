import { GoogleGenerativeAI, GenerativeModel } from "@google/generative-ai";
import { TranslationResult, GrammarCheckResult } from "@/types";

let genAI: GoogleGenerativeAI | null = null;

/**
 * Ordered list of Gemini models to try.
 * When a model hits rate limit, the next model in the list is used.
 */
const MODEL_FALLBACK_CHAIN = [
    "gemini-3.0-flash",
    "gemini-2.5-flash",
    "gemini-2.5-flash-lite",
    "gemini-3.0-flash-preview",
    "gemini-2.5-pro",
    "gemini-2.0-flash-lite",
    "gemini-2.0-flash",
] as const;

/** Index of the current "preferred" model — advances on rate-limit */
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
 * Get a GenerativeModel instance by its model ID string.
 */
function getModelByName(modelName: string): GenerativeModel {
    return getGenAI().getGenerativeModel({
        model: modelName,
        generationConfig: {
            responseMimeType: "application/json",
        },
    });
}

/**
 * Get the current best model, respecting cooldown logic.
 * If we moved away from the primary model due to rate limiting,
 * try to go back to it after the cooldown period.
 */
function getCurrentModel(): { model: GenerativeModel; modelName: string } {
    // Reset to primary model after cooldown
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

    const modelName = MODEL_FALLBACK_CHAIN[currentModelIndex];
    return { model: getModelByName(modelName), modelName };
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
        // No object found, return trimmed raw (let JSON.parse throw a clear error)
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

    // If we couldn't find matching braces, return from start brace to end
    return raw.slice(startIdx).trim();
}

export function isWord(text: string): boolean {
    const trimmed = text.trim();
    return !trimmed.includes(" ") && trimmed.length <= 30;
}

/**
 * Execute an API call with retry + automatic model fallback.
 *
 * Strategy:
 * 1. Try the current model up to `retriesPerModel` times with exponential backoff.
 * 2. If all retries fail due to rate limiting, switch to the next model in the chain.
 * 3. Repeat until all models are exhausted.
 * 4. Non-rate-limit errors are thrown immediately.
 */
export async function withRetry<T>(
    fn: (model: GenerativeModel) => Promise<T>,
    retriesPerModel = 2,
    baseDelay = 2000
): Promise<T> {
    let lastError: Error | null = null;

    // Start from current model index and try each fallback
    const startIndex = currentModelIndex;

    for (let modelIdx = 0; modelIdx < MODEL_FALLBACK_CHAIN.length; modelIdx++) {
        const actualIdx =
            (startIndex + modelIdx) % MODEL_FALLBACK_CHAIN.length;
        const modelName = MODEL_FALLBACK_CHAIN[actualIdx];
        const model = getModelByName(modelName);

        for (let retry = 0; retry < retriesPerModel; retry++) {
            try {
                const result = await fn(model);

                // If we successfully used this model, prefer it going forward
                if (currentModelIndex !== actualIdx) {
                    console.log(
                        `[Gemini] Switched to model: ${modelName}`
                    );
                    currentModelIndex = actualIdx;
                }

                return result;
            } catch (error) {
                lastError = error as Error;

                if (isRateLimitError(error)) {
                    const delay = baseDelay * Math.pow(2, retry);
                    console.log(
                        `[Gemini] ${modelName} rate limited (attempt ${retry + 1}/${retriesPerModel}), retrying in ${delay}ms...`
                    );
                    await new Promise((resolve) =>
                        setTimeout(resolve, delay)
                    );
                } else {
                    // Non-rate-limit error → throw immediately
                    throw error;
                }
            }
        }

        // All retries exhausted for this model → move to next
        console.log(
            `[Gemini] ${modelName} exhausted, falling back to next model...`
        );
        rateLimitedAt = Date.now();
    }

    // All models exhausted
    console.error("[Gemini] All models exhausted. Throwing last error.");
    throw lastError;
}

export async function analyzeText(text: string): Promise<TranslationResult> {
    const trimmedText = text.trim();

    if (isWord(trimmedText)) {
        const prompt = `Analyze the English word "${trimmedText}".
    
First, check if this is a valid English word.
- If it is NOT a valid English word (e.g. typo, nonsense, or not English), return a JSON object with this structure:
{
  "type": "invalid_word",
  "word": "${trimmedText}",
  "suggestions": ["suggestion1", "suggestion2", "suggestion3"]
}
- If it IS a valid English word, return a JSON object with this structure:
{
  "type": "word",
  "word": "${trimmedText}",
  "meaning": "Vietnamese meaning of the word",
  "partOfSpeech": "noun or verb or adjective or adverb or preposition or conjunction or pronoun or interjection",
  "level": "CEFR level: A1 or A2 or B1 or B2 or C1 or C2",
  "phonetic": "IPA phonetic transcription using American English pronunciation, e.g. /həˈloʊ/",
  "example": "An example sentence using this word in English",
  "exampleTranslation": "Vietnamese translation of the example sentence"
}

Ensure the response is valid JSON only, no markdown.`;

        try {
            const result = await withRetry((model) =>
                model.generateContent(prompt)
            );
            const response = result.response.text();

            const parsed = JSON.parse(extractJson(response));

            // Safety check to ensure one of the expected types is returned
            if (parsed.type === "word" || parsed.type === "invalid_word") {
                return parsed as TranslationResult;
            }

            // Fallback if type is missing but looks like a word result
            if (parsed.meaning) {
                parsed.type = "word";
                return parsed as TranslationResult;
            }

            throw new Error("Invalid response format");
        } catch (error) {
            const errorMessage = (error as Error).message || "Unknown error";

            if (isRateLimitError(error)) {
                throw new Error("RATE_LIMIT");
            }
            return {
                type: "word",
                word: trimmedText,
                meaning: `Error: ${errorMessage}`,
                partOfSpeech: "error",
                level: "error",
                phonetic: "",
                example: "",
                exampleTranslation: "",
            };
        }
    } else {
        const prompt = `Translate the following English sentence to Vietnamese and return a JSON object with this exact structure:
{
  "type": "sentence",
  "original": "${trimmedText}",
  "translation": "Vietnamese translation"
}

Sentence to translate: "${trimmedText}"`;

        try {
            const result = await withRetry((model) =>
                model.generateContent(prompt)
            );
            const response = result.response.text();

            const parsed = JSON.parse(extractJson(response));
            parsed.type = "sentence";
            return parsed as TranslationResult;
        } catch (error) {
            const errorMessage = (error as Error).message || "Unknown error";

            if (isRateLimitError(error)) {
                throw new Error("RATE_LIMIT");
            }
            return {
                type: "sentence",
                original: trimmedText,
                translation: `Error: ${errorMessage}`,
            };
        }
    }
}

export async function checkGrammar(text: string): Promise<GrammarCheckResult> {
    const trimmedText = text.trim();

    const prompt = `Analyze the grammar of the following English sentence: "${trimmedText}"

    Return a JSON object with this exact structure:
    {
      "isCorrect": boolean, // true if the sentence is grammatically correct
      "correction": "Corrected sentence if there were errors, or the original sentence if correct",
      "explanation": "Explanation of the errors and how they were fixed. If correct, say 'The sentence is grammatically correct.'",
      "variations": {
        "formal": "A more formal version of the sentence",
        "friendly": "A more friendly/casual version of the sentence"
      }
    }
    
    Ensure the response is valid JSON only, no markdown.`;

    try {
        const result = await withRetry((model) =>
            model.generateContent(prompt)
        );
        const response = result.response.text();

        const parsed = JSON.parse(extractJson(response));
        return parsed;
    } catch (error) {
        console.error("Grammar check error:", error);
        const errorMessage = (error as Error).message || "Unknown error";
        if (isRateLimitError(error)) {
            throw new Error("RATE_LIMIT");
        }
        throw error;
    }
}
