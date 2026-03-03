"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";

interface ActivityData {
    day: string;
    minutes: number;
    correct?: number;
    wrong?: number;
    fullDate?: string;
}

interface ActivityChartProps {
    data?: ActivityData[]; // Made optional as we fetch internally
}

// Format minutes to display as 15m, 30m, 45m, 1h, 1h15m, etc.
const formatTimeLabel = (minutes: number): string => {
    if (minutes === 0) return "0";

    const h = Math.floor(minutes / 60);
    const m = minutes % 60;

    if (h === 0) {
        return `${m}m`;
    } else if (m === 0) {
        return `${h}h`;
    } else {
        return `${h}h${m}m`;
    }
};

// Generate appropriate Y-axis ticks based on max value
const generateTicks = (maxMinutes: number): number[] => {
    if (maxMinutes <= 15) {
        // Up to 15 minutes: show 5m, 10m, 15m
        return [0, 5, 10, 15];
    } else if (maxMinutes <= 60) {
        // Up to 1 hour: show 15m, 30m, 45m, 1h
        return [0, 15, 30, 45, 60];
    } else if (maxMinutes <= 120) {
        // Up to 2 hours: show 30m, 1h, 1h30m, 2h
        return [0, 30, 60, 90, 120];
    } else {
        // More than 2 hours: show 1h increments
        const maxTick = Math.ceil(maxMinutes / 60) * 60;
        const ticks = [];
        for (let i = 0; i <= maxTick; i += 60) {
            ticks.push(i);
        }
        return ticks;
    }
};

// Helper to get Monday of current week
const getMonday = (d: Date) => {
    const date = new Date(d);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    const monday = new Date(date.setDate(diff));
    monday.setHours(0, 0, 0, 0);
    return monday;
};

// Format date as "2/2"
const formatDateShort = (d: Date) => {
    return `${d.getDate()}/${d.getMonth() + 1}`;
};

