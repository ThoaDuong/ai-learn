/**
 * Generate C1 Level Vocabulary Seed from full-word.json
 * 
 * This script:
 * 1. Reads full-word.json and filters C1 level words
 * 2. Uses Gemini API to translate word → meaning (Vietnamese) and example → exampleTranslation (Vietnamese) 
 * 3. Outputs the generated c1-vocabulary-seed.ts file
 * 
 * Features:
 * - Reads from full-word.json
 * - Filters level="C1"
 * - Cleans examples
 * - Auto-rotates models on 429 rate limit
 * - Resume support
 * 
 * Run: npx tsx scripts/generate-c1-seed.ts
 * Requires: GEMINI_API_KEY in .env.local
 */

import * as fs from "fs";
import * as path from "path";
import { MongoClient, ObjectId } from "mongodb";

// Load .env.local manually
const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf-8");
    for (const line of envContent.split("\n")) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith("#")) {
            const eqIndex = trimmed.indexOf("=");
            if (eqIndex > 0) {
                const key = trimmed.substring(0, eqIndex).trim();
                const value = trimmed.substring(eqIndex + 1).trim();
                if (!process.env[key]) {
                    process.env[key] = value;
                }
            }
        }
    }
}

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Models to rotate through when rate limited
const MODELS = [
    "gemini-2.5-flash-lite",
    "gemini-2.5-flash",
    "gemini-2.0-flash",
];

interface FullWordEntry {
    id: number;
    value: {
        word: string;
        href: string;
        type: string;
        level: string;
        us: { mp3: string; ogg: string };
        uk: { mp3: string; ogg: string };
        phonetics: { us: string; uk: string };
        examples: string[];
    };
}

interface VocabItem {
    word: string;
    partOfSpeech: string;
    level: string;
    phonetic: string;
    example: string;
}

interface TranslatedVocabItem extends VocabItem {
    meaning: string;
    exampleTranslation: string;
}

// Track which models are rate-limited and when they can be retried
const modelCooldowns: Map<string, number> = new Map();

function getAvailableModel(): string | null {
    const now = Date.now();
    for (const model of MODELS) {
        const cooldownUntil = modelCooldowns.get(model) || 0;
        if (now >= cooldownUntil) {
            return model;
        }
    }
    return null;
}

function markModelRateLimited(model: string, retryAfterSec: number) {
    const cooldownUntil = Date.now() + retryAfterSec * 1000;
    modelCooldowns.set(model, cooldownUntil);
    console.log(`  🚫 ${model} rate-limited, cooldown ${retryAfterSec}s`);
}

function extractRetryDelay(errorMessage: string): number {
    const match = errorMessage.match(/retry in ([\d.]+)s/i);
    return match ? Math.ceil(parseFloat(match[1])) : 35;
}

function isRateLimitError(err: any): boolean {
    const msg = String(err?.message || err || "");
    return msg.includes("429") || msg.includes("Too Many Requests") || msg.includes("quota");
}

// Clean example text (remove leading pattern like " abandon somebody ")
function cleanExample(example: string): string {
    return example.replace(/^\s*\w+\s+(somebody|something|yourself|oneself|sb|sth|sb\/sth)(\s+(somebody|something|yourself|oneself|sb|sth|sb\/sth|to\s+\w+|from\s+\w+|for\s+\w+|into\s+\w+|as\s+\w+))*\s+/i, "").trim();
}

async function translateBatch(
    genAI: any,
    items: VocabItem[],
    modelName: string
): Promise<{ meaning: string; exampleTranslation: string }[]> {
    const model = genAI.getGenerativeModel({ model: modelName });

    const wordsAndExamples = items.map((item, i) =>
        `${i + 1}. word: "${item.word}" (${item.partOfSpeech}) | example: "${item.example}"`
    ).join("\n");

    const prompt = `Translate the following English words and example sentences to Vietnamese.
For each word, provide:
- meaning: Vietnamese meaning of the word (concise, common translations separated by commas)
- exampleTranslation: Vietnamese translation of the example sentence

Return ONLY a valid JSON array with objects in this format:
[{"meaning": "...", "exampleTranslation": "..."}]

No markdown, no explanation, just the JSON array.
The array must have exactly ${items.length} items in the same order.

${wordsAndExamples}`;

    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();

    // Parse JSON from response
    let jsonStr = text;
    if (jsonStr.startsWith("```")) {
        jsonStr = jsonStr.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    }

    try {
        const parsed = JSON.parse(jsonStr);
        if (!Array.isArray(parsed) || parsed.length !== items.length) {
            throw new Error(`Expected ${items.length} items, got ${parsed.length}`);
        }
        return parsed;
    } catch (err) {
        console.error("Failed to parse Gemini response:", jsonStr.substring(0, 300));
        throw err;
    }
}

