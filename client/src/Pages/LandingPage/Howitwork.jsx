import { UserPlus, PlusCircle, FileSpreadsheet, Bell } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <UserPlus className="w-16 h-16 text-purple-500" />,
      title: "Sign up and log in securely",
    },
    {
      icon: <PlusCircle className="w-16 h-16 text-pink-500" />,
      title: "Add expenses and select a split method",
    },
    {
      icon: <FileSpreadsheet className="w-16 h-16 text-purple-500" />,
      title: "Generate and download balance sheets",
    },
    {
      icon: <Bell className="w-16 h-20 text-pink-500" />,
      title: "Get notified about pending balances",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center mb-8 md:mb-0 bg-black bg-opacity-30 p-6 rounded-lg backdrop-blur-md hover:scale-105"
            >
              {step.icon}
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              {index < steps.length - 1 && (
                <div className="hidden md:block w-24 h-1 bg-white mt-6 transform rotate-180"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
