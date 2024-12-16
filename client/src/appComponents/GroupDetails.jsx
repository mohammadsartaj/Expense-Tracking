import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Plus } from "lucide-react";

// eslint-disable-next-line react/prop-types
export default function GroupDetails({ onCreateGroup }) {
  // Mock data for the current group
  const currentGroup = {
    name: "Project X Team",
    members: ["Alice", "Bob", "Charlie", "David"],
    totalExpenses: 1234.56,
    categories: [
      { name: "Food", amount: 450.0 },
      { name: "Transportation", amount: 300.0 },
      { name: "Entertainment", amount: 484.56 },
    ],
  };

  return (
    <Card className="bg-gray-800 border-gray-700 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 p-6">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-2xl font-bold text-white">
              {currentGroup.name}
            </CardTitle>
            <CardDescription className="text-gray-200">
              {currentGroup.members.length} members
            </CardDescription>
          </div>
          <Button
            onClick={onCreateGroup}
            variant="secondary"
            className="bg-white text-purple-600 hover:bg-gray-100"
          >
            <Plus className="mr-2 h-4 w-4" /> Create New Group
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-2">
              Members
            </h3>
            <div className="flex flex-wrap gap-2">
              {currentGroup.members.map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {member}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-2">
              Expenses by Category
            </h3>
            <ul className="space-y-2">
              {currentGroup.categories.map((category, index) => (
                <li key={index} className="flex justify-between text-sm">
                  <span className="text-gray-400">{category.name}</span>
                  <span className="text-gray-300">
                    ${category.amount.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-300 mb-2">
            Total Expenses
          </h3>
          <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            ${currentGroup.totalExpenses.toFixed(2)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
