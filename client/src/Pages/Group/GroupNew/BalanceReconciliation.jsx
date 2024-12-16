// BalanceReconciliation.js
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Download, ArrowLeftRight } from "lucide-react";

const BalanceReconciliation = ({ balances = [], onReconcile, onDownload }) => {
  const sortedBalances = Array.isArray(balances)
    ? [...balances].sort((a, b) => a.netBalance - b.netBalance)
    : [];

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Balance Reconciliation</CardTitle>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDownload("PDF")}
            >
              <Download className="mr-2 h-4 w-4" /> PDF
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDownload("CSV")}
            >
              <Download className="mr-2 h-4 w-4" /> CSV
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {sortedBalances.length > 0 ? (
          <div className="space-y-4">
            {sortedBalances.map((balance) => (
              <div
                key={balance.userId}
                className={`flex justify-between p-3 rounded ${
                  balance.netBalance > 0
                    ? "bg-green-50"
                    : balance.netBalance < 0
                    ? "bg-red-50"
                    : "bg-gray-50"
                }`}
              >
                <span>User {balance.userId}</span>
                <div className="flex items-center space-x-2">
                  <span>
                    {balance.netBalance > 0 ? "Owed" : "Owes"}: $
                    {Math.abs(balance.netBalance).toFixed(2)}
                  </span>
                  {balance.netBalance !== 0 && (
                    <ArrowLeftRight className="h-4 w-4 text-gray-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-4">
            No balance information available
          </div>
        )}
        <div className="mt-4 flex justify-center">
          <Button onClick={onReconcile}>
            <RefreshCcw className="mr-2 h-4 w-4" /> Reconcile Balances
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BalanceReconciliation;
