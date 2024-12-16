/* eslint-disable react/prop-types */
"use client";
import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
} from "date-fns";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Calendar({ transactions, onDayClick }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const prevMonth = () =>
    setCurrentMonth(
      (date) => new Date(date.getFullYear(), date.getMonth() - 1, 1)
    );
  const nextMonth = () =>
    setCurrentMonth(
      (date) => new Date(date.getFullYear(), date.getMonth() + 1, 1)
    );

  return (
    <div className="bg-gray-200  bg-opacity-80 backdrop-blur-lg rounded-xl p-6 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-black">
          {format(currentMonth, "MMMM yyyy")}
        </h2>
        <div className="flex space-x-2">
          <Button
            onClick={prevMonth}
            variant="outline"
            size="icon"
            className="text-gray-900"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
          <Button
            onClick={nextMonth}
            variant="outline"
            size="icon"
            className="text-gray-900"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 ">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-medium text-gray-800">
            {day}
          </div>
        ))}
        {monthDays.map((day) => {
          const dayTransactions = transactions.filter((t) =>
            isSameDay(new Date(t.date), day)
          );
          const hasIncome = dayTransactions.some((t) => t.type === "income");
          const hasExpense = dayTransactions.some((t) => t.type === "expense");

          return (
            <Button
              key={day.toISOString()}
              onClick={() => onDayClick(day)}
              variant="ghost"
              className={cn(
                "h-14 font-normal relative hover:bg-white hover:bg-opacity-10",
                !isSameMonth(day, currentMonth) && "text-gray-900",
                isSameMonth(day, currentMonth) && "text-gray-700"
              )}
            >
              {format(day, "d")}
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
                {hasIncome && (
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                )}
                {hasExpense && (
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                )}
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
