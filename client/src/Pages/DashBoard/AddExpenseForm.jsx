/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function AddExpenseForm({ open, onOpenChange }) {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [to, setTo] = useState("");
  const [accountType] = useState("expense"); // Static as this is an expense form
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [totalBalance, setTotalBalance] = useState(""); // Mock or retrieve from user state if needed
  const [username, setUsername] = useState(""); // New state for username

  useEffect(() => {
    // Set the current date and time using date-fns
    const now = new Date();
    setDate(format(now, "yyyy-MM-dd")); // Sets current date in yyyy-MM-dd format
    setTime(format(now, "HH:mm")); // Sets current time in HH:mm format

    // Retrieve the username from localStorage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername); // Set the username from localStorage
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const transactionData = {
      username, // Using username from state
      category,
      amount: parseFloat(amount),
      accountType,
      to,
      date,
      time,
      notes,
      totalBalance: parseFloat(totalBalance), // Mocked here; calculate dynamically based on the backend
    };

    try {
      const response = await fetch("/api/transactions/addTransaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transactionData),
      });

      const result = await response.json();
      if (result.success) {
        console.log("Expense added successfully");
        onOpenChange(false); // Close the dialog on success
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error("Error adding expense:", error);
    }
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-800 text-white h-min">
        <DialogHeader>
          <DialogTitle>New Expense</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="category">Category</Label>
            <Select onValueChange={setCategory}>
              <SelectTrigger id="category" className="bg-gray-700 text-white">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="transport">Transport</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="utils">Utils</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-gray-700 text-white"
              required
            />
          </div>
          <div>
            <Label htmlFor="to">To</Label>
            <Input
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="bg-gray-700 text-white"
              placeholder="e.g., Grocery Store"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-gray-700 text-white"
                required
              />
            </div>
            <div>
              <Label htmlFor="time">Time</Label>
              <Input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="bg-gray-700 text-white"
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="bg-gray-700 text-white"
              placeholder="Add any additional details..."
            />
          </div>
          <div className="flex justify-between gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-red-500 hover:bg-red-600"
            >
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
