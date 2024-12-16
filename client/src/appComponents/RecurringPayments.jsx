import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RepeatIcon } from "lucide-react";

const recurringPayments = [
  {
    id: 1,
    description: "Netflix Subscription",
    amount: 13.99,
    frequency: "Monthly",
  },
  { id: 2, description: "Gym Membership", amount: 50.0, frequency: "Monthly" },
  { id: 3, description: "Cloud Storage", amount: 9.99, frequency: "Monthly" },
  { id: 4, description: "Domain Name", amount: 14.99, frequency: "Yearly" },
];

export default function RecurringPayments() {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text flex items-center">
          <RepeatIcon className="mr-2" />
          Recurring Payments
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-300">Description</TableHead>
              <TableHead className="text-gray-300">Amount</TableHead>
              <TableHead className="text-gray-300">Frequency</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recurringPayments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-medium text-gray-300">
                  {payment.description}
                </TableCell>
                <TableCell className="text-gray-300">
                  ${payment.amount.toFixed(2)}
                </TableCell>
                <TableCell className="text-gray-300">
                  {payment.frequency}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
