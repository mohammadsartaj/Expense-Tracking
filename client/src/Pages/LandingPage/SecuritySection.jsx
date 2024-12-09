import { Shield, Lock, Cloud } from "lucide-react";

export default function SecuritySection() {
  const securityFeatures = [
    {
      icon: <Shield className="w-16 h-16 text-purple-500" />,
      title: "Data encryption",
      description: "Your data is encrypted end-to-end",
    },
    {
      icon: <Lock className="w-16 h-16 text-pink-500" />,
      title: "Authorization protocols",
      description: "Secure access control measures",
    },
    {
      icon: <Cloud className="w-16 h-16 text-purple-500" />,
      title: "Cloud-based storage",
      description: "Reliable and scalable data storage",
    },
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Security and Technology
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-md text-center border border-purple-500 hover:border-pink-500 transition-colors duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
