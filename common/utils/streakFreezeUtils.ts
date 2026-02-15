/**
 * Pure utility functions for streak freeze mechanism.
 * DB operations are in @/lib/streakFreezeDb.
 */

/**
 * Check if a date is yesterday (for determining if freeze should be used)
 */
export function isYesterday(date: Date): boolean {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday.setHours(0, 0, 0, 0);

    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);

    return yesterday.getTime() === checkDate.getTime();
}

/**
 * Get today's date as YYYY-MM-DD string
 */
export function getTodayDateString(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
}

/**
 * Get yesterday's date as YYYY-MM-DD string  
 */
export function getYesterdayDateString(): string {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toISOString().split('T')[0];
}

/**
 * Check if user qualifies for freeze protection
 * User qualifies if:
 * 1. They have freezeCount > 0
 * 2. They didn't earn streak today (lastStreakDate < today)
 * 3. Their last streak activity was yesterday (so streak is still valid but at risk)
 */
export function shouldUseFreeze(
    lastStreakDate: Date | null,
    freezeCount: number
): boolean {
    if (!lastStreakDate || freezeCount <= 0) {
        return false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const lastStreak = new Date(lastStreakDate);
    lastStreak.setHours(0, 0, 0, 0);

    // Calculate days since last streak activity
    const diffTime = today.getTime() - lastStreak.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Use freeze if exactly 1 day has passed (yesterday was last activity)
    return diffDays === 1;
}
