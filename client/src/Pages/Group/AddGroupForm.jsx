// import { useState } from "react";
// import { Popover } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Utensils,
//   Car,
//   Home,
//   Film,
//   ShoppingBag,
//   MoreHorizontal,
// } from "lucide-react";

// // Expense Summary Component
// const categories = [
//   {
//     name: "Food",
//     icon: Utensils,
//     subcategories: ["Groceries", "Restaurants", "Takeout"],
//   },
//   {
//     name: "Travel",
//     icon: Car,
//     subcategories: ["Gas", "Public Transport", "Flights"],
//   },
//   {
//     name: "Utilities",
//     icon: Home,
//     subcategories: ["Electricity", "Water", "Internet"],
//   },
//   {
//     name: "Entertainment",
//     icon: Film,
//     subcategories: ["Movies", "Concerts", "Subscriptions"],
//   },
//   {
//     name: "Shopping",
//     icon: ShoppingBag,
//     subcategories: ["Clothes", "Electronics", "Home Goods"],
//   },
//   { name: "Other", icon: MoreHorizontal, subcategories: ["Miscellaneous"] },
// ];

// export default function ExpenseSummary({ expenses }) {
//   const categoryTotals = expenses.reduce((acc, expense) => {
//     if (!acc[expense.category]) {
//       acc[expense.category] = { total: 0, subcategories: {} };
//     }
//     acc[expense.category].total += expense.amount;

//     const subcategory = expense.subcategory || "Miscellaneous";
//     if (!acc[expense.category].subcategories[subcategory]) {
//       acc[expense.category].subcategories[subcategory] = 0;
//     }
//     acc[expense.category].subcategories[subcategory] += expense.amount;

//     return acc;
//   }, {});

//   const totalAmount = Object.values(categoryTotals).reduce(
//     (sum, category) => sum + category.total,
//     0
//   );

//   return (
//     <Card className="bg-gray-800 border-gray-700 flex-grow overflow-y-auto">
//       <CardHeader>
//         <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
//           Expense Summary
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-6">
//           {categories.map((category) => {
//             const categoryData = categoryTotals[category.name] || {
//               total: 0,
//               subcategories: {},
//             };
//             return (
//               <div key={category.name} className="space-y-2">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center space-x-2">
//                     <category.icon className="w-5 h-5 text-purple-400" />
//                     <span className="text-lg font-semibold text-gray-300">
//                       {category.name}
//                     </span>
//                   </div>
//                   <span className="text-lg font-semibold text-purple-400">
//                     ${categoryData.total.toFixed(2)}
//                   </span>
//                 </div>
//                 <div className="pl-7 space-y-1">
//                   {category.subcategories.map((subcategory) => (
//                     <div
//                       key={subcategory}
//                       className="flex justify-between text-sm"
//                     >
//                       <span className="text-gray-400">{subcategory}</span>
//                       <span className="text-gray-300">
//                         $$
//                         {(categoryData.subcategories[subcategory] || 0).toFixed(
//                           2
//                         )}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             );
//           })}
//           <div className="border-t border-gray-700 pt-4 mt-4">
//             <div className="flex justify-between items-center">
//               <span className="text-xl font-bold text-gray-300">Total</span>
//               <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
//                 ${totalAmount.toFixed(2)}
//               </span>
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// const GroupPage = () => {
//   const [selectedGroup, setSelectedGroup] = useState(null);
//   const [newMember, setNewMember] = useState("");
//   const [expenses, setExpenses] = useState([
//     {
//       id: 1,
//       category: "Food",
//       description: "Lunch",
//       amount: 20,
//       user: "Alice",
//       date: "2024-12-10",
//       time: "12:30 PM",
//       subcategory: "Groceries",
//     },
//     {
//       id: 2,
//       category: "Travel",
//       description: "Taxi",
//       amount: 15,
//       user: "Bob",
//       date: "2024-12-10",
//       time: "1:00 PM",
//       subcategory: "Gas",
//     },
//   ]);
//   const [showExpenseForm, setShowExpenseForm] = useState(false);
//   const [expenseData, setExpenseData] = useState({
//     amount: "",
//     category: "",
//     description: "",
//     username: "",
//     subcategory: "",
//   });

//   const groups = ["Group 1", "Group 2", "Group 3"];
//   const members = ["Alice", "Bob", "Charlie"];

