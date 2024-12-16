/* eslint-disable react/prop-types */
// ExpenseEntry.js
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const ExpenseEntry = ({ groupMembers, onSubmit }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState("");
  const [splitMethod, setSplitMethod] = useState("Equal");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !paidBy) return;

    const expense = {
      description,
      amount: parseFloat(amount),
      paidBy,
      splitMethod,
    };

    onSubmit(expense);
    setDescription("");
    setAmount("");
    setPaidBy("");
    setSplitMethod("Equal");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          className="input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          className="input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="paidBy">Paid By</label>
        <select
          id="paidBy"
          className="select"
          value={paidBy}
          onChange={(e) => setPaidBy(e.target.value)}
        >
          <option value="" disabled>
            Select Member
          </option>
          {groupMembers.map((member) => (
            <option key={member} value={member}>
              {member}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="splitMethod">Split Method</label>
        <select
          id="splitMethod"
          className="select"
          value={splitMethod}
          onChange={(e) => setSplitMethod(e.target.value)}
        >
          <option value="Equal">Equal</option>
          <option value="Custom">Custom</option>
        </select>
      </div>

      <Button type="submit">Add Expense</Button>
    </form>
  );
};

export default ExpenseEntry;
