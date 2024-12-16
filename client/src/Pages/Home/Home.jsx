// import React from "react";
// import SideBar from "../../appComponents/Sidebar";
// import Header from "../../appComponents/Header";

// const Home = () => {
//   return (
//     // <div>
//     //   <SideBar />
//     //   <Header />
//     // </div>
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <SideBar className="w-64 bg-gray-100 border-r border-gray-300" />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <Header className="w-full bg-white shadow-md p-4 text-center" />

//         {/* Placeholder for Main Content */}
//         <div className="flex-1 p-4">Main Content Here</div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import { useState } from "react";
import Header from "../../appComponents/Header";
import Sidebar from "../../appComponents/Sidebar";
import TopMetricsCards from "../../appComponents/TopMetricsCards";
import FinanceInsights from "../../appComponents/FinanceInsights";
import ExpenseOverview from "../../appComponents/ExpenseOverview";
import SmartBudgetSuggestions from "../../appComponents/SmartBudgetSuggestions";
// import IntegrationsOverview from "../../appComponents/IntegrationsOverview";
import GroupDetails from "../../appComponents/GroupDetails";
import CreateGroupModal from "../../appComponents/CreatGroupModal";
import PendingDues from "../../appComponents/PendingDues";
import RecurringPayments from "../../appComponents/RecurringPayments";

export default function Dashboard() {
  const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = useState(false);

  return (
    <div className="flex w-screen h-screen bg-gray-900 text-white overflow-x-hidden overflow-y-hidden scrollbar-none">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden scrollbar-none">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto s bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6 scrollbar-none">
          {/* <div className="max-w-7xl mx-auto space-y-6">
            <TopMetricsCards />
            {/* <GroupDetails
              onCreateGroup={() => setIsCreateGroupModalOpen(true)}
            />
            <PendingDues /> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <GroupDetails onCreateGroup={() => {}} />
              <PendingDues />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FinanceInsights />
              <ExpenseOverview />
            </div>
            <RecurringPayments />
            <SmartBudgetSuggestions />
            {/* <IntegrationsOverview /> */}
          </div> */}
        </main>
      </div>
      // <CreateGroupModal
      //   isOpen={isCreateGroupModalOpen}
      //   onClose={() => setIsCreateGroupModalOpen(false)}
      // />
    </div>
  );
}
