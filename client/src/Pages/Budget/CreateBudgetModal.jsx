/* eslint-disable react/prop-types */
// CreateBudgetModal.js
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const CreateBudgetModal = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [account, setAccount] = useState("");
  const [duration, setDuration] = useState("1 Month");

  const handleSubmit = () => {
    const newBudget = {
      name,
      amount: parseFloat(amount),
      category,
      account,
      duration,
    };
    onSubmit(newBudget);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogTitle>Create New Budget</AlertDialogTitle>
      <AlertDialogDescription>
        <div className="space-y-4">
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Select
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {/* Populate category options */}
          </Select>
          <Select
            label="Account"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          >
            {/* Populate account options */}
          </Select>
          <Select
            label="Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <option>1 Month</option>
            <option>3 Months</option>
            <option>6 Months</option>
            <option>1 Year</option>
          </Select>
        </div>
      </AlertDialogDescription>
      <AlertDialogAction>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Save</Button>
      </AlertDialogAction>
    </AlertDialog>
  );
};

export default CreateBudgetModal;
