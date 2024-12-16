/* eslint-disable react/prop-types */
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export function SummarySection({ group }) {
  const totalExpenses = group.expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  const expensesByCategory = group.expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const pieChartData = Object.entries(expensesByCategory).map(
    ([name, value]) => ({ name, value })
  );
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF33FF"];

  const barChartData = group.members.map((member) => ({
    name: member.name,
    paid: member.paid,
    owed: member.owed,
  }));

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Group Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-4">
            Total Expenses: ${totalExpenses.toFixed(2)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Expenses by Category
              </h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={pieChartData}
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
                    {pieChartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Member Balances</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={barChartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="paid" name="Paid" fill="#8884d8" />
                  <Bar dataKey="owed" name="Owed" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {group.expenses.slice(0, 5).map((expense, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{expense.description}</span>
                <span className="font-semibold">
                  ${expense.amount.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
