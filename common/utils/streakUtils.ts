/**
 * Utility functions for streak tracking
 */

/**
 * Check if two dates are consecutive days
 */
export function isConsecutiveDay(lastDate: Date, currentDate: Date): boolean {
    const last = new Date(lastDate);
    const current = new Date(currentDate);

    // Reset time parts to compare only dates
    last.setHours(0, 0, 0, 0);
    current.setHours(0, 0, 0, 0);

    // Calculate difference in days
    const diffTime = current.getTime() - last.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays === 1;
}

/**
 * Check if two dates are the same day
 */
export function isSameDay(date1: Date, date2: Date): boolean {
    const d1 = new Date(date1);
    const d2 = new Date(date2);

    return (
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate()
    );
}

/**
 * Calculate new streak based on last login date
 */
export function calculateStreak(lastLoginDate: Date | null, currentStreak: number): number {
    if (!lastLoginDate) {
        // First login
        return 1;
    }

    const now = new Date();

    // If already logged in today, maintain streak
    if (isSameDay(lastLoginDate, now)) {
        return currentStreak;
    }

    // If consecutive day, increment streak
    if (isConsecutiveDay(lastLoginDate, now)) {
        return currentStreak + 1;
    }

    // If gap in days, reset streak
    return 1;
}

/**
 * Format streak display text
 */
export function formatStreakText(streak: number): string {
    if (streak === 1) {
        return "1 day streak";
    }
    return `${streak} days streak`;
}
