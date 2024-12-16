import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const generateRandomData = (month) => ({
  incomeTotal: Math.floor(Math.random() * 5000) + 1000,
  expenseTotal: Math.floor(Math.random() * 3000) + 500,
  averageDaily: Math.floor(Math.random() * 200) + 50,
  averagePerTransaction: Math.floor(Math.random() * 100) + 20,
});

export function CashFlowSummary() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [data, setData] = useState(generateRandomData(selectedMonth));

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    setData(generateRandomData(month));
  };

  return (
    <Card className="bg-gray-800">
      <CardHeader>
        <CardTitle>Cash Flow Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {months.map((month, index) => (
            <Button
              key={month}
              variant={selectedMonth === index ? "default" : "outline"}
              size="sm"
              onClick={() => handleMonthChange(index)}
            >
              {month.slice(0, 3)}
            </Button>
          ))}
        </div>
        <table className="w-full">
          <tbody>
            <tr>
              <td>Income Total</td>
              <td className="text-right font-bold text-green-500">
                ₹{data.incomeTotal.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td>Expense Total</td>
              <td className="text-right font-bold text-red-500">
                ₹{data.expenseTotal.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td>Average Daily Transactions</td>
              <td className="text-right font-bold">
                ₹{data.averageDaily.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td>Average per Transaction</td>
              <td className="text-right font-bold">
                ₹{data.averagePerTransaction.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
