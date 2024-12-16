"use client";

import { useState } from "react";
import { Menu, X, HelpCircle, LogOut, Plus, Minus, Edit2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// import { Header } from './components/header'
import { SummaryCard } from "./SummaryCard";
import { MonthlyComparison } from "./monthlycompare";
import { AccountsList } from "./accounts-list";
import { BalanceGraph } from "./balancegraph";
import { LastWeekTransactions } from "./lastweektrans";
import { BudgetSection } from "./budgetSection";
import { RecentTransactions } from "./recentTransaction";
import { CashFlowSummary } from "./cashflowsummary";
import { AddIncomeForm } from "./AddincomeForm";
import { AddExpenseForm } from "./AddExpenseForm";
import { SettingsDialog } from "./settingDialog";
import Header from "../../appComponents/Header";
import Sidebar from "../../appComponents/Sidebar";

export default function ExpenseDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [addIncomeOpen, setAddIncomeOpen] = useState(false);
  const [addExpenseOpen, setAddExpenseOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="flex w-screen h-screen bg-gray-900 text-white overflow-x-hidden overflow-y-hidden scrollbar-none">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden scrollbar-none">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto s bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6 scrollbar-none">
          <TooltipProvider>
            <div className="min-h-screen bg-gray-900 text-white">
              {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
              <main className="p-4 md:p-6 lg:p-8">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <SummaryCard />
                  <MonthlyComparison title="This Month" />
                  <MonthlyComparison title="Last Month" />
                  <AccountsList />
                  <BalanceGraph />
                  <LastWeekTransactions />
                  <BudgetSection />
                  <RecentTransactions />
                  <CashFlowSummary />
                </div>
              </main>
              <div className="fixed bottom-4 right-4 flex flex-col gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      className="bg-green-500 hover:bg-green-600"
                      onClick={() => setAddIncomeOpen(true)}
                    >
                      <Plus className="h-6 w-6" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Add Income</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      className="bg-red-500 hover:bg-red-600"
                      onClick={() => setAddExpenseOpen(true)}
                    >
                      <Minus className="h-6 w-6" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Add Expense</TooltipContent>
                </Tooltip>
              </div>
              <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      className="bg-purple-500 hover:bg-purple-600"
                      onClick={() => setSettingsOpen(true)}
                    >
                      <Edit2 className="h-6 w-6" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Settings</TooltipContent>
                </Tooltip>
              </div>
              <AddIncomeForm
                open={addIncomeOpen}
                onOpenChange={setAddIncomeOpen}
              />
              <AddExpenseForm
                open={addExpenseOpen}
                onOpenChange={setAddExpenseOpen}
              />
              <SettingsDialog
                open={settingsOpen}
                onOpenChange={setSettingsOpen}
              />
            </div>
          </TooltipProvider>
        </main>
      </div>
    </div>
  );
}
