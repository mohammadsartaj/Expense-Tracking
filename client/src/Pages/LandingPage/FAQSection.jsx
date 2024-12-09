import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "How secure is my financial data?",
      answer:
        "We use industry-standard encryption and security protocols to ensure your data is always protected.",
    },
    {
      question: "Can I use ExpenseShare for business expenses?",
      answer:
        "Our Pro and Enterprise plans are perfect for managing business expenses and generating reports for accounting purposes.",
    },
    {
      question: "How does the splitting feature work?",
      answer:
        "ExpenseShare offers multiple splitting options including equal split, percentage split, and custom amounts. You can choose the best method for each expense.",
    },
    {
      question: "Is there a limit to how many expenses I can track?",
      answer:
        "No, there's no limit to the number of expenses you can track, even on our free plan.",
    },
  ];

  return (
    <section className="py-20 bg-slate-820">
      <div className="container mb-10 mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl mx-auto mb-10 py-10"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
