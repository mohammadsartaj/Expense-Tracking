import React, { useState } from "react";
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

export function AddExpenseForm() {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [splitOption, setSplitOption] = useState("equal");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Adding expense:", {
      expenseName,
      amount,
      category,
      assignedTo,
      splitOption,
    });
    // Reset form
    setExpenseName("");
    setAmount("");
    setCategory("");
    setAssignedTo("");
    setSplitOption("equal");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="expenseName">Expense Name</Label>
        <Input
          id="expenseName"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          placeholder="Enter expense name"
        />
      </div>
      <div>
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger id="category">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="food">Food</SelectItem>
            <SelectItem value="travel">Travel</SelectItem>
            <SelectItem value="entertainment">Entertainment</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="assignedTo">Assign to</Label>
        <Select value={assignedTo} onValueChange={setAssignedTo}>
          <SelectTrigger id="assignedTo">
            <SelectValue placeholder="Select member" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="member1">Member 1</SelectItem>
            <SelectItem value="member2">Member 2</SelectItem>
            <SelectItem value="member3">Member 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="splitOption">Split Option</Label>
        <Select value={splitOption} onValueChange={setSplitOption}>
          <SelectTrigger id="splitOption">
            <SelectValue placeholder="Select split option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="equal">Equal</SelectItem>
            <SelectItem value="percentage">Percentage</SelectItem>
            <SelectItem value="exact">Exact Amount</SelectItem>
            <SelectItem value="custom">Custom</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="bg-green-500 p-5 rounded-2xl">
        Add Expense
      </Button>
    </form>
  );
}
