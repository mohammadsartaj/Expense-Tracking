import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function SummaryCard() {
  return (
    <Link
      to="/details/summary"
      className="block hover:no-underline focus:no-underline"
    >
      <Card className="bg-gray-800 hover:bg-gray-700 transition-colors">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-white">Summary</CardTitle>
          <ArrowRight className="text-gray-400 hover:text-white transition-colors" />
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-300">Balance</span>
              <span className="font-bold text-white">₹13,627.71</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Credit Cards</span>
              <span className="font-bold text-red-500">-₹249.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-300">Net Total</span>
              <span className="font-bold text-white">₹13,378.71</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
