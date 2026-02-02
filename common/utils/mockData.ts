/**
 * Mock data for demo purposes
 */

export interface WeeklyActivityData {
    day: string;
    hours: number;
}

/**
 * Generate mock weekly activity data (Monday to Sunday)
 */
export function generateWeeklyActivity(): WeeklyActivityData[] {
    return [
        { day: "Mon", hours: 2.5 },
        { day: "Tue", hours: 3.2 },
        { day: "Wed", hours: 1.8 },
        { day: "Thu", hours: 4.1 },
        { day: "Fri", hours: 3.7 },
        { day: "Sat", hours: 5.2 },
        { day: "Sun", hours: 2.9 },
    ];
}

/**
 * Mock user statistics
 */
export interface UserStats {
    joinDate: string;
    activeDays: number;
    activeTime: number; // in hours
    currentStreak: number;
}

/**
 * Generate mock user statistics
 */
export function generateMockUserStats(): UserStats {
    return {
        joinDate: "15/02/2026",
        activeDays: 12,
        activeTime: 35,
        currentStreak: 5,
    };
}
