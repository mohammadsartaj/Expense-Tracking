// import { TrendingUp, TrendingDown, DollarSign, CreditCard } from "lucide-react";

// const metrics = [
//   {
//     title: "Revenue",
//     value: "$109,943",
//     change: "+32.40%",
//     icon: TrendingUp,
//     color: "text-green-500",
//   },
//   {
//     title: "Expenses",
//     value: "$19,981",
//     change: "-12.40%",
//     icon: TrendingDown,
//     color: "text-red-500",
//   },
//   {
//     title: "Credit",
//     value: "$87,234",
//     change: "+24.30%",
//     icon: CreditCard,
//     color: "text-green-500",
//   },
//   {
//     title: "Debt",
//     value: "$17,981",
//     change: "-5.40%",
//     icon: DollarSign,
//     color: "text-yellow-500",
//   },
// ];

// export default function TopMetricsCards() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//       {metrics.map((metric, index) => (
//         <div
//           key={index}
//           className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-purple-500 transition-colors"
//         >
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-lg font-semibold text-gray-300">
//               {metric.title}
//             </h3>
//             <metric.icon className={`${metric.color}`} size={24} />
//           </div>
//           <p className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
//             {metric.value}
//           </p>
//           <p className={`text-sm ${metric.color}`}>{metric.change}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

import {
  TrendingUp,
  TrendingDown,
  ArrowUpCircle,
  ArrowDownCircle,
} from "lucide-react";

const metrics = [
  {
    title: "Revenue",
    value: "$109,943",
    change: "+32.40%",
    icon: TrendingUp,
    color: "text-green-500",
  },
  {
    title: "Expenses",
    value: "$19,981",
    change: "-12.40%",
    icon: TrendingDown,
    color: "text-red-500",
  },
  {
    title: "Due Amount",
    value: "$2,500",
    change: "+5.20%",
    icon: ArrowUpCircle,
    color: "text-yellow-500",
  },
  {
    title: "Own Amount",
    value: "$1,200",
    change: "-3.10%",
    icon: ArrowDownCircle,
    color: "text-blue-500",
  },
];

export default function TopMetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-purple-500 transition-colors"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-300">
              {metric.title}
            </h3>
            <metric.icon className={`${metric.color}`} size={24} />
          </div>
          <p className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            {metric.value}
          </p>
          <p className={`text-sm ${metric.color}`}>{metric.change}</p>
        </div>
      ))}
    </div>
  );
}
