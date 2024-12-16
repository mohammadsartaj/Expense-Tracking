/* eslint-disable react/prop-types */
// GroupDashboard.js
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, History, Wallet, Plus } from "lucide-react";

const GroupDashboard = ({ group, expenses, balances }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div
      className={`p-6 ${
        isDarkMode ? "dark bg-gray-900 text-white" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{group.name}</h1>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </Button>
          <Button variant="default">
            <Plus className="mr-2" /> Add Expense
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Group Overview Card */}
        <Card>
          <CardHeader>
            <CardTitle>Group Overview</CardTitle>
            <Users className="w-6 h-6" />
          </CardHeader>
          <CardContent>
            <p>Members: {group.members.length}</p>
            <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
          </CardContent>
        </Card>

        {/* Recent Expenses Widget */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Expenses</CardTitle>
            <History className="w-6 h-6" />
          </CardHeader>
          <CardContent>
            {expenses.slice(0, 3).map((expense) => (
              <div key={expense.id} className="flex justify-between">
                <span>{expense.description}</span>
                <span>${expense.amount.toFixed(2)}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Balance Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Balance Summary</CardTitle>
            <Wallet className="w-6 h-6" />
          </CardHeader>
          <CardContent>
            {balances.map((balance) => (
              <div
                key={balance.userId}
                className={`flex justify-between ${
                  balance.netBalance > 0
                    ? "text-green-600"
                    : balance.netBalance < 0
                    ? "text-red-600"
                    : ""
                }`}
              >
                <span>User {balance.userId}</span>
                <span>${balance.netBalance.toFixed(2)}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GroupDashboard;