async function translateWithRotation(
    genAI: any,
    items: VocabItem[],
    batchLabel: string
): Promise<{ meaning: string; exampleTranslation: string }[]> {
    // Infinite loop for rate limits, but we can limit other errors if needed
    let hardErrorCount = 0;
    const MAX_HARD_ERRORS = 5;

    while (true) {
        const modelName = getAvailableModel();

        if (!modelName) {
            const now = Date.now();
            let minWait = Infinity;
            let nearestModel = MODELS[0];
            for (const [model, cooldownUntil] of modelCooldowns.entries()) {
                const wait = cooldownUntil - now;
                if (wait < minWait) {
                    minWait = wait;
                    nearestModel = model;
                }
            }
            const waitSec = Math.ceil(Math.max(minWait, 1000) / 1000);
            console.log(`  ⏳ All models on cooldown. Waiting ${waitSec}s for ${nearestModel}...`);
            await new Promise((r) => setTimeout(r, waitSec * 1000));
            modelCooldowns.delete(nearestModel);
            continue;
        }

        try {
            console.log(`  🤖 Using ${modelName}...`);
            const result = await translateBatch(genAI, items, modelName);
            return result;
        } catch (err: any) {
            if (isRateLimitError(err)) {
                const retryDelay = extractRetryDelay(String(err?.message || ""));
                markModelRateLimited(modelName, retryDelay);
                // Continue loop to try next model or wait
            } else {
                console.error(`  ❗ Non-rate-limit error on ${modelName}: ${err?.message}`);
                hardErrorCount++;
                if (hardErrorCount >= MAX_HARD_ERRORS) {
                    console.error(`  ❌ ${batchLabel}: Too many hard errors, using fallback`);
                    break; // Break to fallback
                }
                await new Promise((r) => setTimeout(r, 2000));
            }
        }
    }

    return items.map((item) => ({
        meaning: `[TODO: translate "${item.word}"]`,
        exampleTranslation: `[TODO: translate "${item.example}"]`,
    }));
}

