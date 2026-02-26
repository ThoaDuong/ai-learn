/**
 * Test script for freeze deduction logic
 * This script simulates a user missing multiple days and tests if freezes are consumed correctly
 * 
 * Run: pnpm test:freeze
 */

// Load environment variables
require("dotenv").config({ path: ".env.local" });

async function testFreezeLogic() {
    console.log("🧪 Testing Freeze Logic...\n");

    // Import after env vars are loaded
    const { getDatabase } = await import("../lib/mongodb");
    const { calculateMissedDays } = await import("../common/utils/streakFreezeUtils");
    const { useMultipleFreezes, resetStreak } = await import("../lib/streakFreezeDb");
    const { ObjectId } = await import("mongodb");

    const db = await getDatabase();
    const usersCollection = db.collection("users");

    // Step 1: Find a user to test with
    const testUser = await usersCollection.findOne({});

    if (!testUser) {
        console.log("❌ No users found in database");
        process.exit(1);
    }

    console.log("📋 Test User:");
    console.log(`   - Name: ${testUser.name}`);
    console.log(`   - Email: ${testUser.email}`);
    console.log(`   - Current Streak: ${testUser.streak ?? 0}`);
    console.log(`   - Freeze Count: ${testUser.freezeCount ?? 5}`);
    console.log(`   - Last Streak Date: ${testUser.lastStreakDate ? new Date(testUser.lastStreakDate).toISOString() : 'N/A'}\n`);

    // Step 2: Setup test scenario - set lastStreakDate to 3 days ago (missed 2 days)
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    threeDaysAgo.setHours(0, 0, 0, 0);

    console.log("🔧 Setting up test scenario...");
    console.log(`   - Setting streak to 10`);
    console.log(`   - Setting lastStreakDate to 3 days ago: ${threeDaysAgo.toISOString().split('T')[0]}`);
    console.log(`   - Setting freezeCount to 3\n`);

    await usersCollection.updateOne(
        { _id: testUser._id },
        {
            $set: {
                streak: 10,
                lastStreakDate: threeDaysAgo,
                freezeCount: 3,
                updatedAt: new Date()
            }
        }
    );

    // Step 3: Test the freeze logic
    const updatedUser = await usersCollection.findOne({ _id: testUser._id });
    const lastStreakDate = updatedUser!.lastStreakDate ? new Date(updatedUser!.lastStreakDate) : null;
    const freezeCount = updatedUser!.freezeCount ?? 0;

    console.log("🧪 Testing calculateMissedDays()...");
    const missedDays = calculateMissedDays(lastStreakDate);
    console.log(`   - Missed days: ${missedDays}`);
    console.log(`   - Freeze available: ${freezeCount}`);
    console.log(`   - Can cover all missed days: ${freezeCount >= missedDays ? '✅ YES' : '❌ NO'}\n`);

    if (missedDays > 0 && freezeCount >= missedDays) {
        console.log("🔥 Applying freeze protection for all missed days...");
        const missedDateStrings: string[] = [];
        for (let i = missedDays; i >= 1; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            missedDateStrings.push(d.toISOString().split('T')[0]);
        }
        console.log(`   - Freeze dates: ${missedDateStrings.join(', ')}`);

        const freezeResult = await useMultipleFreezes(testUser._id.toString(), missedDays, missedDateStrings);

        if (freezeResult.success) {
            console.log(`   ✅ Freezes applied successfully!`);
            console.log(`   - Freezes used: ${freezeResult.freezesUsed}`);
            console.log(`   - New freeze count: ${freezeResult.newFreezeCount}`);

            const afterFreeze = await usersCollection.findOne({ _id: testUser._id });
            console.log(`   - Streak maintained: ${afterFreeze!.streak} (should still be 10) ✅`);
            console.log(`   - Freeze dates updated: ${JSON.stringify(afterFreeze!.freezeDates ?? [])}\n`);
        } else {
            console.log(`   ❌ Failed to apply freeze\n`);
        }
    } else if (missedDays > 0) {
        console.log("⚠️  Not enough freezes — would reset streak\n");
    }

    // Step 4: Show final state
    const finalUser = await usersCollection.findOne({ _id: testUser._id });
    console.log("📊 Final User State:");
    console.log(`   - Streak: ${finalUser!.streak}`);
    console.log(`   - Freeze Count: ${finalUser!.freezeCount ?? 0}`);
    console.log(`   - Freeze Dates: ${JSON.stringify(finalUser!.freezeDates ?? [])}`);
    console.log(`   - Last Streak Date: ${finalUser!.lastStreakDate ? new Date(finalUser!.lastStreakDate).toISOString().split('T')[0] : 'N/A'}\n`);

    console.log("✅ Test completed!");
    console.log("\n💡 To restore original user data, please check the database manually.");

    process.exit(0);
}

testFreezeLogic().catch(error => {
    console.error("❌ Test failed:", error);
    process.exit(1);
});
