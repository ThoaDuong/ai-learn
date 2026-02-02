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

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
        >
            <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900">Weekly Activity</h3>
                <p className="text-sm text-gray-500 mt-1">Active hours per day this week</p>
            </div>

            <div className="w-full h-64 sm:h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 10,
                            left: 0,
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
                            tick={{ fill: '#6b7280', fontSize: 12 }}
                            axisLine={{ stroke: '#d1d5db' }}
                            label={{
                                value: 'Hours',
                                angle: -90,
                                position: 'insideLeft',
                                style: { fill: '#6b7280', fontSize: 12 }
                            }}
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
                                if (value === undefined) return ['0 hours', 'Active Time'];
                                return [`${value} hours`, 'Active Time'];
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
