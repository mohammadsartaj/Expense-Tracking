import { Check, X } from "lucide-react";

export default function ComparisonSection() {
  const features = [
    "Easy expense tracking",
    "Multiple splitting options",
    "Group expense management",
    "Downloadable reports",
    "Secure data handling",
    "Large dataset support",
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose ExpenseShare?
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-black bg-opacity-50 shadow-md rounded-lg backdrop-blur-md">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-4 px-6 text-left">Features</th>
                <th className="py-4 px-6 text-center">ExpenseShare</th>
                <th className="py-4 px-6 text-center">Traditional Methods</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="py-4 px-6">{feature}</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="w-6 h-6 text-green-500 mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <X className="w-6 h-6 text-red-500 mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
