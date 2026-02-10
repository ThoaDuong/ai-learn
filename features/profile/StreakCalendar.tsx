"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import { useState, useMemo } from "react";
import Image from "next/image";
import { div } from "framer-motion/client";

interface StreakCalendarProps {
    activeDates?: string[]; // ISO date strings (YYYY-MM-DD)
    freezeDates?: string[]; // ISO date strings for freeze-protected days
}

export default function StreakCalendar({ activeDates = [], freezeDates = [] }: StreakCalendarProps) {
    const [currentDate, setCurrentDate] = useState(new Date());

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const activeDateSet = useMemo(() => {
        return new Set(activeDates.map(d => d.split('T')[0]));
    }, [activeDates]);

    const freezeDateSet = useMemo(() => {
        return new Set(freezeDates.map(d => d.split('T')[0]));
    }, [freezeDates]);

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

    const goToToday = () => {
        setCurrentDate(new Date());
    };

    // Check if currently viewing the current month
    const now = new Date();
    const isCurrentMonth = currentDate.getFullYear() === now.getFullYear() && currentDate.getMonth() === now.getMonth();

    const isToday = (day: number) => {
        const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        checkDate.setHours(0, 0, 0, 0);
        return checkDate.getTime() === today.getTime();
    };

    const isActiveDay = (day: number) => {
        const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return activeDateSet.has(dateStr);
    };

    const isFreezeDay = (day: number) => {
        const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return freezeDateSet.has(dateStr);
    };

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Determine cell style for a given day
    const getDayCellClass = (day: number | null) => {
        if (day === null) return "";
        if (isToday(day)) return "bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold shadow-md";
        if (isFreezeDay(day)) return "text-white font-bold";
        if (isActiveDay(day)) return "text-white font-bold";
        return "text-gray-700 hover:bg-gray-50";
    };

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
                <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-gray-900">{monthYear}</h3>
                    {!isCurrentMonth && (
                        <button
                            onClick={goToToday}
                            className="px-2 py-1 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-medium transition-all flex items-center gap-1"
                        >
                            <CalendarDays size={12} />
                            Today
                        </button>
                    )}
                </div>
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
                            relative aspect-square flex items-center justify-center text-xs rounded-lg overflow-hidden
                            ${day === null ? "" : "cursor-default"}
                            ${getDayCellClass(day)}
                        `}
                    >
                        {/* Fire background for streak days */}
                        {day && isActiveDay(day) && !isFreezeDay(day) && !isToday(day) && (
                            <Image
                                src="/images/fire.png"
                                alt=""
                                fill
                                className="object-cover"
                                sizes="40px"
                            />
                        )}
                        {/* Ice-cube background for freeze days */}
                        {day && isFreezeDay(day) && !isToday(day) && (
                            <Image
                                src="/images/ice-cube.png"
                                alt=""
                                fill
                                className="object-cover"
                                sizes="40px"
                            />
                        )}
                        {/* Day number on top */}
                        <span className="relative z-10 drop-shadow-sm">{day}</span>
                    </div>
                ))}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-4 mt-4 pt-3 border-t border-gray-100 flex-wrap">
                <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded bg-gradient-to-br from-blue-500 to-purple-600" />
                    <span className="text-xs text-gray-500">Today</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Image src="/images/fire.png" alt="Streak" width={16} height={16} />
                    <span className="text-xs text-gray-500">Streak</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Image src="/images/ice-cube.png" alt="Freeze" width={16} height={16} />
                    <span className="text-xs text-gray-500">Freeze</span>
                </div>
            </div>
        </motion.div>
    );
}
