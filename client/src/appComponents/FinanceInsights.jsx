"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", revenue: 4000, expenses: 2400, profit: 2400, loss: 1000 },
  { name: "Feb", revenue: 3000, expenses: 1398, profit: 2210, loss: 800 },
  { name: "Mar", revenue: 2000, expenses: 9800, profit: 2290, loss: 1200 },
  { name: "Apr", revenue: 2780, expenses: 3908, profit: 2000, loss: 900 },
  { name: "May", revenue: 1890, expenses: 4800, profit: 2181, loss: 700 },
  { name: "Jun", revenue: 2390, expenses: 3800, profit: 2500, loss: 1100 },
  { name: "Jul", revenue: 3490, expenses: 4300, profit: 2100, loss: 800 },
];

const timeRanges = ["1D", "1W", "1M", "3M", "6M", "1Y"];

export default function FinanceInsights() {
  const [activeRange, setActiveRange] = useState("1M");

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        Finance Insights
      </h2>
      <div className="flex space-x-2 mb-4">
        {timeRanges.map((range) => (
          <button
            key={range}
            className={`px-3 py-1 rounded-full text-sm ${
              activeRange === range
                ? "bg-purple-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
            onClick={() => setActiveRange(range)}
          >
            {range}
          </button>
        ))}
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{ backgroundColor: "#1F2937", border: "none" }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#8B5CF6"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="expenses"
              stroke="#EC4899"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="profit"
              stroke="#10B981"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="loss"
              stroke="#F59E0B"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
