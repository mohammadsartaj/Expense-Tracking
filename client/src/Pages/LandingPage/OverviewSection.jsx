import { CheckCircle, Shield, Zap } from "lucide-react";

export default function OverviewSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Our Expense Tracker?
        </h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          ExpenseShare simplifies group expense tracking and bill splitting,
          making it easy to manage shared costs and settle debts with friends,
          roommates, or colleagues.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <CheckCircle className="w-16 h-16" />,
              title: "Easy expense tracking",
            },
            {
              icon: <Zap className="w-16 h-16" />,
              title: "Advanced split methods",
            },
            {
              icon: <Shield className="w-16 h-16" />,
              title: "Secure data handling",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-black bg-opacity-30 p-6 rounded-lg backdrop-blur-md"
            >
              {item.icon}
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
