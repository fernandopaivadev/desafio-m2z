"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

interface LeadsChartProps {
    data: { date: string; count: number }[];
}

export default function LeadsChart({ data }: LeadsChartProps) {
    if (data.length === 0) {
        return (
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-zinc-900 mb-4">Leads por dia</h3>
                <p className="text-zinc-500 text-center py-8">Nenhum lead encontrado</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-zinc-900 mb-4">Leads por dia</h3>
            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis 
                            dataKey="date" 
                            tick={{ fontSize: 12 }}
                            tickFormatter={(value) => {
                                const date = new Date(value);
                                return `${date.getDate()}/${date.getMonth() + 1}`;
                            }}
                        />
                        <YAxis tick={{ fontSize: 12 }} allowDecimals={false} />
                        <Tooltip 
                            contentStyle={{ 
                                backgroundColor: "#fff", 
                                border: "1px solid #e5e7eb",
                                borderRadius: "8px"
                            }}
                        />
                        <Bar dataKey="count" fill="#eab308" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}