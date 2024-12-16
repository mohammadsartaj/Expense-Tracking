import { useState } from "react";
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
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export function AddIncomeForm({ open, onOpenChange }) {
  const [category, setCategory] = useState("");
  const [value, setValue] = useState("");
  const [isRefund, setIsRefund] = useState(false);
  const [account, setAccount] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [from, setFrom] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-800 text-white">
        <DialogHeader>
          <DialogTitle>New Income</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="category">Category</Label>
            <Select onValueChange={setCategory}>
              <SelectTrigger
                id="category"
                className="bg-gray-700 text-white h-min"
              >
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="salary">Salary</SelectItem>
                <SelectItem value="investment">Investment</SelectItem>
                <SelectItem value="gift">Gift</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="value">Value</Label>
            <Input
              id="value"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="bg-gray-700 text-white"
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="isRefund">Is a refund?</Label>
            <Switch
              id="isRefund"
              checked={isRefund}
              onCheckedChange={setIsRefund}
            />
          </div>
          <div>
            <Label htmlFor="account">Account</Label>
            <Select onValueChange={setAccount}>
              <SelectTrigger id="account" className="bg-gray-700 text-white">
                <SelectValue placeholder="Select account" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wallet">Wallet</SelectItem>
                <SelectItem value="bank">Bank Account</SelectItem>
              </SelectContent>
            </Select>
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
              />
            </div>
          </div>
          <div>
            <Label htmlFor="from">From (Optional)</Label>
            <Input
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="bg-gray-700 text-white"
            />
          </div>
          <div>
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="bg-gray-700 text-white"
            />
          </div>
          {/* <div>
            <Label>PHOTO (DROPBOX REQUIRED)</Label>
            <div className="mt-2 flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-600 rounded-lg">
              <span className="text-gray-400">
                Drag and drop or click to upload
              </span>
            </div>
          </div> */}
          <div className="flex justify-between gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              CANCEL
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-green-500 hover:bg-green-600"
            >
              SAVE
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-green-500 hover:bg-green-600"
            >
              SAVE +
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
