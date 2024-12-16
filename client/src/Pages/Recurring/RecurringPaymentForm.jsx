"use client";

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

export default function RecurringPaymentForm() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    day: "",
    amount: "",
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // TODO: Implement form submission logic
  //   console.log("Form submitted:", formData);
  //   // Reset form
  //   setFormData({ name: "", category: "", day: "", amount: "" });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", category: "", day: "", amount: "" });
  };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSelectChange = (field: string, value: string) => {
  //   setFormData({ ...formData, [field]: value });
  // };
  const handleSelectChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700"
    >
      <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
        Add New Recurring Payment
      </h2>

      <div>
        <Label htmlFor="name">Payment Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 bg-gray-700 border-gray-600 text-white"
          placeholder="e.g., Rent, Subscription"
        />
      </div>

      <div>
        <Label htmlFor="category">Category</Label>
        <Select
          onValueChange={(value) => handleSelectChange("category", value)}
        >
          <SelectTrigger className="mt-1 bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="food">Food</SelectItem>
            <SelectItem value="shopping">Shopping</SelectItem>
            <SelectItem value="utilities">Utilities</SelectItem>
            <SelectItem value="travel">Travel</SelectItem>
            <SelectItem value="entertainment">Entertainment</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="day">Payment Day</Label>
        <Select onValueChange={(value) => handleSelectChange("day", value)}>
          <SelectTrigger className="mt-1 bg-gray-700 border-gray-600 text-white">
            <SelectValue placeholder="Select payment day" />
          </SelectTrigger>
          <SelectContent>
            {[...Array(31)].map((_, i) => (
              <SelectItem key={i + 1} value={(i + 1).toString()}>
                {i + 1}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
          className="mt-1 bg-gray-700 border-gray-600 text-white"
          placeholder="Enter amount"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Recurring Payment
      </Button>
    </form>
  );
}
