"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ShoppingCart,
  Zap,
  Utensils,
  Plane,
  Film,
  MoreHorizontal,
} from "lucide-react";

const mockPayments = [
  { id: 1, name: "Rent", category: "utilities", amount: 1200, day: 1 },
  { id: 2, name: "Netflix", category: "entertainment", amount: 150, day: 15 },
  { id: 3, name: "Groceries", category: "food", amount: 2000, day: 5 },
  { id: 4, name: "Gym Membership", category: "other", amount: 1000, day: 10 },
];

const categoryIcons = {
  food: Utensils,
  shopping: ShoppingCart,
  utilities: Zap,
  travel: Plane,
  entertainment: Film,
  other: MoreHorizontal,
};

export default function PaymentList() {
  const [filter, setFilter] = useState("all");

  const filteredPayments =
    filter === "all"
      ? mockPayments
      : mockPayments.filter((payment) => payment.category === filter);

  const totalAmount = filteredPayments.reduce(
    (sum, payment) => sum + payment.amount,
    0
  );

  //   const calculateNextPayment = (day: number) => {
  //     const today = new Date();
  //     const nextPayment = new Date(today.getFullYear(), today.getMonth(), day);
  //     if (nextPayment <= today) {
  //       nextPayment.setMonth(nextPayment.getMonth() + 1);
  //     }
  //     const diffTime = Math.abs(nextPayment.getTime() - today.getTime());
  //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  //     return diffDays;
  //   };
  const calculateNextPayment = (day) => {
    const today = new Date();
    const nextPayment = new Date(today.getFullYear(), today.getMonth(), day);
    if (nextPayment <= today) {
      nextPayment.setMonth(nextPayment.getMonth() + 1);
    }
    const diffTime = Math.abs(nextPayment.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        Recurring Payments
      </h2>

      <Select onValueChange={setFilter}>
        <SelectTrigger className="w-full bg-gray-700 border-gray-600 text-white">
          <SelectValue placeholder="Filter by category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="food">Food</SelectItem>
          <SelectItem value="shopping">Shopping</SelectItem>
          <SelectItem value="utilities">Utilities</SelectItem>
          <SelectItem value="travel">Travel</SelectItem>
          <SelectItem value="entertainment">Entertainment</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>

      <div className="space-y-4 max-h-96 overflow-y-auto">
        {filteredPayments.map((payment) => {
          //   const Icon = categoryIcons[payment.category as keyof typeof categoryIcons]
          const Icon = categoryIcons[payment.category];

          const daysUntilNextPayment = calculateNextPayment(payment.day);
          return (
            <Popover key={payment.id}>
              <PopoverTrigger asChild>
                <Card className="bg-gray-700 border-gray-600 hover:bg-gray-600 transition-colors cursor-pointer">
                  <CardContent className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                      <Icon className="text-blue-400" />
                      <span>{payment.name}</span>
                    </div>
                    <span className="font-semibold ">₹ {payment.amount}</span>
                  </CardContent>
                </Card>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-gray-800 border-gray-700 text-white">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">
                    {payment.name} Details
                  </h3>
                  <p>Category: {payment.category}</p>
                  <p>Monthly Amount: ₹{payment.amount}</p>
                  <p>Payment Day: {payment.day}th of each month</p>
                  <p>Next Payment: in {daysUntilNextPayment} days</p>
                </div>
              </PopoverContent>
            </Popover>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-700">
        <p className="text-xl font-bold">
          Total: <span className="text-green-400">₹ {totalAmount}</span>
        </p>
      </div>
    </div>
  );
}
