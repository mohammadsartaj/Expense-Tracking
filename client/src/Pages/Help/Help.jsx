import React from "react";
import { HelpCircle } from "lucide-react";

const HelpCenterPage = () => {
  const faqData = [
    {
      question: "What is Hisaab Kitab?",
      answer:
        "Hisaab Kitab is an advanced expense tracking application designed to simplify financial management with features like group expense tracking, downloadable reports, and multi-currency support.",
    },
    {
      question: "How do I add an expense?",
      answer:
        "You can add an expense by navigating to your group or personal dashboard, clicking the 'Add Expense' button, and filling in the required details.",
    },
    {
      question: "Is my data secure on Hisaab Kitab?",
      answer:
        "Yes, your data is secured with advanced encryption and privacy measures. Only you and authorized users can access your data.",
    },
    {
      question: "Can I download reports?",
      answer:
        "Absolutely! You can download detailed balance sheets and expense reports in various formats from the reports section.",
    },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-300 rounded-3xl text-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex">
          <h1 className="text-4xl font-bold mb-8 text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            <HelpCircle className="w-10 h-10 mr-3 text-blue-400" />
            Help Center
          </h1>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">
            Have questions or need assistance? Reach out to us:
          </p>
          <ul className="space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:support@hisaabkitab.com"
                className="text-blue-400 hover:underline"
              >
                support@hisaabkitab.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+18001234567"
                className="text-blue-400 hover:underline"
              >
                +1-800-123-4567
              </a>
            </li>
            <li>Address: 123 Finance Street, Tech City, 56789</li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-600 pb-4">
                <h3 className="text-xl font-medium mb-2">{item.question}</h3>
                <p className="text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">About Hisaab Kitab</h2>
          <p className="text-gray-300">
            Hisaab Kitab is your trusted financial companion, designed to
            simplify the complexities of expense management. Whether you’re
            managing group expenses, tracking personal budgets, or analyzing
            your spending habits, our platform provides intuitive tools and
            detailed insights. Join thousands of users worldwide and experience
            the future of financial tracking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;
