import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Marketing", value: 1200 },
  { name: "Services", value: 900 },
  { name: "Salaries", value: 1500 },
  { name: "Rent", value: 800 },
  { name: "Inventory", value: 500 },
  { name: "Insurance", value: 300 },
];

const COLORS = [
  "#8B5CF6",
  "#EC4899",
  "#10B981",
  "#F59E0B",
  "#3B82F6",
  "#EF4444",
];

export default function ExpenseOverview() {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        Expense Overview
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: "#1F2937", border: "none" }}
              itemStyle={{ color: "#E5E7EB" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-3 h-3 rounded-full mr-2`}
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></div>
            <span className="text-sm text-gray-300">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
