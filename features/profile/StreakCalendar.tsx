"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
import { useState, useMemo } from "react";

interface StreakCalendarProps {
    activeDates?: string[]; // ISO date strings (YYYY-MM-DD)
}

export default function StreakCalendar({ activeDates = [] }: StreakCalendarProps) {
    const [currentDate, setCurrentDate] = useState(new Date());

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const activeDateSet = useMemo(() => {
        return new Set(activeDates.map(d => d.split('T')[0]));
    }, [activeDates]);

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDay = firstDay.getDay(); // 0 = Sunday

        const days: (number | null)[] = [];

        // Add empty slots for days before the first day of the month
        for (let i = 0; i < startingDay; i++) {
            days.push(null);
        }

        // Add all days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day);
        }

        return days;
    };

    const days = getDaysInMonth(currentDate);
    const monthYear = currentDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    });

    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const isToday = (day: number) => {
        const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        checkDate.setHours(0, 0, 0, 0);
        return checkDate.getTime() === today.getTime();
    };

    const isActiveDay = (day: number) => {
        const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return activeDateSet.has(dateStr);
    };

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 h-full"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <button
                    onClick={goToPreviousMonth}
                    className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                >
                    <ChevronLeft size={18} className="text-gray-600" />
                </button>
                <h3 className="text-sm font-bold text-gray-900">{monthYear}</h3>
                <button
                    onClick={goToNextMonth}
                    className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                >
                    <ChevronRight size={18} className="text-gray-600" />
                </button>
            </div>

            {/* Weekday headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map((day) => (
                    <div
                        key={day}
                        className="text-center text-xs font-medium text-gray-400 py-1"
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar days */}
            <div className="grid grid-cols-7 gap-1">
                {days.map((day, index) => (
                    <div
                        key={index}
                        className={`
                            relative aspect-square flex items-center justify-center text-xs rounded-lg
                            ${day === null ? "" : "cursor-default"}
                            ${day && isToday(day)
                                ? "bg-blue-600 text-white font-bold"
                                : day && isActiveDay(day)
                                    ? "bg-orange-100 text-orange-700 font-medium"
                                    : day
                                        ? "text-gray-700 hover:bg-gray-50"
                                        : ""
                            }
                        `}
                    >
                        {day}
                        {/* Streak icon for active days */}
                        {day && isActiveDay(day) && !isToday(day) && (
                            <Flame
                                size={10}
                                className="absolute -top-0.5 -right-0.5 text-orange-500"
                            />
                        )}
                        {/* Streak icon for today if active */}
                        {day && isActiveDay(day) && isToday(day) && (
                            <Flame
                                size={10}
                                className="absolute -top-0.5 -right-0.5 text-white"
                            />
                        )}
                    </div>
                ))}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-4 mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded bg-blue-600" />
                    <span className="text-xs text-gray-500">Today</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded bg-orange-100 relative">
                        <Flame size={8} className="absolute -top-0.5 -right-0.5 text-orange-500" />
                    </div>
                    <span className="text-xs text-gray-500">Active</span>
                </div>
            </div>
        </motion.div>
    );
}
