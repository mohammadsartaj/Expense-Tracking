import Header from "../../appComponents/Header";
import Sidebar from "../../appComponents/Sidebar";
import TransactionPage from "./TransactionPage";

export default function BudgetingRout() {
  return (
    <div className="flex w-screen h-screen bg-gray-900 text-white overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-hidden">
          <TransactionPage
            currentDate={new Date()}
            onMonthChange={(direction) =>
              console.log(`Month change: ${direction}`)
            }
            filters={{ category: "", dateFrom: null, dateTo: null }}
          />
        </main>
      </div>
    </div>
  );
}
