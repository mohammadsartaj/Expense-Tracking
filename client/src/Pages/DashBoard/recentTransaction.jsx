// import Link from "react-router-dom";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, ShoppingCart, Car, Zap, Utensils } from "lucide-react";

const transactions = [
  { icon: Coffee, name: "Coffee Shop", date: "Jun 28, 2023", amount: -120 },
  {
    icon: ShoppingCart,
    name: "Grocery Store",
    date: "Jun 27, 2023",
    amount: -250,
  },
  { icon: Car, name: "Gas Station", date: "Jun 26, 2023", amount: -180 },
  { icon: Zap, name: "Electric Bill", date: "Jun 25, 2023", amount: -500 },
  { icon: Utensils, name: "Restaurant", date: "Jun 24, 2023", amount: -150 },
];

export function RecentTransactions() {
  return (
    <Link to="/transaction" className="block">
      <Card className="bg-gray-800 hover:bg-gray-700 transition-colors">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <transaction.icon className="h-6 w-6 mr-2" />
                  <div>
                    <div className="font-medium">{transaction.name}</div>
                    <div className="text-sm text-gray-400">
                      {transaction.date}
                    </div>
                  </div>
                </div>
                <span
                  className={`font-bold ${
                    transaction.amount < 0 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {transaction.amount < 0 ? "-" : "+"}₹
                  {Math.abs(transaction.amount)}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
