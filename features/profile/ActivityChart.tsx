"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface ActivityData {
    day: string;
    hours: number;
}

interface ActivityChartProps {
    data: ActivityData[];
}

// Format hours to display as 15p, 30p, 45p, 1h, 1h15p, etc.
const formatTimeLabel = (hours: number): string => {
    if (hours === 0) return "0";

    const totalMinutes = Math.round(hours * 60);
    const h = Math.floor(totalMinutes / 60);
    const m = totalMinutes % 60;

    if (h === 0) {
        return `${m}p`;
    } else if (m === 0) {
        return `${h}h`;
    } else {
        return `${h}h${m}p`;
    }
};

// Generate appropriate Y-axis ticks based on max value
const generateTicks = (maxHours: number): number[] => {
    if (maxHours <= 0.25) {
        // Up to 15 minutes: show 5p, 10p, 15p
        return [0, 0.083, 0.167, 0.25];
    } else if (maxHours <= 1) {
        // Up to 1 hour: show 15p, 30p, 45p, 1h
        return [0, 0.25, 0.5, 0.75, 1];
    } else if (maxHours <= 2) {
        // Up to 2 hours: show 30p, 1h, 1h30p, 2h
        return [0, 0.5, 1, 1.5, 2];
    } else {
        // More than 2 hours: show 1h increments
        const maxTick = Math.ceil(maxHours);
        const ticks = [];
        for (let i = 0; i <= maxTick; i++) {
            ticks.push(i);
        }
        return ticks;
    }
};

export default function ActivityChart({ data }: ActivityChartProps) {
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

    // Calculate max hours for tick generation
    const maxHours = Math.max(...data.map(d => d.hours), 0.25);
    const ticks = generateTicks(maxHours);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
        >
            <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900">Weekly Activity</h3>
                <p className="text-sm text-gray-500 mt-1">Active time per day this week</p>
            </div>

            <div className="w-full h-64 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
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
                            tick={{ fill: '#6b7280', fontSize: 12 }}
                            axisLine={{ stroke: '#d1d5db' }}
                        />
                        <YAxis
                            tick={{ fill: '#6b7280', fontSize: 11 }}
                            axisLine={{ stroke: '#d1d5db' }}
                            tickFormatter={formatTimeLabel}
                            ticks={ticks}
                            domain={[0, ticks[ticks.length - 1]]}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                border: '1px solid #e5e7eb',
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            }}
                            cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
                            formatter={(value: number | undefined) => {
                                if (value === undefined) return ['0', 'Active Time'];
                                return [formatTimeLabel(value), 'Active Time'];
                            }}
                        />
                        <Bar
                            dataKey="hours"
                            radius={[8, 8, 0, 0]}
                            maxBarSize={60}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}

