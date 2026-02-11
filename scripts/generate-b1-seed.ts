/**
 * Generate B1 Level Vocabulary Seed from full-word.json
 * 
 * This script:
 * 1. Reads full-word.json and filters B1 level words
 * 2. Uses Gemini API to translate word → meaning (Vietnamese) and example → exampleTranslation (Vietnamese) 
 * 3. Outputs the generated b1-vocabulary-seed.ts file
 * 
 * Run: npx tsx scripts/generate-b1-seed.ts
 * 
 * Requires GEMINI_API_KEY in .env.local
 */

import * as fs from "fs";
import * as path from "path";

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

// Clean example text (remove leading pattern like " abandon somebody ")
function cleanExample(example: string): string {
    // Remove patterns like " verb somebody/something " at the beginning
    return example.replace(/^\s*\w+\s+(somebody|something|yourself|oneself|sb|sth|sb\/sth)(\s+(somebody|something|yourself|oneself|sb|sth|sb\/sth|to\s+\w+|from\s+\w+|for\s+\w+|into\s+\w+|as\s+\w+))*\s+/i, "").trim();
}

async function translateBatch(
    genAI: any,
    items: VocabItem[]
): Promise<{ meaning: string; exampleTranslation: string }[]> {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

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

    // Parse JSON from response (handle possible markdown wrapping)
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
        console.error("Failed to parse Gemini response:", jsonStr.substring(0, 200));
        throw err;
    }
}

async function main() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error("❌ GEMINI_API_KEY not found in .env.local");
        process.exit(1);
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // 1. Read and filter B1 words
    console.log("📖 Reading full-word.json...");
    const rawData: FullWordEntry[] = JSON.parse(
        fs.readFileSync(path.resolve(__dirname, "full-word.json"), "utf-8")
    );

    const b1Words: VocabItem[] = rawData
        .filter((entry) => entry.value.level === "B1")
        .map((entry) => {
            const v = entry.value;
            // Pick first meaningful example
            const rawExample = v.examples?.[0] || `This is an example of ${v.word}.`;
            return {
                word: v.word,
                partOfSpeech: v.type,
                level: "B1",
                phonetic: v.phonetics?.us || "",
                example: cleanExample(rawExample),
            };
        });

    // Deduplicate by word (keep first occurrence)
    const seen = new Set<string>();
    const uniqueB1Words = b1Words.filter((item) => {
        if (seen.has(item.word)) return false;
        seen.add(item.word);
        return true;
    });

    console.log(`✅ Found ${uniqueB1Words.length} unique B1 words (from ${b1Words.length} total entries)`);

    // 2. Translate in batches using Gemini
    const BATCH_SIZE = 30;
    const translatedItems: TranslatedVocabItem[] = [];
    const totalBatches = Math.ceil(uniqueB1Words.length / BATCH_SIZE);

    for (let i = 0; i < uniqueB1Words.length; i += BATCH_SIZE) {
        const batchNum = Math.floor(i / BATCH_SIZE) + 1;
        const batch = uniqueB1Words.slice(i, i + BATCH_SIZE);
        console.log(`🔄 Translating batch ${batchNum}/${totalBatches} (${batch.length} words)...`);

        let retries = 3;
        while (retries > 0) {
            try {
                const translations = await translateBatch(genAI, batch);
                for (let j = 0; j < batch.length; j++) {
                    translatedItems.push({
                        ...batch[j],
                        meaning: translations[j].meaning,
                        exampleTranslation: translations[j].exampleTranslation,
                    });
                }
                break;
            } catch (err) {
                retries--;
                if (retries === 0) {
                    console.error(`❌ Failed batch ${batchNum} after 3 retries, using fallback`);
                    for (const item of batch) {
                        translatedItems.push({
                            ...item,
                            meaning: `[TODO: translate "${item.word}"]`,
                            exampleTranslation: `[TODO: translate "${item.example}"]`,
                        });
                    }
                } else {
                    console.log(`⚠️ Retry ${3 - retries}/3 for batch ${batchNum}...`);
                    await new Promise((r) => setTimeout(r, 2000));
                }
            }
        }

        // Rate limit: small delay between batches
        if (i + BATCH_SIZE < uniqueB1Words.length) {
            await new Promise((r) => setTimeout(r, 1000));
        }
    }

    console.log(`✅ Translated ${translatedItems.length} words`);

    // 3. Generate the b1-vocabulary-seed.ts file
    const escapeStr = (s: string) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

    const vocabEntries = translatedItems
        .map(
            (item) => `    {
        word: "${escapeStr(item.word)}",
        meaning: "${escapeStr(item.meaning)}",
        partOfSpeech: "${escapeStr(item.partOfSpeech)}",
        level: "B1",
        phonetic: "${escapeStr(item.phonetic)}",
        example: "${escapeStr(item.example)}",
        exampleTranslation: "${escapeStr(item.exampleTranslation)}"
    }`
        )
        .join(",\n");

    const outputContent = `/**
 * B1 Level Vocabulary Seed Script
 * Auto-generated from full-word.json by generate-b1-seed.ts
 * Run: npx tsx scripts/b1-vocabulary-seed.ts
 */

import { MongoClient, ObjectId } from "mongodb";

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

const b1Vocabulary: Omit<VocabularySeed, "userId" | "createdAt">[] = [
${vocabEntries}
];

async function seedB1Vocabulary() {
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

        // Check if B1 vocabulary already exists for admin
        const existingCount = await vocabularyCollection.countDocuments({
            userId: ADMIN_USER_ID,
            level: "B1"
        });

        if (existingCount > 0) {
            console.log(\`⚠️ Found \${existingCount} existing B1 vocabulary items for admin\`);
            const response = await new Promise<string>((resolve) => {
                process.stdout.write("Do you want to delete and re-seed? (y/n): ");
                process.stdin.once("data", (data) => resolve(data.toString().trim().toLowerCase()));
            });

            if (response === "y") {
                await vocabularyCollection.deleteMany({
                    userId: ADMIN_USER_ID,
                    level: "B1"
                });
                console.log("🗑️ Deleted existing B1 vocabulary");
            } else {
                console.log("❌ Seeding cancelled");
                process.exit(0);
            }
        }

        // Insert vocabulary with timestamps
        const vocabularyToInsert: VocabularySeed[] = b1Vocabulary.map((vocab) => ({
            ...vocab,
            userId: ADMIN_USER_ID,
            createdAt: new Date()
        }));

        const result = await vocabularyCollection.insertMany(vocabularyToInsert);
        console.log(\`✅ Inserted \${result.insertedCount} B1 vocabulary items\`);
        console.log("🎉 Seeding complete!");

    } catch (error) {
        console.error("❌ Error seeding vocabulary:", error);
        process.exit(1);
    } finally {
        await client.close();
        process.exit(0);
    }
}

seedB1Vocabulary();
`;

    const outputPath = path.resolve(__dirname, "b1-vocabulary-seed.ts");
    fs.writeFileSync(outputPath, outputContent, "utf-8");
    console.log(`\n🎉 Generated ${outputPath}`);
    console.log(`📊 Total B1 vocabulary items: ${translatedItems.length}`);
    console.log(`\nTo seed the database, run:`);
    console.log(`  npx tsx scripts/b1-vocabulary-seed.ts`);
}

main().catch(console.error);
