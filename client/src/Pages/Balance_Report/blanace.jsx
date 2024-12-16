// 'use client'

import { useState, useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  Download,
  Filter,
  Search,
  CreditCard,
  Calendar,
  Users,
  DollarSign,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import { mockData } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatCurrency, futuristicColors } from "@/lib/utils";

const COLORS = [
  futuristicColors.primary,
  futuristicColors.secondary,
  futuristicColors.accent,
  "#FF8042",
];

export default function BalanceSheet() {
  const [selectedGroup, setSelectedGroup] = useState(
    mockData.groupExpenses[0].name
  );
  const [dateFilter, setDateFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExpenses = useMemo(() => {
    return mockData.individualExpenses.filter(
      (expense) =>
        expense.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (dateFilter ? expense.date === dateFilter : true) &&
        (categoryFilter && categoryFilter !== "all"
          ? expense.category === categoryFilter
          : true)
    );
  }, [searchTerm, dateFilter, categoryFilter]);

  const totalGroupExpenses = mockData.groupExpenses.reduce(
    (sum, group) => sum + group.totalExpenses,
    0
  );

  return (
    <div className="container w-full+1/2 py-10 bg-gray-900 text-white">
      <h1
        className="text-4xl font-bold mb-8 text-center"
        style={{ color: futuristicColors.primary }}
      >
        Balance Sheet & Reports
      </h1>

      {/* Summary of Expenses */}
      <Card className="mb-8 bg-gray-800 border-none ">
        <CardHeader>
          <CardTitle
            className="text-2xl"
            style={{ color: futuristicColors.secondary }}
          >
            Summary of Expenses
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap justify-between items-center">
          <div className="flex flex-col items-center mb-4 p-4 bg-gray-700 rounded-lg">
            <DollarSign size={32} style={{ color: futuristicColors.primary }} />
            <p
              className="text-2xl font-bold"
              style={{ color: futuristicColors.primary }}
            >
              {formatCurrency(mockData.summary.totalExpenses)}
            </p>
            <p className="text-sm text-gray-400">Total Expenses</p>
          </div>
          <div className="flex flex-col items-center mb-4 p-4 bg-gray-700 rounded-lg">
            <CreditCard
              size={32}
              style={{ color: futuristicColors.secondary }}
            />
            <p
              className="text-2xl font-bold"
              style={{ color: futuristicColors.secondary }}
            >
              {formatCurrency(mockData.summary.contributions)}
            </p>
            <p className="text-sm text-gray-400">Amount Paid</p>
          </div>
          <div className="flex flex-col items-center mb-4 p-4 bg-gray-700 rounded-lg">
            <TrendingUp size={32} style={{ color: futuristicColors.accent }} />
            <p
              className="text-2xl font-bold"
              style={{ color: futuristicColors.accent }}
            >
              {formatCurrency(mockData.summary.outstandingBalance)}
            </p>
            <p className="text-sm text-gray-400">Amount Owed</p>
          </div>
          <div className="w-full md:w-1/2 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockData.summary.expensesByCategory}
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
                  {mockData.summary.expensesByCategory.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Individual Expenses Report */}
      <Card className="mb-8 bg-gray-800 border-none">
        <CardHeader>
          <CardTitle
            className="text-2xl"
            style={{ color: futuristicColors.secondary }}
          >
            Individual Expenses Report
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center space-x-2">
              <Label htmlFor="search">Search:</Label>
              <Input
                id="search"
                placeholder="Search expenses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-700 text-white"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="date-filter">Date:</Label>
              <Input
                id="date-filter"
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="bg-gray-700 text-white"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="category-filter">Category:</Label>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger
                  id="category-filter"
                  className="bg-gray-700 text-white"
                >
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {Array.from(
                    new Set(mockData.individualExpenses.map((e) => e.category))
                  ).map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <ScrollArea className="h-[400px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Group</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount Paid</TableHead>
                  <TableHead>Amount Owed</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredExpenses.map((expense, index) => (
                  <TableRow key={index}>
                    <TableCell>{expense.date}</TableCell>
                    <TableCell>{expense.group}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        style={{
                          backgroundColor: COLORS[index % COLORS.length],
                          color: "black",
                        }}
                      >
                        {expense.category}
                      </Badge>
                    </TableCell>
                    <TableCell>{expense.description}</TableCell>
                    <TableCell>{formatCurrency(expense.amountPaid)}</TableCell>
                    <TableCell>{formatCurrency(expense.amountOwed)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Group Expenses Report */}
      <Card className="mb-8 bg-gray-800 border-none">
        <CardHeader>
          <CardTitle
            className="text-2xl"
            style={{ color: futuristicColors.secondary }}
          >
            Group Expenses Report
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 mb-4">
            {mockData.groupExpenses.map((group) => (
              <Button
                key={group.name}
                onClick={() => setSelectedGroup(group.name)}
                variant={selectedGroup === group.name ? "default" : "outline"}
                style={{
                  backgroundColor:
                    selectedGroup === group.name
                      ? futuristicColors.primary
                      : "transparent",
                  color: "black",
                }}
              >
                {group.name}
              </Button>
            ))}
          </div>
          {mockData.groupExpenses.map(
            (group) =>
              group.name === selectedGroup && (
                <div key={group.name}>
                  <div className="mb-4">
                    <p className="text-lg font-semibold">
                      Group Total: {formatCurrency(group.totalExpenses)}
                    </p>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Member</TableHead>
                        <TableHead>Contribution</TableHead>
                        <TableHead>Balance</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {group.members.map((member, index) => (
                        <TableRow key={index}>
                          <TableCell>{member.name}</TableCell>
                          <TableCell>
                            {formatCurrency(member.contribution)}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                member.balance >= 0 ? "default" : "destructive"
                              }
                            >
                              {formatCurrency(member.balance)}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )
          )}
          <div className="mt-4">
            <p
              className="text-xl font-bold"
              style={{ color: futuristicColors.accent }}
            >
              Total Across All Groups: {formatCurrency(totalGroupExpenses)}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Downloadable Reports */}
      <Card className="mb-8 bg-gray-800 border-none">
        <CardHeader>
          <CardTitle
            className="text-2xl"
            style={{ color: futuristicColors.secondary }}
          >
            Downloadable Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <Button
              style={{
                backgroundColor: futuristicColors.primary,
                color: "black",
              }}
            >
              <Download className="mr-2 h-4 w-4" /> Export as PDF
            </Button>
            <Button
              variant="outline"
              style={{
                borderColor: futuristicColors.secondary,
                color: futuristicColors.secondary,
              }}
            >
              <Download className="mr-2 h-4 w-4" /> Export as CSV
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Transaction History */}
      <Card className="mb-8 bg-gray-800 border-none">
        <CardHeader>
          <CardTitle
            className="text-2xl"
            style={{ color: futuristicColors.secondary }}
          >
            Transaction History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Label htmlFor="transaction-search">Search:</Label>
              <Input
                id="transaction-search"
                placeholder="Search transactions..."
                className="bg-gray-700 text-white"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="transaction-filter">Filter:</Label>
              <Select>
                <SelectTrigger
                  id="transaction-filter"
                  className="bg-gray-700 text-white"
                >
                  <SelectValue placeholder="Select filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="split">Split</SelectItem>
                  <SelectItem value="exact">Exact</SelectItem>
                  <SelectItem value="dynamic">Dynamic</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <ScrollArea className="h-[300px]">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockData.transactionHistory.map((transaction, index) => (
                  <TableRow key={index}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.time}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        style={{
                          backgroundColor: COLORS[index % COLORS.length],
                          color: "black",
                        }}
                      >
                        {transaction.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{formatCurrency(transaction.amount)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Notifications Section */}
      <Card className="bg-gray-800 border-none">
        <CardHeader>
          <CardTitle
            className="text-2xl"
            style={{ color: futuristicColors.secondary }}
          >
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[200px]">
            {mockData.notifications.map((notification, index) => (
              <div
                key={index}
                className="mb-2 p-2 bg-gray-700 rounded-md flex items-center"
              >
                {notification.type === "payment" && (
                  <DollarSign
                    className="mr-2"
                    style={{ color: futuristicColors.primary }}
                  />
                )}
                {notification.type === "reminder" && (
                  <Calendar
                    className="mr-2"
                    style={{ color: futuristicColors.secondary }}
                  />
                )}
                {notification.type === "update" && (
                  <Users
                    className="mr-2"
                    style={{ color: futuristicColors.accent }}
                  />
                )}
                <div>
                  <p
                    className="font-semibold"
                    style={{ color: COLORS[index % COLORS.length] }}
                  >
                    {notification.type}
                  </p>
                  <p>{notification.message}</p>
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
