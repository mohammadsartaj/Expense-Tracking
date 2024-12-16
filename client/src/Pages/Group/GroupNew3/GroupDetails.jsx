/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddExpenseForm } from "./AddExpenseseForm";
import { ExpenseList } from "./ExpensesList";
import { BalanceSheet } from "./BalanceSheet";
import { SummarySection } from "./SummarySection";
import { ReportsSection } from "./ReportsSection";

export function GroupDetails({ group }) {
  const [activeTab, setActiveTab] = useState("expenses");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{group.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 ">
            <TabsTrigger value="expenses" className="bg-slate-700">
              Expenses
            </TabsTrigger>
            <TabsTrigger value="balance" className="bg-slate-700">
              Balance
            </TabsTrigger>
            <TabsTrigger value="summary" className="bg-slate-700">
              Summary
            </TabsTrigger>
            <TabsTrigger value="reports" className="bg-slate-700">
              Reports
            </TabsTrigger>
          </TabsList>
          <TabsContent value="expenses">
            <AddExpenseForm group={group} />
            <ExpenseList group={group} />
          </TabsContent>
          <TabsContent value="balance">
            <BalanceSheet group={group} />
          </TabsContent>
          <TabsContent value="summary">
            <SummarySection group={group} />
          </TabsContent>
          <TabsContent value="reports">
            <ReportsSection group={group} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