async function main() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error("❌ GEMINI_API_KEY not found in .env.local");
        process.exit(1);
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    console.log(`🤖 Models pool: ${MODELS.join(", ")}`);

    // 1. Read and filter C1 words from full-word.json
    console.log("📖 Reading full-word.json...");
    const rawDataPath = path.resolve(__dirname, "full-word.json");
    if (!fs.existsSync(rawDataPath)) {
        console.error("❌ full-word.json not found in scripts/");
        process.exit(1);
    }

    const rawData: FullWordEntry[] = JSON.parse(fs.readFileSync(rawDataPath, "utf-8"));

    const c1Words: VocabItem[] = rawData
        .filter((entry) => entry.value.level === "C1")
        .map((entry) => {
            const v = entry.value;
            const rawExample = v.examples?.[0] || `This is an example of ${v.word}.`;
            return {
                word: v.word,
                partOfSpeech: v.type,
                level: "C1",
                phonetic: v.phonetics?.us || "", // Prefer US phonetic
                example: cleanExample(rawExample),
            };
        });

    // Deduplicate logic
    const seen = new Set<string>();
    const uniqueC1Words = c1Words.filter((item) => {
        if (seen.has(item.word)) return false;
        seen.add(item.word);
        return true;
    });

    console.log(`✅ Found ${uniqueC1Words.length} unique C1 words (from ${c1Words.length} filtered entries)`);

    // 2. Check for resume progress
    const progressPath = path.resolve(__dirname, "c1-enrich-progress.json");
    let enrichedItems: TranslatedVocabItem[] = [];
    let startIndex = 0;

    if (fs.existsSync(progressPath)) {
        enrichedItems = JSON.parse(fs.readFileSync(progressPath, "utf-8"));
        startIndex = enrichedItems.length;
        console.log(`♻️ Resuming from word ${startIndex + 1}/${uniqueC1Words.length}`);
    }

    // 3. Translate in batches
    const BATCH_SIZE = 30;
    const totalBatches = Math.ceil((uniqueC1Words.length - startIndex) / BATCH_SIZE);
    let batchNum = 0;

    for (let i = startIndex; i < uniqueC1Words.length; i += BATCH_SIZE) {
        batchNum++;
        const batch = uniqueC1Words.slice(i, i + BATCH_SIZE);
        const batchLabel = `batch ${batchNum}/${totalBatches} (words ${i + 1}-${i + batch.length})`;
        console.log(`🔄 Translating ${batchLabel}...`);

        const translations = await translateWithRotation(genAI, batch, batchLabel);
        for (let j = 0; j < batch.length; j++) {
            enrichedItems.push({
                ...batch[j],
                meaning: translations[j].meaning,
                exampleTranslation: translations[j].exampleTranslation,
            });
        }

        fs.writeFileSync(progressPath, JSON.stringify(enrichedItems, null, 2), "utf-8");
        console.log(`  ✅ Progress saved: ${enrichedItems.length}/${uniqueC1Words.length}`);

        if (i + BATCH_SIZE < uniqueC1Words.length) {
            await new Promise((r) => setTimeout(r, 500));
        }
    }

    console.log(`\n✅ Translated ${enrichedItems.length} words total`);

    // 4. Generate c1-vocabulary-seed.ts
    const escapeStr = (s: string) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

    const vocabEntries = enrichedItems
        .map(
            (item) => `    {
        word: "${escapeStr(item.word)}",
        meaning: "${escapeStr(item.meaning)}",
        partOfSpeech: "${escapeStr(item.partOfSpeech)}",
        level: "C1",
        phonetic: "${escapeStr(item.phonetic)}",
        example: "${escapeStr(item.example)}",
        exampleTranslation: "${escapeStr(item.exampleTranslation)}"
    }`
        )
        .join(",\n");

    const outputContent = `/**
 * C1 Level Vocabulary Seed Script
 * Auto-generated from full-word.json by generate-c1-seed.ts
 * Run: npx tsx scripts/c1-vocabulary-seed.ts
 */

import * as fs from "fs";
import * as path from "path";
import { MongoClient, ObjectId } from "mongodb";

// Load .env.local manually
const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf-8");
    for (const line of envContent.split("\\n")) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith("#")) {
            const eqIndex = trimmed.indexOf("=");
            if (eqIndex > 0) {
                const key = trimmed.substring(0, eqIndex).trim();
                const value = trimmed.substring(eqIndex + 1).trim();
                if (!process.env[key]) {
                    process.env[key] = value;
                }
            }
        }
    }
}

// Admin user ID for guest mode vocabulary
const ADMIN_USER_ID = new ObjectId("000000000000000000000001");

interface VocabularySeed {
    userId: ObjectId;
    word: string;
    meaning: string;
    partOfSpeech: string;
    level: string;
    phonetic: string;
    example: string;
    exampleTranslation: string;
    createdAt: Date;
}

const c1Vocabulary: Omit<VocabularySeed, "userId" | "createdAt">[] = [
${vocabEntries}
];

async function seedC1Vocabulary() {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        console.error("❌ MONGODB_URI environment variable is not set");
        console.log("Please set it in your .env.local file");
        process.exit(1);
    }

    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("✅ Connected to MongoDB");

        const db = client.db("AILearn");
        const vocabularyCollection = db.collection("vocabularies");

        // Check if C1 vocabulary already exists for admin
        const existingCount = await vocabularyCollection.countDocuments({
            userId: ADMIN_USER_ID,
            level: "C1"
        });

        if (existingCount > 0) {
            console.log(\`⚠️ Found \${existingCount} existing C1 vocabulary items for admin\`);
            const response = await new Promise<string>((resolve) => {
                process.stdout.write("Do you want to delete and re-seed? (y/n): ");
                process.stdin.once("data", (data) => resolve(data.toString().trim().toLowerCase()));
            });

            if (response === "y") {
                await vocabularyCollection.deleteMany({
                    userId: ADMIN_USER_ID,
                    level: "C1"
                });
                console.log("🗑️ Deleted existing C1 vocabulary");
            } else {
                console.log("❌ Seeding cancelled");
                process.exit(0);
            }
        }

        // Insert vocabulary with timestamps
        const vocabularyToInsert: VocabularySeed[] = c1Vocabulary.map((vocab) => ({
            ...vocab,
            userId: ADMIN_USER_ID,
            createdAt: new Date()
        }));

        const result = await vocabularyCollection.insertMany(vocabularyToInsert);
        console.log(\`✅ Inserted \${result.insertedCount} C1 vocabulary items\`);
        console.log("🎉 Seeding complete!");

    } catch (error) {
        console.error("❌ Error seeding vocabulary:", error);
        process.exit(1);
    } finally {
        await client.close();
        process.exit(0);
    }
}

seedC1Vocabulary();
`;

    const outputPath = path.resolve(__dirname, "c1-vocabulary-seed.ts");
    fs.writeFileSync(outputPath, outputContent, "utf-8");
    console.log(`\n🎉 Generated ${outputPath}`);
    console.log(`📊 Total C1 vocabulary items: ${enrichedItems.length}`);

    if (fs.existsSync(progressPath)) {
        fs.unlinkSync(progressPath);
        console.log("🧹 Cleaned up progress file");
    }

    console.log(`\nTo seed the database, run:`);
    console.log(`  npx tsx scripts/c1-vocabulary-seed.ts`);
}

main().catch(console.error);
