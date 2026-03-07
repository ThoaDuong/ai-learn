// Test more Gemini model name variants
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error("Set GEMINI_API_KEY first");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(API_KEY);

const MODELS_TO_TEST = [
    // Gemini 3 variants
    "gemini-3-flash-preview",
    "gemini-3-pro-preview",
    "gemini-3.1-pro-preview",
    "gemini-3.1-flash-preview",
    "gemini-3.1-flash-lite-preview",
    // 2.5 variants
    "gemini-2.5-flash-preview",
    "gemini-2.5-flash-lite-preview",
    "gemini-2.5-flash-preview-04-17",
    "gemini-2.5-flash-lite",
    "gemini-2.5-pro-preview",
    // Latest aliases
    "gemini-2.0-flash",
    "gemini-2.0-flash-lite",
    "gemini-1.5-flash",
];

async function testModel(modelName: string) {
    try {
        const model = genAI.getGenerativeModel({
            model: modelName,
            generationConfig: {
                responseMimeType: "application/json",
                maxOutputTokens: 50,
            },
        });
        const result = await model.generateContent('Return JSON: {"status":"ok"}');
        const text = result.response.text();
        console.log(`✅ ${modelName}: ${text.trim().substring(0, 80)}`);
    } catch (error: any) {
        const msg = error.message?.substring(0, 120) || "unknown";
        console.log(`❌ ${modelName}: ${msg}`);
    }
}

async function main() {
    console.log("Testing Gemini model names (round 2)...\n");
    for (const model of MODELS_TO_TEST) {
        await testModel(model);
    }
}

main();