//   const handleAddMember = () => {
//     setNewMember("");
//   };

//   const handleFormSubmit = () => {
//     setExpenses([...expenses, { ...expenseData, id: expenses.length + 1 }]);
//     setShowExpenseForm(false);
//   };

//   return (
//     <div className="flex h-full">
//       <div className="w-1/4 bg-gray-700 p-4">
//         <h2 className="font-bold text-xl mb-2">Groups</h2>
//         <ul className="text-left">
//           {groups.map((group, idx) => (
//             <li
//               key={idx}
//               onClick={() => setSelectedGroup(group)}
//               className="cursor-pointer p-2 hover:bg-gray-500 mb-3"
//             >
//               {group}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="w-3/4 p-4 bg-gray-400 text-gray-800 flex flex-col">
//         {selectedGroup && (
//           <>
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-xl font-bold">{selectedGroup}</h3>
//               <Popover
//                 content={<div>{members.join(", ")}</div>}
//                 trigger="click"
//               >
//                 <Button className="bg-blue-800 hover:bg-blue-500 rounded-3xl">
//                   Members
//                 </Button>
//               </Popover>
//             </div>

//             {/* Expense Summary Section with adjusted height */}
//             <div className="flex-grow overflow-y-auto">
//               <ExpenseSummary expenses={expenses} />
//             </div>

//             <Button
//               onClick={() => setShowExpenseForm(true)}
//               className="bg-green-500 mt-4"
//             >
//               Add Expense
//             </Button>

//             <Popover
//               content={
//                 <div>
//                   <Input
//                     value={newMember}
//                     onChange={(e) => setNewMember(e.target.value)}
//                     placeholder="Enter Username"
//                   />
//                   <Button onClick={handleAddMember}>Add</Button>
//                 </div>
//               }
//               trigger="click"
//             >
//               <Button className="mt-4 bg-green-500 ml-20">Add Member</Button>
//             </Popover>
//           </>
//         )}
//       </div>

//       {showExpenseForm && (
//         <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded shadow-lg w-1/3">
//             <h3 className="text-lg font-semibold">Add Expense</h3>
//             <Input
//               className="mt-2"
//               placeholder="Amount"
//               value={expenseData.amount}
//               onChange={(e) =>
//                 setExpenseData({ ...expenseData, amount: e.target.value })
//               }
//             />
//             <Input
//               className="mt-2"
//               placeholder="Category"
//               value={expenseData.category}
//               onChange={(e) =>
//                 setExpenseData({ ...expenseData, category: e.target.value })
//               }
//             />
//             <Input
//               className="mt-2"
//               placeholder="Description"
//               value={expenseData.description}
//               onChange={(e) =>
//                 setExpenseData({ ...expenseData, description: e.target.value })
//               }
//             />
//             <Input
//               className="mt-2"
//               placeholder="Username"
//               value={expenseData.username}
//               onChange={(e) =>
//                 setExpenseData({ ...expenseData, username: e.target.value })
//               }
//             />
//             <Button className="mt-4" onClick={handleFormSubmit}>
//               Add Expense
//             </Button>
//             <Button onClick={() => setShowExpenseForm(false)} className="mt-4">
//               Cancel
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

//first RollBack//

