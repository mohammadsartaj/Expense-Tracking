// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// const ExpenseCalendar = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [incomeExpenseData, setIncomeExpenseData] = useState([
//     { date: new Date("2024-12-05"), type: "income", amount: 100 },
//     { date: new Date("2024-12-07"), type: "expense", amount: 50 },
//     // Add more data here
//   ]);

//   const onDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const getTileContent = ({ date, view }) => {
//     if (view === "month") {
//       const matchingData = incomeExpenseData.find(
//         (item) => item.date.toDateString() === date.toDateString()
//       );
//       if (matchingData) {
//         return (
//           <div
//             className={`w-3 h-3 rounded-full ${
//               matchingData.type === "income" ? "bg-green-500" : "bg-red-500"
//             }`}
//           />
//         );
//       }
//     }
//     return null;
//   };

//   return (
//     <Card className="w-full max-w-4xl">
//       <CardHeader>
//         <CardTitle>Expense Calendar</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <Calendar
//           onChange={onDateChange}
//           value={selectedDate}
//           tileContent={getTileContent}
//           className="w-full"
//         />
//       </CardContent>
//     </Card>
//   );
// };

// export default ExpenseCalendar;

import { useState } from "react";
import { Calendar } from "../../appComponents/CalendarFake";
import { TransactionList } from "../../appComponents/CalendarTransactionList";
import { AddTransactionForm } from "../../appComponents/AddCalendarExpense";
import { CalendarRangeIcon } from "lucide-react";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [transactions, setTransactions] = useState([
    {
      id: "1",
      amount: 1000,
      category: "Salary",
      fromTo: "Company Inc.",
      date: new Date(2023, 5, 1),
      time: "09:00",
      type: "income",
    },
    {
      id: "2",
      amount: 50,
      category: "Groceries",
      fromTo: "Supermarket",
      date: new Date(2023, 5, 2),
      time: "14:30",
      type: "expense",
    },
  ]);

  const handleAddTransaction = (newTransaction) => {
    setTransactions((prev) => [...prev, newTransaction]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      {/* <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        <CalendarRangeIcon className="text-white" />
        Daily Finance Tracker
      </h1> */}
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
        <CalendarRangeIcon className="text-purple-600 mr-4" />
        Daily Finance Tracker
      </h1>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Transaction Calendar</h2>
          <AddTransactionForm onAddTransaction={handleAddTransaction} />
        </div>
        <Calendar transactions={transactions} onDayClick={setSelectedDate} />
        <TransactionList
          transactions={transactions}
          selectedDate={selectedDate}
        />
      </div>
    </main>
  );
}
