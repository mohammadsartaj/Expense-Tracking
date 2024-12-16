// // import {
// //   Home,
// //   BarChart2,
// //   PieChart,
// //   FileText,
// //   User,
// //   Shield,
// //   CreditCard,
// //   Package,
// //   Settings,
// //   HelpCircle,
// //   MessageCircle,
// //   Users,
// // } from "lucide-react";
// // // import "./sidebar.css";

// // const navItems = [
// //   { icon: Home, label: "Dashboard", active: true },
// //   { icon: Users, label: "Groups" },
// //   { icon: BarChart2, label: "Analytics" },
// //   { icon: PieChart, label: "Budgeting" },
// //   { icon: FileText, label: "Reports" },
// //   { icon: User, label: "Profile" },
// //   { icon: Shield, label: "Security" },
// //   { icon: CreditCard, label: "Billing" },
// //   { icon: Package, label: "Subscription" },
// //   { icon: Settings, label: "Settings" },
// //   { icon: HelpCircle, label: "Help Center" },
// //   { icon: MessageCircle, label: "Contact Support" },
// // ];

// // export default function Sidebar() {
// //   return (
// //     <aside className="w-64 bg-gray-800 border-r border-gray-700 overflow-y-auto scrollbar-none">
// //       <div className="p-6">
// //         <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-6">
// //           Hisaab Kitab
// //         </h1>
// //         <nav className="space-y-2">
// //           {navItems.map((item, index) => (
// //             <a
// //               key={index}
// //               href="#"
// //               className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
// //                 item.active
// //                   ? "bg-purple-600 text-white"
// //                   : "text-gray-400 hover:bg-gray-700 hover:text-white"
// //               }`}
// //             >
// //               <item.icon size={20} />
// //               <span>{item.label}</span>
// //             </a>
// //           ))}
// //         </nav>
// //       </div>
// //     </aside>
// //   );
// // }

// import { Link } from "react-router-dom";
// import {
//   Home,
//   BarChart2,
//   PieChart,
//   FileText,
//   User,
//   Shield,
//   CreditCard,
//   Package,
//   Settings,
//   HelpCircle,
//   MessageCircle,
//   Users,
//   LogOut,
//   LucideLogOut,
//   Repeat,
//   NotebookPenIcon,
// } from "lucide-react";
// import { CalendarCheck2Icon, HandCoinsIcon } from "lucide-react";

// const navItems = [
//   { icon: Home, label: "Dashboard", path: "/home" },
//   { icon: HandCoinsIcon, label: "Transaction", path: "/transaction" },
//   { icon: Users, label: "Groups", path: "/groupnew2" },
//   // { icon: BarChart2, label: "Analytics", path: "/analytics" },
//   { icon: PieChart, label: "Expenses", path: "/expenses" },
//   { icon: NotebookPenIcon, label: "Budget", path: "/budget" },
//   { icon: Repeat, label: "Recurring", path: "/recurring" },
//   { icon: FileText, label: "Reports", path: "/report" },
//   { icon: User, label: "Profile", path: "/profile" },
//   // { icon: Shield, label: "Security", path: "/security" },
//   { icon: CalendarCheck2Icon, label: "Calender", path: "/calender" },
//   // { icon: Package, label: "Subscription", path: "/subscription" },
//   { icon: Settings, label: "Settings", path: "/setting" },
//   { icon: HelpCircle, label: "Help Center", path: "/help" },
//   { icon: LucideLogOut, label: "LogOut", path: "/" },
//   // { icon: MessageCircle, label: "Contact Support", path: "/contact-support" },
// ];

// export default function Sidebar() {
//   return (
//     <aside className="w-64 bg-gray-800 border-r border-gray-700 overflow-y-auto scrollbar-none">
//       <div className="p-6">
//         <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-6">
//           Hisaab Kitab
//         </h1>
//         <nav className="space-y-2">
//           {navItems.map((item, index) => (
//             <Link
//               key={index}
//               to={item.path}
//               className={`flex items-center space-x-3 p-2 rounded-lg transition-colors ${
//                 item.active
//                   ? "bg-purple-600 text-white"
//                   : "text-gray-400 hover:bg-gray-700 hover:text-white"
//               }`}
//             >
//               <item.icon size={20} />
//               <span>{item.label}</span>
//             </Link>
//           ))}
//         </nav>
//       </div>
//       {/* <button>LogOut</button> */}
//     </aside>
//   );
// }

import { Link, useNavigate } from "react-router-dom";
import {
  Home,
  PieChart,
  FileText,
  User,
  Settings,
  HelpCircle,
  Users,
  LogOut,
  Repeat,
  NotebookPenIcon,
  CalendarCheck2Icon,
  HandCoinsIcon,
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Dashboard", path: "/home" },
  { icon: HandCoinsIcon, label: "Transaction", path: "/transaction" },
  { icon: Users, label: "Groups", path: "/groupnew2" },
  { icon: PieChart, label: "Expenses", path: "/expenses" },
  { icon: NotebookPenIcon, label: "Budget", path: "/budget" },
  { icon: Repeat, label: "Recurring", path: "/recurring" },
  { icon: FileText, label: "Reports", path: "/report" },
  { icon: User, label: "Profile", path: "/profile" },
  { icon: CalendarCheck2Icon, label: "Calendar", path: "/calendar" },
  { icon: Settings, label: "Settings", path: "/setting" },
  { icon: HelpCircle, label: "Help Center", path: "/help" },
];

export default function Sidebar() {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    localStorage.clear(); // Clear local storage
    navigate("/"); // Redirect to the login or home page
  };

  return (
    <aside className="w-64 bg-gray-800 border-r border-gray-700 overflow-y-auto scrollbar-none">
      <div className="p-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-6">
          Hisaab Kitab
        </h1>
        <nav className="space-y-2">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center space-x-3 p-2 rounded-lg transition-colors text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 p-2 rounded-lg transition-colors text-gray-400 hover:bg-gray-700 hover:text-white w-full text-left"
          >
            <LogOut size={20} />
            <span>LogOut</span>
          </button>
        </nav>
      </div>
    </aside>
  );
}
