"use client";

import {
    Bar,
    BarChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

type StatusChartProps = {
    data: {
        status: string;
        count: number 
    }[];
};

export default function StatusChart({ data }: StatusChartProps) {
    return (
        <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <XAxis dataKey="status" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="count" fill="#ffccd3" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}    