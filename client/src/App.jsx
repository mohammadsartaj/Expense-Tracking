import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./Pages/page";
import Login from "./Pages/LandingPage/Login";
// import { SessionProvider } from "./context/SessionContext";
import Setup2FA from "./Pages/LandingPage/Setup2FA";
import Verify2FA from "./Pages/LandingPage/Verify2FA";
import GroupPage from "./Pages/Group/GroupPage";
import GroupDetailsPage from "./Pages/Group/GroupDetails";
import GroupRoute from "./Pages/Group/GroupRoute";
import Home from "./Pages/DashBoard/DashboardRout";
import BudgetingPage from "./Pages/Budgeting/budgetRout";
import Report from "./Pages/Balance_Report/BalancePage";
import ProfilePage from "./Pages/Profile/ProfileRout";
import Setting from "./Pages/setting/SettingRout";
import Help from "./Pages/Help/HelpRout";
import Calender from "./Pages/calender/CalenderRout";
import Transaction from "./Pages/Transaction/TransactionRout";
import Recurring from "./Pages/Recurring/RecurringRout";
import BudgetingRout from "./Pages/Budget/budgetPageRout";
import GroupManagementLayout from "./Pages/Group/GroupNew/GroupManagementLayout";
import GroupPageNew from "./Pages/Group/GroupNew3/GroupLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Page />
      </div>
    ),
  },
  {
    path: "/groupnew2",
    element: (
      <div>
        <GroupPageNew />
      </div>
    ),
  },
  {
    path: "/groupnew",
    element: (
      <div>
        <GroupManagementLayout />
      </div>
    ),
  },
  {
    path: "/recurring",
    element: (
      <div>
        <Recurring />
      </div>
    ),
  },
  {
    path: "/transaction",
    element: (
      <div>
        <Transaction />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/group",
    element: <GroupPage />,
    children: [
      {
        index: true,
        element: <GroupRoute />, // Group list and creation form
      },
      {
        path: "group-details/:groupId",
        element: <GroupDetailsPage />, // Group details page
      },
    ],
  },
  {
    path: "/expenses",
    element: (
      <div>
        <BudgetingPage />
      </div>
    ),
  },
  {
    path: "/budget",
    element: (
      <div>
        <BudgetingRout />
      </div>
    ),
  },
  {
    path: "/home",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "/report",
    element: (
      <div>
        <Report />
      </div>
    ),
  },
  {
    path: "/profile",
    element: (
      <div>
        <ProfilePage />
      </div>
    ),
  },
  {
    path: "/setting",
    element: (
      <div>
        <Setting />
      </div>
    ),
  },
  {
    path: "/help",
    element: (
      <div>
        <Help />
      </div>
    ),
  },
  {
    path: "/calender",
    element: (
      <div>
        <Calender />
      </div>
    ),
  },
]);

function App() {
  return (
    <div>
      {/* <SessionProvider> */}
      <RouterProvider router={router} />
      {/* </SessionProvider> */}
    </div>
  );
}
export default App;
