"use client";

import ActivityChart from "./ActivityChart";
import StreakCalendar from "./StreakCalendar";
import { ProfileStats, WeeklyActivityItem } from "@/types";

interface AnalyticsTabProps {
    stats: ProfileStats | null;
    weeklyActivity: WeeklyActivityItem[];
    vocabulariesCount: number;
    formatActiveTime: (totalMinutes: number) => string;
}

export default function AnalyticsTab({
    stats,
    weeklyActivity,
    vocabulariesCount,
    formatActiveTime,
}: AnalyticsTabProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6">
            {/* Left (70%) - Stats Card + Bar Chart */}
            <div className="space-y-6">
                {/* Stats Card */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Learning Stats</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div className="bg-blue-50 rounded-xl p-4">
                            <p className="text-sm text-gray-500 font-medium">Active Days</p>
                            <p className="text-2xl font-bold text-blue-600">{stats?.activeDays || 0}</p>
                        </div>
                        <div className="bg-purple-50 rounded-xl p-4">
                            <p className="text-sm text-gray-500 font-medium">Active Time</p>
                            <p className="text-2xl font-bold text-purple-600">{formatActiveTime(stats?.activeTime || 0)}</p>
                        </div>
                        <div className="bg-green-50 rounded-xl p-4">
                            <p className="text-sm text-gray-500 font-medium">Words Saved</p>
                            <p className="text-2xl font-bold text-green-600">{vocabulariesCount}</p>
                        </div>
                    </div>
                </div>

                {/* Bar Chart */}
                <ActivityChart data={weeklyActivity} />
            </div>

            {/* Right (30%) - Calendar */}
            <StreakCalendar activeDates={stats?.activeDates || []} freezeDates={stats?.freezeDates || []} />
        </div>
    );
}
