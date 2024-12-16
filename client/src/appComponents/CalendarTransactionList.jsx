/* eslint-disable react/prop-types */
import { format } from "date-fns";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

export function TransactionList({ transactions, selectedDate }) {
  const filteredTransactions = transactions.filter(
    (t) =>
      format(new Date(t.date), "yyyy-MM-dd") ===
      format(selectedDate, "yyyy-MM-dd")
  );

  return (
    <div className="bg-black bg-opacity-50 backdrop-blur-lg rounded-xl p-6 shadow-2xl mt-6">
      <h3 className="text-xl font-bold text-white mb-4">
        Transactions for {format(selectedDate, "MMMM d, yyyy")}
      </h3>
      {filteredTransactions.length === 0 ? (
        <p className="text-gray-400">No transactions for this day.</p>
      ) : (
        <ul className="space-y-4">
          {filteredTransactions.map((transaction) => (
            <li
              key={transaction.id}
              className="flex items-center justify-between bg-white bg-opacity-10 p-4 rounded-lg"
            >
              <div className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === "income"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {transaction.type === "income" ? (
                    <ArrowDownIcon className="h-6 w-6 text-white" />
                  ) : (
                    <ArrowUpIcon className="h-6 w-6 text-white" />
                  )}
                </div>
                <div className="ml-4">
                  <p className="font-medium text-white">
                    {transaction.category}
                  </p>
                  <p className="text-sm text-gray-400">{transaction.fromTo}</p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`font-bold ${
                    transaction.type === "income"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {transaction.type === "income" ? "+" : "-"}$
                  {transaction.amount.toFixed(2)}
                </p>
                <p className="text-sm text-gray-400">{transaction.time}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
