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

// import { useState } from "react";
import Header from "../../appComponents/Header";
import Sidebar from "../../appComponents/Sidebar";
// import GroupPageRout from "./AddGroupForm";
import GroupDetailsPage from "./GroupDetails";
import GroupsRoute from "./GroupRoute";
import { Outlet } from "react-router-dom";
export default function GroupPage() {
  return (
    <div className="flex w-screen h-screen bg-gray-900 text-white overflow-x-hidden overflow-y-hidden scrollbar-none">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden scrollbar-none">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6 scrollbar-none">
          {/* <GroupPageRout /> */}
          {/* <GroupsRoute />
          <GroupDetailsPage /> */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
