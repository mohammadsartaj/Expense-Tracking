// "use client";

// import { useState } from "react";
// import { Menu, X, HelpCircle, LogOut, Plus, Minus, Edit2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// // import { Header } from "./components/header";
// import FilterSidebar from "../../appComponents/FilterSideBar";
// import Header from "./header";
// import TransactionList from "./TransactionList";

// // import { CashFlowSummary } from './components/cash-flow-summary'
// import { AddIncomeForm } from "../../appComponents/trasaction/AddIncome";
// import { AddExpenseForm } from "../../appComponents/trasaction/AddExpenses";
// // import { SettingsDialog } from './components/settings-dialog'

// export default function ExpenseDashboard() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [addIncomeOpen, setAddIncomeOpen] = useState(false);
//   const [addExpenseOpen, setAddExpenseOpen] = useState(false);
//   const [settingsOpen, setSettingsOpen] = useState(false);
//   const [currentDate, setCurrentDate] = useState(new Date());

//   const [filters, setFilters] = useState({
//     category: "",
//     dateFrom: null,
//     dateTo: null,
//     notes: "",
//     checked: null,
//     type: [],
//   });
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const handleMonthChange = (direction) => {
//     setCurrentDate((prev) => {
//       const newDate = new Date(prev);
//       if (direction === "prev") {
//         newDate.setMonth(newDate.getMonth() - 1);
//       } else {
//         newDate.setMonth(newDate.getMonth() + 1);
//       }
//       return newDate;
//     });
//   };
//   const handleFilterChange = (newFilters) => {
//     setFilters(newFilters);
//   };

//   return (
//     <TooltipProvider>
//       <div className="min-h-screen bg-gray-900 text-white">
//         {/* <Header
//           sidebarOpen={sidebarOpen}
//           setSidebarOpen={setSidebarOpen}
//         />
//         <main className="p-4 md:p-6 lg:p-8">
//           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//             <SummaryCard />
//             <MonthlyComparison title="This Month" />
//             <MonthlyComparison title="Last Month" />
//             <AccountsList />
//             <BalanceGraph />
//             <LastWeekTransactions />
//             <BudgetSection />
//             <RecentTransactions />
//             <CashFlowSummary />
//           </div>
//         </main> */}
//         <div className="flex h-screen bg-gray-100 text-gray-900">
//           <FilterSidebar
//             filters={filters}
//             onFilterChange={handleFilterChange}
//             isOpen={isSidebarOpen}
//             onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
//             className="h-full"
//           />
//           <div className="flex-1 flex flex-col overflow-hidden">
//             <Header
//               currentDate={currentDate}
//               onMonthChange={handleMonthChange}
//               totalBalance={1078.0}
//             />
//             <TransactionList currentDate={currentDate} filters={filters} />
//             {/* <FloatingActionButtons /> */}
//           </div>
//         </div>
//         <div className="fixed bottom-4 right-4 flex flex-col gap-2">
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Button
//                 size="icon"
//                 className="bg-green-500 hover:bg-green-600"
//                 onClick={() => setAddIncomeOpen(true)}
//               >
//                 <Plus className="h-6 w-6" />
//               </Button>
//             </TooltipTrigger>
//             <TooltipContent>Add Income</TooltipContent>
//           </Tooltip>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Button
//                 size="icon"
//                 className="bg-red-500 hover:bg-red-600"
//                 onClick={() => setAddExpenseOpen(true)}
//               >
//                 <Minus className="h-6 w-6" />
//               </Button>
//             </TooltipTrigger>
//             <TooltipContent>Add Expense</TooltipContent>
//           </Tooltip>
//         </div>
//         {/* <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Button
//                 size="icon"
//                 className="bg-purple-500 hover:bg-purple-600"
//                 onClick={() => setSettingsOpen(true)}
//               >
//                 <Edit2 className="h-6 w-6" />
//               </Button>
//             </TooltipTrigger>
//             <TooltipContent>Settings</TooltipContent>
//           </Tooltip>
//         </div> */}
//         <AddIncomeForm open={addIncomeOpen} onOpenChange={setAddIncomeOpen} />
//         <AddExpenseForm
//           open={addExpenseOpen}
//           onOpenChange={setAddExpenseOpen}
//         />
//         {/* <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} /> */}
//       </div>
//     </TooltipProvider>
//   );
// }

"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// import FilterSidebar from "../../appComponents/FilterSideBar";
import Header from "./header";
import TransactionList from "./TransactionList";
import { AddIncomeForm } from "../../appComponents/trasaction/AddIncome";
import { AddExpenseForm } from "../../appComponents/trasaction/AddExpenses";

export default function ExpenseDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [addIncomeOpen, setAddIncomeOpen] = useState(false);
  const [addExpenseOpen, setAddExpenseOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const [filters, setFilters] = useState({
    category: "",
    dateFrom: null,
    dateTo: null,
    notes: "",
    checked: null,
    type: [],
  });

  const handleMonthChange = (direction) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      if (direction === "prev") {
        newDate.setMonth(newDate.getMonth() - 1);
      } else {
        newDate.setMonth(newDate.getMonth() + 1);
      }
      return newDate;
    });
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="flex h-screen bg-gray-100 text-gray-900">
          {/* Filter Sidebar */}
          {/* <FilterSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            isOpen={sidebarOpen}
            onToggle={() => setSidebarOpen(!sidebarOpen)}
            className="h-full"
          /> */}
          {/* Main content area */}
          <div
            className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${
              sidebarOpen ? "ml-6" : "ml-0"
            }`}
          >
            <Header
              currentDate={currentDate}
              onMonthChange={handleMonthChange}
              totalBalance={1078.0}
            />
            <TransactionList currentDate={currentDate} filters={filters} />
          </div>
        </div>

        {/* Floating action buttons */}
        <div className="fixed bottom-4 right-4 flex flex-col gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="bg-green-500 hover:bg-green-600"
                onClick={() => setAddIncomeOpen(true)}
              >
                <Plus className="h-6 w-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Add Income</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="bg-red-500 hover:bg-red-600"
                onClick={() => setAddExpenseOpen(true)}
              >
                <Minus className="h-6 w-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Add Expense</TooltipContent>
          </Tooltip>
        </div>

        {/* Forms for adding income and expense */}
        <AddIncomeForm open={addIncomeOpen} onOpenChange={setAddIncomeOpen} />
        <AddExpenseForm
          open={addExpenseOpen}
          onOpenChange={setAddExpenseOpen}
        />
      </div>
    </TooltipProvider>
  );
}
