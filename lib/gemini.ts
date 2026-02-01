import { GoogleGenerativeAI } from "@google/generative-ai";
import { TranslationResult } from "@/types";

let genAI: GoogleGenerativeAI | null = null;

function getGenAI() {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error("Please add GEMINI_API_KEY environment variable");
    }
    if (!genAI) {
        genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    }
    return genAI;
}

function getModel() {
    // Using gemini-flash-latest as it is available in the list
    // and likely corresponds to the stable 1.5 Flash model
    return getGenAI().getGenerativeModel({
        model: "gemini-flash-latest",
        generationConfig: {
            responseMimeType: "application/json",
        }
    });
}

function isWord(text: string): boolean {
    const trimmed = text.trim();
    return !trimmed.includes(" ") && trimmed.length <= 30;
}

async function withRetry<T>(
    fn: () => Promise<T>,
    maxRetries = 3,
    baseDelay = 2000
): Promise<T> {
    let lastError: Error | null = null;

    for (let i = 0; i < maxRetries; i++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error as Error;
            const errorMessage = lastError.message || "";

            if (errorMessage.includes("429") || errorMessage.includes("quota")) {
                const delay = baseDelay * Math.pow(2, i);
                console.log(`Rate limited, retrying in ${delay}ms...`);
                await new Promise((resolve) => setTimeout(resolve, delay));
            } else {
                throw error;
            }
        }
    }

    throw lastError;
}

export async function analyzeText(text: string): Promise<TranslationResult> {
    const trimmedText = text.trim();
    const model = getModel();

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
            const result = await withRetry(() => model.generateContent(prompt));
            const response = result.response.text();

            const cleanJson = response.replace(/```json\n?|\n?```/g, "").trim();
            const parsed = JSON.parse(cleanJson);

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

            if (errorMessage.includes("429") || errorMessage.includes("quota")) {
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
            const result = await withRetry(() => model.generateContent(prompt));
            const response = result.response.text();

            const cleanJson = response.replace(/```json\n?|\n?```/g, "").trim();
            const parsed = JSON.parse(cleanJson);
            parsed.type = "sentence";
            return parsed as TranslationResult;
        } catch (error) {
            const errorMessage = (error as Error).message || "Unknown error";

            if (errorMessage.includes("429") || errorMessage.includes("quota")) {
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

export async function checkGrammar(text: string): Promise<any> {
    const trimmedText = text.trim();
    const model = getModel();

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
        const result = await withRetry(() => model.generateContent(prompt));
        const response = result.response.text();

        const cleanJson = response.replace(/```json\n?|\n?```/g, "").trim();
        const parsed = JSON.parse(cleanJson);
        return parsed;
    } catch (error) {
        console.error("Grammar check error:", error);
        const errorMessage = (error as Error).message || "Unknown error";
        if (errorMessage.includes("429") || errorMessage.includes("quota")) {
            throw new Error("RATE_LIMIT");
        }
        throw error;
    }
}