export default function ActivityChart({ data: initialData }: ActivityChartProps) {
    const [weekStart, setWeekStart] = useState<Date>(getMonday(new Date()));
    const [chartData, setChartData] = useState<ActivityData[]>(initialData || []);
    const [isLoading, setIsLoading] = useState(false);

    // Fetch weekly data
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                // Adjust to send local YYYY-MM-DD
                const offset = weekStart.getTimezoneOffset();
                const localDate = new Date(weekStart.getTime() - (offset * 60 * 1000));
                const dateStr = localDate.toISOString().split('T')[0];

                const res = await fetch(`/api/activity?start=${dateStr}`);
                if (res.ok) {
                    const json = await res.json();
                    setChartData(json.activity);
                }
            } catch (error) {
                console.error("Failed to fetch activity:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [weekStart]);

    // Calculate week end date (Sunday)
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);

    const weekRangeStr = `${formatDateShort(weekStart)} - ${formatDateShort(weekEnd)}`;

    const goToPrevWeek = () => {
        const prev = new Date(weekStart);
        prev.setDate(weekStart.getDate() - 7);
        setWeekStart(prev);
    };

    const goToNextWeek = () => {
        const next = new Date(weekStart);
        next.setDate(weekStart.getDate() + 7);
        setWeekStart(next);
    };

    const goToToday = () => {
        setWeekStart(getMonday(new Date()));
    };

    // Check if currently viewing this week
    const isCurrentWeek = getMonday(new Date()).getTime() === weekStart.getTime();

    // Colors for bars with gradient effect
    const barColors = [
        "#3b82f6", // blue-500
        "#60a5fa", // blue-400
        "#93c5fd", // blue-300
        "#3b82f6",
        "#60a5fa",
        "#93c5fd",
        "#3b82f6",
    ];

    // Calculate max minutes for tick generation
    const maxMinutes = Math.max(...(chartData?.map(d => d.minutes) || []), 15);
    const ticks = generateTicks(maxMinutes);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
        >
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold text-gray-900">Weekly Activity</h3>
                    <p className="text-sm text-gray-500 mt-1">Active time per day</p>
                    <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1.5">
                            <span className="w-3 h-3 rounded-sm bg-blue-400" />
                            <span className="text-xs text-gray-500">Minutes</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-3 h-1 rounded bg-emerald-500" />
                            <span className="text-xs text-gray-500">Correct</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="w-3 h-1 rounded bg-red-400" />
                            <span className="text-xs text-gray-500">Wrong</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    {/* Today Button */}
                    {!isCurrentWeek && (
                        <button
                            onClick={goToToday}
                            className="px-2.5 py-1.5 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-medium transition-all flex items-center gap-1"
                            disabled={isLoading}
                        >
                            <CalendarDays size={14} />
                            Today
                        </button>
                    )}

                    {/* Week Navigation */}
                    <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-lg border border-gray-100">
                        <button
                            onClick={goToPrevWeek}
                            className="p-1.5 rounded-md hover:bg-white hover:shadow-sm transition-all text-gray-600"
                            disabled={isLoading}
                        >
                            <ChevronLeft size={16} />
                        </button>
                        <span className="text-sm font-semibold text-gray-700 w-24 text-center">
                            {weekRangeStr}
                        </span>
                        <button
                            onClick={goToNextWeek}
                            className="p-1.5 rounded-md hover:bg-white hover:shadow-sm transition-all text-gray-600"
                            disabled={isLoading}
                        >
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full h-64 sm:h-80 relative">
                {isLoading && (
                    <div className="absolute inset-0 bg-white/50 z-10 flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                    </div>
                )}

                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        data={chartData}
                        margin={{
                            top: 5,
                            right: 10,
                            left: 10,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis
                            dataKey="day"
                            tick={({ x, y, payload, index }: any) => {
                                const date = new Date(weekStart);
                                date.setDate(weekStart.getDate() + index);
                                const dateStr = `${date.getDate()}/${date.getMonth() + 1}`;
                                return (
                                    <g transform={`translate(${x},${y})`}>
                                        <text x={0} y={0} dy={14} textAnchor="middle" fill="#6b7280" fontSize={12}>
                                            {payload.value}
                                        </text>
                                        <text x={0} y={0} dy={28} textAnchor="middle" fill="#9ca3af" fontSize={10}>
                                            {dateStr}
                                        </text>
                                    </g>
                                );
                            }}
                            axisLine={{ stroke: '#d1d5db' }}
                            height={45}
                        />
                        <YAxis
                            yAxisId="left"
                            tick={{ fill: '#6b7280', fontSize: 11 }}
                            axisLine={{ stroke: '#d1d5db' }}
                            tickFormatter={formatTimeLabel}
                            ticks={ticks}
                            domain={[0, ticks[ticks.length - 1]]}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            tick={{ fill: '#6b7280', fontSize: 11 }}
                            axisLine={{ stroke: '#d1d5db' }}
                            allowDecimals={false}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            }}
                            cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
                            formatter={(value: any, name: any) => {
                                if (value === undefined) return ['0', name];
                                if (name === 'minutes') return [formatTimeLabel(value), 'Active Time'];
                                if (name === 'correct') return [value, 'Correct ✅'];
                                if (name === 'wrong') return [value, 'Wrong ❌'];
                                return [value, name];
                            }}
                        />
                        <Bar
                            yAxisId="left"
                            dataKey="minutes"
                            radius={[8, 8, 0, 0]}
                            maxBarSize={60}
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
                            ))}
                        </Bar>
                        <Line
                            yAxisId="right"
                            type="monotone"
                            dataKey="correct"
                            stroke="#10b981"
                            strokeWidth={2.5}
                            dot={{ fill: '#10b981', r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                        <Line
                            yAxisId="right"
                            type="monotone"
                            dataKey="wrong"
                            stroke="#ef4444"
                            strokeWidth={2.5}
                            dot={{ fill: '#ef4444', r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}
