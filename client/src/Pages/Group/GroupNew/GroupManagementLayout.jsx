// GroupManagementLayout.js
import React, { useState } from "react";
import { Layout, LayoutSidebar, LayoutContent } from "./customlayout";
import { Button } from "@/components/ui/button";
import { Users, DollarSign, Settings, LogOut } from "lucide-react";

import GroupDashboard from "./GroupDashBoard";
import ExpenseEntry from "./ExpenseEntry";
import BalanceReconciliation from "./BalanceReconciliation";

const GroupManagementLayout = () => {
  const [activeView, setActiveView] = useState("dashboard");

  const mockGroup = {
    id: "group1",
    name: "Roommate Expenses",
    type: "Roommates",
    members: [
      { userId: "user1", role: "Admin" },
      { userId: "user2", role: "Member" },
      { userId: "user3", role: "Member" },
    ],
  };

  const mockExpenses = [
    {
      id: "exp1",
      description: "Groceries",
      amount: 150.0,
      paidBy: "user1",
    },
    {
      id: "exp2",
      description: "Utilities",
      amount: 200.0,
      paidBy: "user2",
    },
  ];

  const mockBalances = [
    {
      userId: "user1",
      totalOwed: 100,
      totalPaid: 150,
      netBalance: 50,
    },
    {
      userId: "user2",
      totalOwed: 150,
      totalPaid: 100,
      netBalance: -50,
    },
    {
      userId: "user3",
      totalOwed: 0,
      totalPaid: 0,
      netBalance: 0,
    },
  ];

  const handleExpenseSubmit = (expense) => {
    console.log("New Expense:", expense);
  };

  const handleReconcile = () => {
    console.log("Reconciling balances");
  };

  const handleDownload = (format) => {
    console.log(`Downloading balance sheet in ${format}`);
  };

  return (
    <Layout className="h-screen flex">
      <LayoutSidebar className="w-64 bg-gray-600 p-4">
        <div className="space-y-2">
          <Button
            variant={activeView === "dashboard" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveView("dashboard")}
          >
            <Users className="mr-2 h-4 w-4" /> Group Dashboard
          </Button>
          <Button
            variant={activeView === "expenses" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveView("expenses")}
          >
            <DollarSign className="mr-2 h-4 w-4" /> Expenses
          </Button>
          <Button
            variant={activeView === "balances" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveView("balances")}
          >
            <Settings className="mr-2 h-4 w-4" /> Balance Reconciliation
          </Button>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <Button variant="outline" className="w-full">
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </LayoutSidebar>

      <LayoutContent className="flex-1 p-6 overflow-y-auto">
        {activeView === "dashboard" && (
          <GroupDashboard
            group={mockGroup}
            expenses={mockExpenses}
            balances={mockBalances}
          />
        )}

        {activeView === "expenses" && (
          <ExpenseEntry
            groupMembers={mockGroup.members.map((m) => m.userId)}
            onSubmit={handleExpenseSubmit}
          />
        )}

        {activeView === "balances" && (
          <BalanceReconciliation
            balances={mockBalances}
            onReconcile={handleReconcile}
            onDownload={handleDownload}
          />
        )}
      </LayoutContent>
    </Layout>
  );
};

export default GroupManagementLayout;
