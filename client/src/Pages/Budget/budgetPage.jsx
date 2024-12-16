// // BudgetingPage.js
// import React, { useState } from "react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import CreateBudgetModal from "./CreateBudgetModal";

// const BudgetingPage = () => {
//   const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

//   const handleCreateBudget = (newBudget) => {
//     // Handle the creation of a new budget
//     console.log("New budget:", newBudget);
//     setIsCreateModalOpen(false);
//   };

//   return (
//     <div className="p-6">
//       <div className="flex justify-end mb-4">
//         <Button onClick={() => setIsCreateModalOpen(true)}>
//           Create New Budget
//         </Button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <Card>
//           <CardHeader>
//             <CardTitle>Weekly Budgets</CardTitle>
//           </CardHeader>
//           <CardContent>{/* Render weekly budget information */}</CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Monthly Budgets</CardTitle>
//           </CardHeader>
//           <CardContent>{/* Render monthly budget information */}</CardContent>
//         </Card>
//       </div>

//       <CreateBudgetModal
//         isOpen={isCreateModalOpen}
//         onClose={() => setIsCreateModalOpen(false)}
//         onSubmit={handleCreateBudget}
//       />
//     </div>
//   );
// };

// export default BudgetingPage;

// BudgetingPage.jsx

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const BudgetingPage = () => {
  const [budgets, setBudgets] = useState([
    {
      type: "Weekly",
      category: "Entertainment",
      amountSpent: 8,
      budgetAmount: 30,
      duration: "09/12/2024 - 15/12/2024",
    },
    {
      type: "Monthly",
      category: "Eating out",
      amountSpent: 37.5,
      budgetAmount: 100,
      duration: "01/12/2024 - 31/12/2024",
    },
  ]);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [newBudget, setNewBudget] = useState({
    type: "Weekly",
    category: "",
    amount: "",
    duration: "1 Month",
  });

  const handleAddBudget = () => {
    setBudgets([...budgets, { ...newBudget, amountSpent: 0 }]);
    setIsPopoverOpen(false);
    setNewBudget({ type: "", category: "", amount: "", duration: "1 Month" });
  };

  return (
    <div className="p-6 bg-gray-800 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Budgets</h1>
      <div className="space-y-4">
        {budgets.map((budget, index) => (
          <div
            key={index}
            className="bg-gary p-4 rounded-lg shadow border border-gray-200"
          >
            <h2 className="font-semibold text-lg">{budget.category}</h2>
            <p>{budget.type} Budget</p>
            <div className="flex items-center justify-between mt-2">
              <span>
                ₹{budget.amountSpent} / ₹{budget.budgetAmount}
              </span>
              <div className="relative w-full bg-gray-200 rounded-full h-2 overflow-hidden mx-4">
                <div
                  className="bg-blue-500 h-full"
                  style={{
                    width: `${
                      (budget.amountSpent / budget.budgetAmount) * 100
                    }%`,
                  }}
                />
              </div>
              <span>
                {Math.round((budget.amountSpent / budget.budgetAmount) * 100)}%
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Button */}
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <PopoverTrigger>
          <Button className="fixed bottom-4 right-4 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600">
            +
          </Button>
        </PopoverTrigger>
        <PopoverContent className=" flex flex-col flex-1 justify-center w-96 bg-gray-700 ml-50 ">
          <h3 className="text-lg font-semibold mb-4">Create New Budget</h3>
          <div className="space-y-4">
            <Input
              placeholder="Budget Amount"
              value={newBudget.amount}
              onChange={(e) =>
                setNewBudget({ ...newBudget, amount: e.target.value })
              }
            />
            <Select
              value={newBudget.category}
              onValueChange={(val) =>
                setNewBudget({ ...newBudget, category: val })
              }
            >
              <SelectTrigger>Category</SelectTrigger>
              <SelectContent className="bg-slate-400">
                <SelectItem value="Entertainment">Entertainment</SelectItem>
                <SelectItem value="Eating out">Eating out</SelectItem>
                <SelectItem value="Fuel">Fuel</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={newBudget.duration}
              onValueChange={(val) =>
                setNewBudget({ ...newBudget, duration: val })
              }
            >
              <SelectTrigger>Duration</SelectTrigger>
              <SelectContent className="bg-slate-500">
                <SelectItem value="1 Week">1 Week</SelectItem>
                <SelectItem value="1 Month">1 Month</SelectItem>
                <SelectItem value="3 Months">3 Months</SelectItem>
              </SelectContent>
            </Select>
            <Button
              className="w-full bg-green-500 hover:bg-green-600"
              onClick={handleAddBudget}
            >
              Save Budget
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default BudgetingPage;
