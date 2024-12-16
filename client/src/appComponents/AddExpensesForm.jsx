import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const categories = [
  "Food",
  "Travel",
  "Utilities",
  "Entertainment",
  "Shopping",
  "Other",
];
const splitTypes = ["Equal", "Exact", "Percentage", "Dynamic Split"];

// eslint-disable-next-line react/prop-types
export default function AddExpenseForm({ onAddExpense }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [isSplit, setIsSplit] = useState(false);
  const [numberOfPersons, setNumberOfPersons] = useState("");
  const [splitType, setSplitType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: Date.now(),
      amount: parseFloat(amount),
      category,
      description,
      date: new Date().toISOString().split("T")[0],
      split: isSplit
        ? {
            numberOfPersons: parseInt(numberOfPersons),
            splitType,
          }
        : null,
    };
    onAddExpense(expense);
    setAmount("");
    setCategory("");
    setDescription("");
    setIsSplit(false);
    setNumberOfPersons("");
    setSplitType("");
  };

  const detectCategory = () => {
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    setCategory(randomCategory);
  };

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Add New Expense
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="amount" className="text-gray-300">
              Amount
            </Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="bg-gray-700 border-gray-600 text-white"
              required
            />
          </div>
          <div>
            <Label htmlFor="category" className="text-gray-300">
              Category
            </Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border-gray-600">
                {categories.map((cat) => (
                  <SelectItem
                    key={cat}
                    value={cat}
                    className="text-white hover:bg-gray-600"
                  >
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="description" className="text-gray-300">
              Description
            </Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <div className="flex items-center space-x-2">
            {/* <Switch
              id="split"
              checked={isSplit}
              onCheckedChange={setIsSplit}
              className=""
            /> */}
            <Switch
              id="split"
              checked={isSplit}
              onCheckedChange={setIsSplit}
              className={`${
                isSplit ? "bg-blue-500" : "bg-gray-300"
              } relative inline-flex items-center h-6 rounded-full w-11`}
            >
              <span
                className={`${
                  isSplit ? "translate-x-6" : "translate-x-1"
                } inline-block w-4 h-4 transform bg-white rounded-full transition`}
              />
            </Switch>
            <Label htmlFor="split" className="text-gray-300">
              Split expense
            </Label>
          </div>
          {isSplit && (
            <>
              <div>
                <Label htmlFor="numberOfPersons" className="text-gray-300">
                  Number of Persons
                </Label>
                <Input
                  id="numberOfPersons"
                  type="number"
                  value={numberOfPersons}
                  onChange={(e) => setNumberOfPersons(e.target.value)}
                  placeholder="Enter number of persons"
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div>
                <Label htmlFor="splitType" className="text-gray-300">
                  Split Type
                </Label>
                <Select value={splitType} onValueChange={setSplitType}>
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="Select split type" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    {splitTypes.map((type) => (
                      <SelectItem
                        key={type}
                        value={type}
                        className="text-white hover:bg-gray-600"
                      >
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
          <div className="flex space-x-2">
            <Button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Add Expense
            </Button>
            <Button
              type="button"
              onClick={detectCategory}
              className="bg-pink-600 hover:bg-pink-700 text-white"
            >
              Detect Category
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
