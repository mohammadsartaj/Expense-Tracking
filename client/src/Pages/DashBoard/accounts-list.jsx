import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, PiggyBankIcon } from "lucide-react";

export function AccountsList() {
  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle>Accounts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Wallet Account */}
          <Link
            to="/details/wallet"
            className="flex justify-between items-center p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
          >
            <div className="flex items-center space-x-3">
              <Wallet className="text-green-400" />
              <span>Wallet</span>
            </div>
            <span className="font-bold">₹1,500.00</span>
          </Link>

          {/* Bank Account */}
          <Link
            to="/details/bank-account"
            className="flex justify-between items-center p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
          >
            <div className="flex items-center space-x-3">
              <PiggyBankIcon className="text-blue-400" />
              <span>Bank Account</span>
            </div>
            <span className="font-bold">₹12,127.71</span>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
