import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "1 Jun", balance: 10000 },
  { date: "8 Jun", balance: 11200 },
  { date: "15 Jun", balance: 10800 },
  { date: "22 Jun", balance: 12500 },
  { date: "29 Jun", balance: 13627 },
];

export function BalanceGraph() {
  return (
    <Card className="bg-gray-800">
      <CardHeader>
        <CardTitle>Balance Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="balance" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
