import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const pendingDues = [
  { id: 1, description: "Electricity Bill", amount: 50, dueDate: "2023-06-20" },
  { id: 2, description: "Internet Bill", amount: 60, dueDate: "2023-06-25" },
  {
    id: 3,
    description: "Credit Card Payment",
    amount: 200,
    dueDate: "2023-06-30",
  },
];

export default function PendingDues() {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text flex items-center">
          <AlertCircle className="mr-2 text-yellow-500" />
          Pending Dues
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {pendingDues.map((due) => (
            <li key={due.id} className="flex justify-between items-center">
              <div>
                <p className="text-gray-300 font-medium">{due.description}</p>
                <p className="text-sm text-gray-400">Due: {due.dueDate}</p>
              </div>
              <span className="text-yellow-500 font-bold">${due.amount}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
