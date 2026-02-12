/**
 * Restore script to fix user data after testing
 */

// Load environment variables
require("dotenv").config({ path: ".env.local" });

async function restoreUserData() {
    console.log("↺ Restoring User Data...");

    // Import after env vars are loaded
    const { getDatabase } = await import("../lib/mongodb");
    const { ObjectId } = await import("mongodb");

    const db = await getDatabase();
    const usersCollection = db.collection("users");

    // Find the test user (Thoa Dương)
    const testUser = await usersCollection.findOne({ email: "kimthoa2598@gmail.com" });

    if (!testUser) {
        console.log("❌ Test user not found");
        process.exit(1);
    }

    console.log(`Found user: ${testUser.name}`);
    console.log(`Current State: Streak ${testUser.streak}, Freeze ${testUser.freezeCount}`);

    // Restore to original state (approximately)
    // Original: Streak 1, Freeze 5, LastStreakDate failed to capture exactly but was 2026-02-11

    const restoreResult = await usersCollection.updateOne(
        { _id: testUser._id },
        {
            $set: {
                streak: 1,
                freezeCount: 5,
                // Set last streak date back to a safe value (yesterday or today)
                // Let's set it to 2026-02-11 as seen in logs
                lastStreakDate: new Date("2026-02-11T15:46:12.726Z"),
                freezeDates: [], // Clear test freeze dates
                updatedAt: new Date()
            }
        }
    );

    console.log("✅ User data restored!");
    console.log(`   - Streak: 1`);
    console.log(`   - Freeze Count: 5`);
    console.log(`   - Freeze Dates: []`);

    process.exit(0);
}

restoreUserData().catch(error => {
    console.error("❌ Restore failed:", error);
    process.exit(1);
});
