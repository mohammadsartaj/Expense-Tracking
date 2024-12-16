/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SettingsDialog({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-800 text-white">
        <DialogHeader>
          <DialogTitle>Dashboard Settings</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="summary-card">Summary Card</Label>
            <Switch id="summary-card" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="monthly-comparison">Monthly Comparison</Label>
            <Switch id="monthly-comparison" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="accounts-list">Accounts List</Label>
            <Switch id="accounts-list" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="balance-graph">Balance Graph</Label>
            <Switch id="balance-graph" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="last-week-transactions">
              Last Week Transactions
            </Label>
            <Switch id="last-week-transactions" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="budget-section">Budget Section</Label>
            <Switch id="budget-section" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="recent-transactions">Recent Transactions</Label>
            <Switch id="recent-transactions" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="cash-flow-summary">Cash Flow Summary</Label>
            <Switch id="cash-flow-summary" />
          </div>
        </div>
        <Button className="w-full mt-4 bg-purple-500 hover:bg-purple-600">
          Save Settings
        </Button>
      </DialogContent>
    </Dialog>
  );
}
