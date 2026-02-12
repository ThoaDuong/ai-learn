/**
 * Migration script to add freeze count and freeze dates to existing users
 * Run once: pnpm migrate:freeze
 */

// MUST load environment variables BEFORE importing any modules that use them
require("dotenv").config({ path: ".env.local" });


async function migrateAddFreeze() {
    console.log("Starting freeze migration...");

    // Import AFTER environment variables are loaded
    const { getDatabase } = await import("../lib/mongodb");


    try {
        const db = await getDatabase();
        const usersCollection = db.collection("users");

        // Find all users without freezeCount
        const usersWithoutFreeze = await usersCollection.find({
            freezeCount: { $exists: false }
        }).toArray();

        console.log(`Found ${usersWithoutFreeze.length} users without freezeCount`);

        if (usersWithoutFreeze.length === 0) {
            console.log("✅ All users already have freezeCount. No migration needed.");
            return;
        }

        // Update all users to add freezeCount and freezeDates
        const result = await usersCollection.updateMany(
            { freezeCount: { $exists: false } },
            {
                $set: {
                    freezeCount: 5,
                    freezeDates: [],
                    updatedAt: new Date()
                }
            }
        );

        console.log(`✅ Migration complete!`);
        console.log(`   - Modified ${result.modifiedCount} users`);
        console.log(`   - Added freezeCount: 5`);
        console.log(`   - Initialized freezeDates: []`);

        // Also ensure users without freezeDates get initialized (even if they have freezeCount)
        const usersWithoutFreezeDates = await usersCollection.find({
            freezeDates: { $exists: false }
        }).toArray();

        if (usersWithoutFreezeDates.length > 0) {
            console.log(`\nFound ${usersWithoutFreezeDates.length} users without freezeDates`);
            const freezeDatesResult = await usersCollection.updateMany(
                { freezeDates: { $exists: false } },
                {
                    $set: {
                        freezeDates: [],
                        updatedAt: new Date()
                    }
                }
            );
            console.log(`✅ Initialized freezeDates for ${freezeDatesResult.modifiedCount} users`);
        }

        process.exit(0);
    } catch (error) {
        console.error("❌ Migration failed:", error);
        process.exit(1);
    }
}

migrateAddFreeze();
