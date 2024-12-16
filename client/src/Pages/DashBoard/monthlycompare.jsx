/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

export function MonthlyComparison({ title }) {
  return (
    <Link
      to={`/details/${title.toLowerCase().replace(" ", "-")}`}
      className="block"
    >
      <Card className="bg-gray-800 hover:bg-gray-700 transition-colors">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Total Income</span>
              <span className="flex items-center text-green-500">
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                ₹1,420.00
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Total Expense</span>
              <span className="flex items-center text-red-500">
                <ArrowDownIcon className="h-4 w-4 mr-1" />
                ₹342.00
              </span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Net Balance</span>
              <span>₹1,078.00</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
