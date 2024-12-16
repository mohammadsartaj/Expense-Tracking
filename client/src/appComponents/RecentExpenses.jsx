/* eslint-disable react/prop-types */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RecentExpenses({ expenses }) {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Recent Expenses
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-300">Date</TableHead>
              <TableHead className="text-gray-300">Description</TableHead>
              <TableHead className="text-gray-300">Category</TableHead>
              <TableHead className="text-right text-gray-300">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell className="font-medium text-gray-300">
                  {expense.date}
                </TableCell>
                <TableCell className="text-gray-300">
                  {expense.description}
                </TableCell>
                <TableCell className="text-gray-300">
                  {expense.category}
                </TableCell>
                <TableCell className="text-right text-gray-300">
                  ${expense.amount.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
