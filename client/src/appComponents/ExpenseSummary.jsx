import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Utensils,
  Car,
  Home,
  Film,
  ShoppingBag,
  MoreHorizontal,
} from "lucide-react";

const categories = [
  {
    name: "Food",
    icon: Utensils,
    subcategories: ["Groceries", "Restaurants", "Takeout"],
  },
  {
    name: "Travel",
    icon: Car,
    subcategories: ["Gas", "Public Transport", "Flights"],
  },
  {
    name: "Utilities",
    icon: Home,
    subcategories: ["Electricity", "Water", "Internet"],
  },
  {
    name: "Entertainment",
    icon: Film,
    subcategories: ["Movies", "Concerts", "Subscriptions"],
  },
  {
    name: "Shopping",
    icon: ShoppingBag,
    subcategories: ["Clothes", "Electronics", "Home Goods"],
  },
  { name: "Other", icon: MoreHorizontal, subcategories: ["Miscellaneous"] },
];

// eslint-disable-next-line react/prop-types
export default function ExpenseSummary({ expenses }) {
  // eslint-disable-next-line react/prop-types
  const categoryTotals = expenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = { total: 0, subcategories: {} };
    }
    acc[expense.category].total += expense.amount;

    const subcategory = expense.subcategory || "Miscellaneous";
    if (!acc[expense.category].subcategories[subcategory]) {
      acc[expense.category].subcategories[subcategory] = 0;
    }
    acc[expense.category].subcategories[subcategory] += expense.amount;

    return acc;
  }, {});

  const totalAmount = Object.values(categoryTotals).reduce(
    (sum, category) => sum + category.total,
    0
  );

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Expense Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {categories.map((category) => {
            const categoryData = categoryTotals[category.name] || {
              total: 0,
              subcategories: {},
            };
            return (
              <div key={category.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <category.icon className="w-5 h-5 text-purple-400" />
                    <span className="text-lg font-semibold text-gray-300">
                      {category.name}
                    </span>
                  </div>
                  <span className="text-lg font-semibold text-purple-400">
                    ${categoryData.total.toFixed(2)}
                  </span>
                </div>
                <div className="pl-7 space-y-1">
                  {category.subcategories.map((subcategory) => (
                    <div
                      key={subcategory}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-gray-400">{subcategory}</span>
                      <span className="text-gray-300">
                        $
                        {(categoryData.subcategories[subcategory] || 0).toFixed(
                          2
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          <div className="border-t border-gray-700 pt-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-gray-300">Total</span>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                ${totalAmount.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