import React, { useState } from "react";
import { PlusCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function GroupPage() {
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "Trip to Paris",
      members: ["Alice", "Bob"],
      currency: "EUR",
    },
    {
      id: 2,
      name: "Office Lunch",
      members: ["Charlie", "David", "Eve"],
      currency: "USD",
    },
  ]);
  const [groupName, setGroupName] = useState("");
  const [members, setMembers] = useState([""]);
  const [currency, setCurrency] = useState("");

  const addMember = () => {
    setMembers([...members, ""]);
  };

  const removeMember = (index) => {
    const newMembers = members.filter((_, i) => i !== index);
    setMembers(newMembers);
  };

  const updateMember = (index, value) => {
    const newMembers = [...members];
    newMembers[index] = value;
    setMembers(newMembers);
  };

  const createGroup = () => {
    if (groupName && members.length > 0 && currency) {
      const newGroup = {
        id: groups.length + 1,
        name: groupName,
        members: members.filter((member) => member.trim() !== ""),
        currency,
      };
      setGroups([...groups, newGroup]);
      setGroupName("");
      setMembers([""]);
      setCurrency("");
    }
  };

  return (
    <div className="flex h-full bg-gray-900 text-gray-100">
      {/* Left side: Group list */}
      <div className="w-1/3 p-6 border-r border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-purple-300">Your Groups</h2>
        <div className="space-y-4">
          {groups.map((group) => (
            <Card
              key={group.id}
              className="bg-gray-800 border-gray-700 hover:bg-slate-700"
            >
              <CardHeader>
                <CardTitle className="text-purple-300">{group.name}</CardTitle>
                <CardDescription className="text-gray-400">
                  {group.members.join(", ")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-pink-500">Currency: {group.currency}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Right side: Create Group form */}
      <div className="w-2/3 p-6">
        <h2 className="text-2xl font-bold mb-4 text-purple-300">
          Create New Group
        </h2>
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="space-y-4">
            <div>
              <label
                htmlFor="groupName"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Group Name
              </label>
              <Input
                id="groupName"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                className="bg-gray-700 border-gray-600 text-gray-100"
                placeholder="Enter group name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Members
              </label>
              {members.map((member, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <Input
                    value={member}
                    onChange={(e) => updateMember(index, e.target.value)}
                    className="bg-gray-700 border-gray-600 text-gray-100"
                    placeholder="Enter member name"
                  />
                  {index > 0 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeMember(index)}
                      className="text-gray-400 hover:text-gray-100"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                variant="outline"
                onClick={addMember}
                className="mt-2 text-purple-300 border-purple-300 hover:bg-purple-300 hover:text-gray-900"
              >
                <PlusCircle className="mr-2 h-4 w-4" /> Add Member
              </Button>
            </div>
            <div>
              <label
                htmlFor="currency"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Currency
              </label>
              <Select onValueChange={setCurrency}>
                <SelectTrigger className="bg-gray-700 border-gray-600 text-gray-100">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="USD">USD - US Dollar</SelectItem>
                  <SelectItem value="EUR">EUR - Euro</SelectItem>
                  <SelectItem value="GBP">GBP - British Pound</SelectItem>
                  <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-gray-400 mt-1">
                Selected currency will be used for all expenses in this group.
              </p>
            </div>
            <Button
              onClick={createGroup}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            >
              Create Group
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default GroupPage;

//Second RollBack//
// "use client";

// import { useState } from "react";
// import {
//   PlusCircle,
//   X,
//   ShoppingBag,
//   Utensils,
//   Plane,
//   Film,
//   MoreHorizontal,
//   Check,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Badge } from "@/components/ui/badge";

// // interface Group {
// //   id: number
// //   name: string
// //   members: string[]
// //   currency: string
// // }

// // const Expense {
// //   id: number,
// //   groupId: number,
// //   paidBy: string,
// //   description: string,
// //   amount: number,
// //   category: 'food' | 'shopping' | 'travel' | 'entertainment' | 'others',
// //   date: Date,
// // }
// // Group object structure
// const Group = {
//   id: 1,
//   name: "Group Name",
//   members: ["Member 1", "Member 2", "Member 3"],
//   currency: "USD",
// };

// // Expense object structure
// const Expense = {
//   id: 1,
//   groupId: 1,
//   paidBy: "Member 1",
//   description: "Lunch at a restaurant",
//   amount: 50,
//   category: "food", // options: 'food', 'shopping', 'travel', 'entertainment', 'others'
//   date: new Date(), // current date
// };

// const categoryIcons = {
//   food: Utensils,
//   shopping: ShoppingBag,
//   travel: Plane,
//   entertainment: Film,
//   others: MoreHorizontal,
// };

// export default function GroupPageOld() {
//   // const [groups, setGroups] = useState<Group[]>([
//   //   { id: 1, name: 'Trip to Paris', members: ['Alice', 'Bob'], currency: 'EUR' },
//   //   { id: 2, name: 'Office Lunch', members: ['Charlie', 'David', 'Eve'], currency: 'USD' },
//   // ])
//   const [groups, setGroups] = useState([
//     {
//       id: 1,
//       name: "Trip to Paris",
//       members: ["Alice", "Bob"],
//       currency: "EUR",
//     },
//     {
//       id: 2,
//       name: "Office Lunch",
//       members: ["Charlie", "David", "Eve"],
//       currency: "USD",
//     },
//   ]);
//   const [groupName, setGroupName] = useState("");
//   const [members, setMembers] = useState([""]);
//   const [currency, setCurrency] = useState("");
//   const [selectedGroup, setSelectedGroup] = (useState < Group) | (null > null);
//   // const [expenses, setExpenses] = useState<Expense[]>([
//   //   { id: 1, groupId: 1, paidBy: 'Alice', description: 'Eiffel Tower tickets', amount: 60, category: 'entertainment', date: new Date() },
//   //   { id: 2, groupId: 1, paidBy: 'Bob', description: 'Dinner at Le Chateaubriand', amount: 200, category: 'food', date: new Date() },
//   // ])
//   const [expenses, setExpenses] = useState([
//     {
//       id: 1,
//       groupId: 1,
//       paidBy: "Alice",
//       description: "Eiffel Tower tickets",
//       amount: 60,
//       category: "entertainment",
//       date: new Date(),
//     },
//     {
//       id: 2,
//       groupId: 1,
//       paidBy: "Bob",
//       description: "Dinner at Le Chateaubriand",
//       amount: 200,
//       category: "food",
//       date: new Date(),
//     },
//   ]);
//   // const [newExpense, setNewExpense] = useState({ paidBy: '', description: '', amount: 0, category: 'others' as Expense['category'] })
//   const [newExpense, setNewExpense] = useState({
//     paidBy: "",
//     description: "",
//     amount: 0,
//     category: "others", // 'others' is the default value for category
//   });
//   const [newMember, setNewMember] = useState("");

//   const addMember = () => {
//     setMembers([...members, ""]);
//   };

//   // const removeMember = (index: number) => {
//   //   const newMembers = members.filter((_, i) => i !== index)
//   //   setMembers(newMembers)
//   // }
//   const removeMember = (index) => {
//     const newMembers = members.filter((_, i) => i !== index);
//     setMembers(newMembers);
//   };

//   // const updateMember = (index: number, value: string) => {
//   //   const newMembers = [...members]
//   //   newMembers[index] = value
//   //   setMembers(newMembers)
//   // }
//   const updateMember = (index, value) => {
//     const newMembers = [...members];
//     newMembers[index] = value;
//     setMembers(newMembers);
//   };

//   // const createGroup = () => {
//   //   if (groupName && members.length > 0 && currency) {
//   //     const newGroup: Group = {
//   //       id: groups.length + 1,
//   //       name: groupName,
//   //       members: members.filter(member => member.trim() !== ''),
//   //       currency,
//   //     }
//   //     setGroups([...groups, newGroup])
//   //     setGroupName('')
//   //     setMembers([''])
//   //     setCurrency('')
//   //   }
//   // }
//   const createGroup = () => {
//     if (groupName && members.length > 0 && currency) {
//       const newGroup = {
//         id: groups.length + 1,
//         name: groupName,
//         members: members.filter((member) => member.trim() !== ""),
//         currency,
//       };
//       setGroups([...groups, newGroup]);
//       setGroupName("");
//       setMembers([""]);
//       setCurrency("");
//     }
//   };

//   // const selectGroup = (group: Group) => {
//   //   setSelectedGroup(group)
//   // }
//   const selectGroup = (group) => {
//     setSelectedGroup(group);
//   };

//   // const addExpense = () => {
//   //   if (selectedGroup && newExpense.paidBy && newExpense.description && newExpense.amount > 0) {
//   //     const expense: Expense = {
//   //       id: expenses.length + 1,
//   //       groupId: selectedGroup.id,
//   //       ...newExpense,
//   //       date: new Date(),
//   //     }
//   //     setExpenses([...expenses, expense])
//   //     setNewExpense({ paidBy: '', description: '', amount: 0, category: 'others' })
//   //   }
//   // }
//   const addExpense = () => {
//     if (
//       selectedGroup &&
//       newExpense.paidBy &&
//       newExpense.description &&
//       newExpense.amount > 0
//     ) {
//       const expense = {
//         id: expenses.length + 1,
//         groupId: selectedGroup.id,
//         ...newExpense,
//         date: new Date(),
//       };
//       setExpenses([...expenses, expense]);
//       setNewExpense({
//         paidBy: "",
//         description: "",
//         amount: 0,
//         category: "others",
//       });
//     }
//   };

//   const addNewMember = () => {
//     if (selectedGroup && newMember) {
//       const updatedGroup = {
//         ...selectedGroup,
//         members: [...selectedGroup.members, newMember],
//       };
//       setGroups(
//         groups.map((g) => (g.id === selectedGroup.id ? updatedGroup : g))
//       );
//       setSelectedGroup(updatedGroup);
//       setNewMember("");
//     }
//   };

//   return (
//     <div className="flex h-full bg-gray-900 text-gray-100">
//       {/* Left side: Group list */}
//       <div className="w-1/3 p-6 border-r border-gray-700">
//         <h2 className="text-2xl font-bold mb-4 text-purple-300">Your Groups</h2>
//         <div className="space-y-4">
//           {groups.map((group) => (
//             <Card
//               key={group.id}
//               className="bg-gray-800 border-gray-700 cursor-pointer"
//               onClick={() => selectGroup(group)}
//             >
//               <CardHeader>
//                 <CardTitle className="text-purple-300">{group.name}</CardTitle>
//                 <CardDescription className="text-gray-400">
//                   {group.members.join(", ")}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-pink-500">Currency: {group.currency}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Right side: Group chat or Create Group form */}
//       <div className="w-2/3 p-6">
//         {selectedGroup ? (
//           <div className="space-y-6">
//             <div className="flex justify-between items-center">
//               <h2 className="text-2xl font-bold text-purple-300">
//                 {selectedGroup.name}
//               </h2>
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Button
//                     variant="outline"
//                     className="text-purple-300 border-purple-300 hover:bg-purple-300 hover:text-gray-900"
//                   >
//                     Members
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-80 bg-gray-800 border-gray-700">
//                   <div className="space-y-4">
//                     {selectedGroup.members.map((member, index) => (
//                       <div key={index} className="flex items-center space-x-2">
//                         <Avatar>
//                           <AvatarFallback>{member[0]}</AvatarFallback>
//                         </Avatar>
//                         <span>{member}</span>
//                       </div>
//                     ))}
//                     <div className="flex items-center space-x-2">
//                       <Input
//                         value={newMember}
//                         onChange={(e) => setNewMember(e.target.value)}
//                         placeholder="New member name"
//                         className="bg-gray-700 border-gray-600 text-gray-100"
//                       />
//                       <Button onClick={addNewMember} size="sm">
//                         Add
//                       </Button>
//                     </div>
//                   </div>
//                 </PopoverContent>
//               </Popover>
//             </div>

//             <ScrollArea className="h-[calc(100vh-200px)]">
//               <div className="space-y-4">
//                 {expenses
//                   .filter((expense) => expense.groupId === selectedGroup.id)
//                   .sort((a, b) => b.date.getTime() - a.date.getTime())
//                   .map((expense) => {
//                     const CategoryIcon = categoryIcons[expense.category];
//                     return (
//                       <Card
//                         key={expense.id}
//                         className="bg-gray-800 border-gray-700"
//                       >
//                         <CardHeader className="flex flex-row items-center space-x-4 pb-2">
//                           <Avatar>
//                             <AvatarFallback>{expense.paidBy[0]}</AvatarFallback>
//                           </Avatar>
//                           <div>
//                             <CardTitle className="text-lg text-purple-300">
//                               {expense.paidBy}
//                             </CardTitle>
//                             <CardDescription className="text-sm text-gray-400">
//                               {expense.date.toLocaleDateString()}
//                             </CardDescription>
//                           </div>
//                           <Badge variant="outline" className="ml-auto">
//                             <CategoryIcon className="w-4 h-4 mr-1" />
//                             {expense.category}
//                           </Badge>
//                         </CardHeader>
//                         <CardContent>
//                           <p className="text-gray-100">{expense.description}</p>
//                           <p className="text-lg font-semibold text-pink-500 mt-2">
//                             {selectedGroup.currency} {expense.amount.toFixed(2)}
//                           </p>
//                         </CardContent>
//                       </Card>
//                     );
//                   })}
//               </div>
//             </ScrollArea>

//             <Popover>
//               <PopoverTrigger asChild>
//                 <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
//                   Add New Expense
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent className="w-80 bg-gray-800 border-gray-700">
//                 <div className="space-y-4">
//                   <Select
//                     onValueChange={(value) =>
//                       setNewExpense({ ...newExpense, paidBy: value })
//                     }
//                   >
//                     <SelectTrigger className="bg-gray-700 border-gray-600 text-gray-100">
//                       <SelectValue placeholder="Who paid?" />
//                     </SelectTrigger>
//                     <SelectContent className="bg-gray-800 border-gray-700">
//                       {selectedGroup.members.map((member) => (
//                         <SelectItem key={member} value={member}>
//                           {member}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                   <Input
//                     placeholder="Description"
//                     value={newExpense.description}
//                     onChange={(e) =>
//                       setNewExpense({
//                         ...newExpense,
//                         description: e.target.value,
//                       })
//                     }
//                     className="bg-gray-700 border-gray-600 text-gray-100"
//                   />
//                   <Input
//                     type="number"
//                     placeholder="Amount"
//                     value={newExpense.amount || ""}
//                     onChange={(e) =>
//                       setNewExpense({
//                         ...newExpense,
//                         amount: parseFloat(e.target.value),
//                       })
//                     }
//                     className="bg-gray-700 border-gray-600 text-gray-100"
//                   />
//                   {/* <Select onValueChange={(value) => setNewExpense({...newExpense, category: value as Expense['category']})}> */}
//                   <Select
//                     onValueChange={(value) =>
//                       setNewExpense({ ...newExpense, category: value })
//                     }
//                   >
//                     <SelectTrigger className="bg-gray-700 border-gray-600 text-gray-100">
//                       <SelectValue placeholder="Category" />
//                     </SelectTrigger>
//                     <SelectContent className="bg-gray-800 border-gray-700">
//                       {Object.keys(categoryIcons).map((category) => (
//                         <SelectItem key={category} value={category}>
//                           {category}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                   <Button onClick={addExpense} className="w-full">
//                     Add Expense
//                   </Button>
//                 </div>
//               </PopoverContent>
//             </Popover>

//             <Card className="bg-gray-800 border-gray-700">
//               <CardHeader>
//                 <CardTitle className="text-purple-300">Split Options</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-2">
//                   <Button variant="outline" className="w-full justify-start">
//                     <Check className="mr-2 h-4 w-4" /> Equal Split
//                   </Button>
//                   <Button variant="outline" className="w-full justify-start">
//                     Exact Amounts
//                   </Button>
//                   <Button variant="outline" className="w-full justify-start">
//                     Percentages
//                   </Button>
//                   <Button variant="outline" className="w-full justify-start">
//                     Dynamic Split
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         ) : (
//           <div>
//             <h2 className="text-2xl font-bold mb-4 text-purple-300">
//               Create New Group
//             </h2>
//             <Card className="bg-gray-800 border-gray-700">
//               <CardContent className="space-y-4">
//                 <div>
//                   <label
//                     htmlFor="groupName"
//                     className="block text-sm font-medium text-gray-400 mb-1"
//                   >
//                     Group Name
//                   </label>
//                   <Input
//                     id="groupName"
//                     value={groupName}
//                     onChange={(e) => setGroupName(e.target.value)}
//                     className="bg-gray-700 border-gray-600 text-gray-100"
//                     placeholder="Enter group name"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-400 mb-1">
//                     Members
//                   </label>
//                   {members.map((member, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center space-x-2 mb-2"
//                     >
//                       <Input
//                         value={member}
//                         onChange={(e) => updateMember(index, e.target.value)}
//                         className="bg-gray-700 border-gray-600 text-gray-100"
//                         placeholder="Enter member name"
//                       />
//                       {index > 0 && (
//                         <Button
//                           variant="ghost"
//                           size="icon"
//                           onClick={() => removeMember(index)}
//                           className="text-gray-400 hover:text-gray-100"
//                         >
//                           <X className="h-4 w-4" />
//                         </Button>
//                       )}
//                     </div>
//                   ))}
//                   <Button
//                     variant="outline"
//                     onClick={addMember}
//                     className="mt-2 text-purple-300 border-purple-300 hover:bg-purple-300 hover:text-gray-900"
//                   >
//                     <PlusCircle className="mr-2 h-4 w-4" /> Add Member
//                   </Button>
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="currency"
//                     className="block text-sm font-medium text-gray-400 mb-1"
//                   >
//                     Currency
//                   </label>
//                   <Select onValueChange={setCurrency}>
//                     <SelectTrigger className="bg-gray-700 border-gray-600 text-gray-100">
//                       <SelectValue placeholder="Select currency" />
//                     </SelectTrigger>
//                     <SelectContent className="bg-gray-800 border-gray-700">
//                       <SelectItem value="USD">USD - US Dollar</SelectItem>
//                       <SelectItem value="EUR">EUR - Euro</SelectItem>
//                       <SelectItem value="GBP">GBP - British Pound</SelectItem>
//                       <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <p className="text-sm text-gray-400 mt-1">
//                     Selected currency will be used for all expenses in this
//                     group.
//                   </p>
//                 </div>
//                 <Button
//                   onClick={createGroup}
//                   className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
//                 >
//                   Create Group
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   PlusCircle,
//   ShoppingBag,
//   Utensils,
//   Plane,
//   Film,
//   MoreHorizontal,
//   Check,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Badge } from "@/components/ui/badge";

// // Mock data (replace with actual data fetching in a real application)
// const mockGroups = [
//   { id: 1, name: "Trip to Paris", members: ["Alice", "Bob"], currency: "EUR" },
//   {
//     id: 2,
//     name: "Office Lunch",
//     members: ["Charlie", "David", "Eve"],
//     currency: "USD",
//   },
// ];

// const mockExpenses = [
//   {
//     id: 1,
//     groupId: 1,
//     paidBy: "Alice",
//     description: "Eiffel Tower tickets",
//     amount: 60,
//     category: "entertainment",
//     date: new Date(),
//   },
//   {
//     id: 2,
//     groupId: 1,
//     paidBy: "Bob",
//     description: "Dinner at Le Chateaubriand",
//     amount: 200,
//     category: "food",
//     date: new Date(),
//   },
// ];

// const categoryIcons = {
//   food: Utensils,
//   shopping: ShoppingBag,
//   travel: Plane,
//   entertainment: Film,
//   others: MoreHorizontal,
// };

// export default function GroupChatPage() {
//   const navigate = useNavigate(); // For navigation
//   const { id } = useParams(); // UseParams to get the group ID from the URL

//   const [group, setGroup] = useState(null);
//   const [expenses, setExpenses] = useState([]);
//   const [newExpense, setNewExpense] = useState({
//     paidBy: "",
//     description: "",
//     amount: 0,
//     category: "others",
//   });
//   const [newMember, setNewMember] = useState("");

//   useEffect(() => {
//     const groupId = parseInt(id); // Get the groupId from the route params
//     const foundGroup = mockGroups.find((g) => g.id === groupId);
//     const groupExpenses = mockExpenses.filter((e) => e.groupId === groupId);

//     if (foundGroup) {
//       setGroup(foundGroup);
//       setExpenses(groupExpenses);
//     } else {
//       navigate("/groups"); // Redirect to groups if no group found
//     }
//   }, [id, navigate]);

//   const addExpense = () => {
//     if (
//       group &&
//       newExpense.paidBy &&
//       newExpense.description &&
//       newExpense.amount > 0
//     ) {
//       const expense = {
//         id: expenses.length + 1,
//         groupId: group.id,
//         ...newExpense,
//         date: new Date(),
//       };
//       setExpenses([...expenses, expense]);
//       setNewExpense({
//         paidBy: "",
//         description: "",
//         amount: 0,
//         category: "others",
//       });
//     }
//   };

//   const addNewMember = () => {
//     if (group && newMember) {
//       const updatedGroup = {
//         ...group,
//         members: [...group.members, newMember],
//       };
//       setGroup(updatedGroup);
//       setNewMember("");
//     }
//   };

//   if (!group) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-6 bg-gray-900 text-gray-100 min-h-screen">
//       <div className="max-w-4xl mx-auto space-y-6">
//         <div className="flex justify-between items-center">
//           <h2 className="text-2xl font-bold text-purple-300">{group.name}</h2>
//           <Popover>
//             <PopoverTrigger asChild>
//               <Button
//                 variant="outline"
//                 className="text-purple-300 border-purple-300 hover:bg-purple-300 hover:text-gray-900"
//               >
//                 Members
//               </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-80 bg-gray-800 border-gray-700">
//               <div className="space-y-4">
//                 {group.members.map((member, index) => (
//                   <div key={index} className="flex items-center space-x-2">
//                     <Avatar>
//                       <AvatarFallback>{member[0]}</AvatarFallback>
//                     </Avatar>
//                     <span>{member}</span>
//                   </div>
//                 ))}
//                 <div className="flex items-center space-x-2">
//                   <Input
//                     value={newMember}
//                     onChange={(e) => setNewMember(e.target.value)}
//                     placeholder="New member name"
//                     className="bg-gray-700 border-gray-600 text-gray-100"
//                   />
//                   <Button onClick={addNewMember} size="sm">
//                     Add
//                   </Button>
//                 </div>
//               </div>
//             </PopoverContent>
//           </Popover>
//         </div>

//         <ScrollArea className="h-[calc(100vh-200px)]">
//           <div className="space-y-4">
//             {expenses
//               .sort((a, b) => b.date.getTime() - a.date.getTime())
//               .map((expense) => {
//                 const CategoryIcon = categoryIcons[expense.category];
//                 return (
//                   <Card
//                     key={expense.id}
//                     className="bg-gray-800 border-gray-700"
//                   >
//                     <CardHeader className="flex flex-row items-center space-x-4 pb-2">
//                       <Avatar>
//                         <AvatarFallback>{expense.paidBy[0]}</AvatarFallback>
//                       </Avatar>
//                       <div>
//                         <CardTitle className="text-lg text-purple-300">
//                           {expense.paidBy}
//                         </CardTitle>
//                         <CardDescription className="text-sm text-gray-400">
//                           {expense.date.toLocaleDateString()}
//                         </CardDescription>
//                       </div>
//                       <Badge variant="outline" className="ml-auto">
//                         <CategoryIcon className="w-4 h-4 mr-1" />
//                         {expense.category}
//                       </Badge>
//                     </CardHeader>
//                     <CardContent>
//                       <p className="text-gray-100">{expense.description}</p>
//                       <p className="text-lg font-semibold text-pink-500 mt-2">
//                         {group.currency} {expense.amount.toFixed(2)}
//                       </p>
//                     </CardContent>
//                   </Card>
//                 );
//               })}
//           </div>
//         </ScrollArea>

//         <Popover>
//           <PopoverTrigger asChild>
//             <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
//               Add New Expense
//             </Button>
//           </PopoverTrigger>
//           <PopoverContent className="w-80 bg-gray-800 border-gray-700">
//             <div className="space-y-4">
//               <Select
//                 onValueChange={(value) =>
//                   setNewExpense({ ...newExpense, paidBy: value })
//                 }
//               >
//                 <SelectTrigger className="bg-gray-700 border-gray-600 text-gray-100">
//                   <SelectValue placeholder="Who paid?" />
//                 </SelectTrigger>
//                 <SelectContent className="bg-gray-800 border-gray-700">
//                   {group.members.map((member) => (
//                     <SelectItem key={member} value={member}>
//                       {member}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//               <Input
//                 placeholder="Description"
//                 value={newExpense.description}
//                 onChange={(e) =>
//                   setNewExpense({ ...newExpense, description: e.target.value })
//                 }
//                 className="bg-gray-700 border-gray-600 text-gray-100"
//               />
//               <Input
//                 type="number"
//                 placeholder="Amount"
//                 value={newExpense.amount || ""}
//                 onChange={(e) =>
//                   setNewExpense({
//                     ...newExpense,
//                     amount: parseFloat(e.target.value),
//                   })
//                 }
//                 className="bg-gray-700 border-gray-600 text-gray-100"
//               />
//               <Select
//                 onValueChange={(value) =>
//                   setNewExpense({ ...newExpense, category: value })
//                 }
//               >
//                 <SelectTrigger className="bg-gray-700 border-gray-600 text-gray-100">
//                   <SelectValue placeholder="Category" />
//                 </SelectTrigger>
//                 <SelectContent className="bg-gray-800 border-gray-700">
//                   {Object.keys(categoryIcons).map((category) => (
//                     <SelectItem key={category} value={category}>
//                       {category}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//               <Button onClick={addExpense} className="w-full">
//                 Add Expense
//               </Button>
//             </div>
//           </PopoverContent>
//         </Popover>

//         <Card className="bg-gray-800 border-gray-700">
//           <CardHeader>
//             <CardTitle className="text-purple-300">Split Options</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-2">
//               <Button variant="outline" className="w-full justify-start">
//                 <Check className="mr-2 h-4 w-4" /> Equal Split
//               </Button>
//               <Button variant="outline" className="w-full justify-start">
//                 Exact Amounts
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
