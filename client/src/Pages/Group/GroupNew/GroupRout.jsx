import Header from "../../appComponents/Header";
import Sidebar from "../../appComponents/Sidebar";
import GroupManagementLayout from "./GroupManagementLayout";

export default function BudgetingRout() {
  return (
    <div className="flex w-screen h-screen bg-gray-900 text-white overflow-x-hidden overflow-y-hidden scrollbar-none">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden scrollbar-none">
        <Header />
        <main className=" flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-br from-gray-800 via-purple-700 to-gray-800 p-6 scrollbar-none">
          <GroupManagementLayout />
        </main>
      </div>
    </div>
  );
}
