import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", amount: 120 },
  { day: "Tue", amount: 80 },
  { day: "Wed", amount: 150 },
  { day: "Thu", amount: 100 },
  { day: "Fri", amount: 200 },
  { day: "Sat", amount: 180 },
  { day: "Sun", amount: 90 },
];

export function LastWeekTransactions() {
  return (
    <Card className="bg-gray-800">
      <CardHeader>
        <CardTitle>Last 7 Days Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
