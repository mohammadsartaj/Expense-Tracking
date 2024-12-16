import { useState } from "react";
import AddExpenseForm from "../../appComponents/AddExpensesForm";
import RecentExpenses from "../../appComponents/RecentExpenses";
import ExpenseSummary from "../../appComponents/ExpenseSummary";

const categories = [
  { name: "Food", subcategories: ["Groceries", "Restaurants", "Takeout"] },
  { name: "Travel", subcategories: ["Gas", "Public Transport", "Flights"] },
  { name: "Utilities", subcategories: ["Electricity", "Water", "Internet"] },
  {
    name: "Entertainment",
    subcategories: ["Movies", "Concerts", "Subscriptions"],
  },
  { name: "Shopping", subcategories: ["Clothes", "Electronics", "Home Goods"] },
  { name: "Other", subcategories: ["Miscellaneous"] },
];

export default function BudgetingPage() {
  const [expenses, setExpenses] = useState([]);

  const handleAddExpense = (newExpense) => {
    // Assign a random subcategory for demonstration purposes
    const category = categories.find((c) => c.name === newExpense.category);
    const subcategory = category
      ? category.subcategories[
          Math.floor(Math.random() * category.subcategories.length)
        ]
      : "Miscellaneous";
    setExpenses([{ ...newExpense, subcategory }, ...expenses]);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        Expenses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AddExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseSummary expenses={expenses} />
      </div>
      <RecentExpenses expenses={expenses} />
    </div>
  );
}
