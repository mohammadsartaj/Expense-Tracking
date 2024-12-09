// import { BarChart3, PieChart, TrendingUp, Shield } from "lucide-react";

// const features = [
//   {
//     icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
//     title: "Detailed Analytics",
//     description:
//       "Get in-depth insights into your spending habits with interactive charts and graphs.",
//   },
//   {
//     icon: <PieChart className="w-12 h-12 text-pink-500" />,
//     title: "Budget Planning",
//     description:
//       "Set and manage budgets for different categories to keep your finances on track.",
//   },
//   {
//     icon: <TrendingUp className="w-12 h-12 text-purple-500" />,
//     title: "Financial Forecasting",
//     description:
//       "Predict future expenses and savings based on your historical data.",
//   },
//   {
//     icon: <Shield className="w-12 h-12 text-pink-500" />,
//     title: "Secure & Private",
//     description:
//       "Your financial data is encrypted and protected with state-of-the-art security measures.",
//   },
// ];

// export default function FeaturesSection() {
//   return (
//     <section className="py-16 px-4 bg-black">
//       <div className="container mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
//           Powerful Features
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-gray-900 p-6 rounded-lg border border-purple-500 transform transition-all hover:scale-105 hover:border-pink-500"
//             >
//               <div className="mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//               <p className="text-gray-400">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  SplitSquareVertical,
  Users,
  FileSpreadsheet,
  Bell,
  Lock,
  Database,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <SplitSquareVertical className="w-12 h-12 text-purple-500" />,
      title: "Multiple splitting options",
      description: "Exact, Percentage, Equal, Dynamic",
    },
    {
      icon: <Users className="w-12 h-12 text-pink-500" />,
      title: "Group expense tracking",
      description: "Easily manage expenses for multiple groups",
    },
    {
      icon: <FileSpreadsheet className="w-12 h-12 text-purple-500" />,
      title: "Downloadable balance sheets",
      description: "Get detailed reports of your expenses",
    },
    {
      icon: <Bell className="w-12 h-12 text-pink-500" />,
      title: "Notifications and reminders",
      description: "Stay updated on pending balances",
    },
    {
      icon: <Lock className="w-12 h-12 text-purple-500" />,
      title: "Secure user authentication",
      description: "Your data is safe with us",
    },
    {
      icon: <Database className="w-12 h-12 text-pink-500" />,
      title: "Large dataset support",
      description: "Handle extensive expense records with ease",
    },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-md border border-purple-500 hover:border-pink-500 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="ml-4 text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
