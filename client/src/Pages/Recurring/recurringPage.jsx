import RecurringPaymentForm from "./RecurringPaymentForm";
import PaymentList from "./PaymentList";

export default function RecurringPaymentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
        Recurring Payments Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RecurringPaymentForm />
        <PaymentList />
      </div>
    </div>
  );
}
