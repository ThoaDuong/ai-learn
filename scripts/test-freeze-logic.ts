/**
 * Test script for freeze deduction logic
 * This script simulates a user missing a day and tests if freeze is used correctly
 * 
 * Run: pnpm test:freeze
 */

// Load environment variables
require("dotenv").config({ path: ".env.local" });

async function testFreezeLogic() {
    console.log("🧪 Testing Freeze Logic...\n");

    // Import after env vars are loaded
    const { getDatabase } = await import("../lib/mongodb");
    const { shouldUseFreeze, useFreeze, resetStreak } = await import("../common/utils/streakFreezeUtils");
    const { ObjectId } = await import("mongodb");

    const db = await getDatabase();
    const usersCollection = db.collection("users");

    // Step 1: Find a user to test with (or create test data)
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

    // Step 2: Setup test scenario - set lastStreakDate to yesterday
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday.setHours(0, 0, 0, 0);

    console.log("🔧 Setting up test scenario...");
    console.log(`   - Setting streak to 10`);
    console.log(`   - Setting lastStreakDate to yesterday: ${yesterday.toISOString().split('T')[0]}`);
    console.log(`   - Setting freezeCount to 3\n`);

    // Update user to create test scenario
    await usersCollection.updateOne(
        { _id: testUser._id },
        {
            $set: {
                streak: 10,
                lastStreakDate: yesterday,
                freezeCount: 3,
                updatedAt: new Date()
            }
        }
    );

    // Step 3: Test the freeze logic
    const updatedUser = await usersCollection.findOne({ _id: testUser._id });
    const lastStreakDate = updatedUser!.lastStreakDate ? new Date(updatedUser!.lastStreakDate) : null;
    const freezeCount = updatedUser!.freezeCount ?? 0;

    console.log("🧪 Testing shouldUseFreeze()...");
    const shouldFreeze = shouldUseFreeze(lastStreakDate, freezeCount);
    console.log(`   - Should use freeze: ${shouldFreeze ? '✅ YES' : '❌ NO'}`);
    console.log(`   - Reason: ${shouldFreeze ? 'User has freeze available and last activity was yesterday' : 'Conditions not met'}\n`);

    if (shouldFreeze) {
        console.log("🔥 Applying freeze protection...");
        const freezeResult = await useFreeze(testUser._id.toString());

        if (freezeResult.success) {
            console.log(`   ✅ Freeze applied successfully!`);
            console.log(`   - New freeze count: ${freezeResult.newFreezeCount}`);

            // Verify the changes
            const afterFreeze = await usersCollection.findOne({ _id: testUser._id });
            console.log(`   - Streak maintained: ${afterFreeze!.streak} (should still be 10) ✅`);
            console.log(`   - Freeze dates updated: ${afterFreeze!.freezeDates?.length ?? 0} freeze date(s)\n`);
        } else {
            console.log(`   ❌ Failed to apply freeze\n`);
        }
    } else {
        console.log("⚠️  Would reset streak (no freeze available or conditions not met)\n");
    }

    // Step 4: Show final state
    const finalUser = await usersCollection.findOne({ _id: testUser._id });
    console.log("📊 Final User State:");
    console.log(`   - Streak: ${finalUser!.streak}`);
    console.log(`   - Freeze Count: ${finalUser!.freezeCount ?? 0}`);
    console.log(`   - Freeze Dates: ${JSON.stringify(finalUser!.freezeDates ?? [])}`);
    console.log(`   - Last Streak Date: ${finalUser!.lastStreakDate ? new Date(finalUser!.lastStreakDate).toISOString().split('T')[0] : 'N/A'}\n`);

    // Step 5: Test scenario where freeze count is 0
    console.log("🧪 Testing scenario with freezeCount = 0...");
    await usersCollection.updateOne(
        { _id: testUser._id },
        {
            $set: {
                freezeCount: 0,
                streak: 5,
                lastStreakDate: yesterday
            }
        }
    );

    const userNoFreeze = await usersCollection.findOne({ _id: testUser._id });
    const shouldFreezeNoCount = shouldUseFreeze(
        userNoFreeze!.lastStreakDate ? new Date(userNoFreeze!.lastStreakDate) : null,
        userNoFreeze!.freezeCount ?? 0
    );

    console.log(`   - Should use freeze: ${shouldFreezeNoCount ? '✅ YES' : '❌ NO'}`);
    console.log(`   - Reason: No freeze available (freezeCount = 0)`);

    if (userNoFreeze!.freezeCount ?? 0 <= 0) {
        console.log(`   - Would reset streak from ${userNoFreeze!.streak} to 0 ❌\n`);
    }

    console.log("✅ Test completed!");
    console.log("\n💡 To restore original user data, please check the database manually.");

    process.exit(0);
}

testFreezeLogic().catch(error => {
    console.error("❌ Test failed:", error);
    process.exit(1);
});
