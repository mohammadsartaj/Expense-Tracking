import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const balanceData = [
  { name: "Alice", value: 150 },
  { name: "Bob", value: -75 },
  { name: "Charlie", value: 50 },
  { name: "David", value: -25 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export function BalanceSheet() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Group Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={balanceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {balanceData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Individual Balances</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {balanceData.map((member, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{member.name}</span>
                <span
                  className={
                    member.value >= 0 ? "text-green-500" : "text-red-500"
                  }
                >
                  ${member.value.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
