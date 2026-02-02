"use client";

import { motion } from "framer-motion";

interface ProfileStatsProps {
    joinDate: string;
    activeDays: number;
    activeTime: number;
}

export default function ProfileStats({ joinDate, activeDays, activeTime }: ProfileStatsProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
        >
            <h3 className="text-lg font-bold text-gray-900 mb-4">Profile Statistics</h3>

            <div className="space-y-4">
                {/* Join Date */}
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Join Date</p>
                        <p className="text-lg font-bold text-gray-900">{joinDate}</p>
                    </div>
                </div>

                {/* Active Days */}
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Active Days</p>
                        <p className="text-lg font-bold text-gray-900">{activeDays} days</p>
                    </div>
                </div>

                {/* Active Time */}
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Active Time</p>
                        <p className="text-lg font-bold text-gray-900">{activeTime} hours</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
