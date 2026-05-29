"use client";

import {
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

type ApplicationsOverTimeChartProps = {
    data: {
        date: string;
        count: number 
    }[];
};

export default function ApplicationsOverTimeChart({ data }: ApplicationsOverTimeChartProps) {
    return (
        <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="date" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Line type="monotone" dataKey="count" stroke="#06b6d4" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}