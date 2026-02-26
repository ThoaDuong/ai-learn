/**
 * Pure utility functions for streak freeze mechanism.
 * DB operations are in @/lib/streakFreezeDb.
 */

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
 * Get a date string for N days ago
 */
export function getDateStringDaysAgo(daysAgo: number): string {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    return date.toISOString().split('T')[0];
}

/**
 * Calculate how many days a user has missed since their last streak activity.
 * Returns 0 if the user earned streak today or yesterday (no freeze needed).
 * Returns the number of missed days otherwise.
 */
export function calculateMissedDays(lastStreakDate: Date | null): number {
    if (!lastStreakDate) {
        return 0; // No streak history, nothing to protect
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const lastStreak = new Date(lastStreakDate);
    lastStreak.setHours(0, 0, 0, 0);

    const diffTime = today.getTime() - lastStreak.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // If diffDays <= 1, user is still active (today or yesterday) — no freeze needed
    if (diffDays <= 1) {
        return 0;
    }

    // User missed (diffDays - 1) days: e.g. lastStreak=Mon, today=Thu → missed Tue,Wed = 2 days
    return diffDays - 1;
}
