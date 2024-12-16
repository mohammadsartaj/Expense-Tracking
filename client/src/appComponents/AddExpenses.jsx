/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Button } from "@shadcn/ui/button";
import { Input } from "@shadcn/ui/input";
import { Label } from "@shadcn/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@shadcn/ui/select";

const categories = {
  Food: ["Groceries", "Restaurant", "Takeout"],
  Travel: ["Transportation", "Accommodation", "Activities"],
  Utilities: ["Electricity", "Water", "Internet"],
  Entertainment: ["Movies", "Concerts", "Games"],
  Shopping: ["Clothes", "Electronics", "Home Goods"],
  Other: ["Miscellaneous"],
};

const AddExpense = ({ onAddExpense, onCancel, members }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [splitType, setSplitType] = useState("equal");
  const [splitAmounts, setSplitAmounts] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const expense = {
      id: Date.now(),
      amount: parseFloat(amount),
      description,
      category,
      subCategory,
      paidBy,
      splitType,
      splitAmounts:
        splitType === "equal"
          ? members.reduce(
              (acc, member) => ({
                ...acc,
                [member.id]: parseFloat(amount) / members.length,
              }),
              {}
            )
          : splitAmounts,
      date: new Date().toISOString(),
    };
    onAddExpense(expense);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-700 space-y-4">
      <div>
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(categories).map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {category && (
        <div>
          <Label htmlFor="subCategory">Subcategory</Label>
          <Select value={subCategory} onValueChange={setSubCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select subcategory" />
            </SelectTrigger>
            <SelectContent>
              {categories[category].map((subCat) => (
                <SelectItem key={subCat} value={subCat}>
                  {subCat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
      <div>
        <Label htmlFor="paidBy">Paid By</Label>
        <Input
          id="paidBy"
          value={paidBy}
          onChange={(e) => setPaidBy(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="splitType">Split Type</Label>
        <Select value={splitType} onValueChange={setSplitType}>
          <SelectTrigger>
            <SelectValue placeholder="Select split type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="equal">Equal</SelectItem>
            <SelectItem value="custom">Custom</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {splitType === "custom" && (
        <div>
          {members.map((member) => (
            <div key={member.id}>
              <Label>{member.name}</Label>
              <Input
                type="number"
                value={splitAmounts[member.id] || ""}
                onChange={(e) =>
                  setSplitAmounts({
                    ...splitAmounts,
                    [member.id]: parseFloat(e.target.value) || 0,
                  })
                }
              />
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Add Expense</Button>
      </div>
    </form>
  );
};

export default AddExpense;
