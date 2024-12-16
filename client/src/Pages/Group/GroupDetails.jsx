// import React, { useState } from "react";
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
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Badge } from "@/components/ui/badge";

// const categoryIcons = {
//   food: Utensils,
//   shopping: ShoppingBag,
//   travel: Plane,
//   entertainment: Film,
//   others: MoreHorizontal,
// };

// export default function GroupDetailsPage() {
//   const [group, setGroup] = useState({
//     id: 1,
//     name: "Trip to Paris",
//     members: ["Alice", "Bob"],
//     currency: "EUR",
//   });
//   const [expenses, setExpenses] = useState([
//     {
//       id: 1,
//       paidBy: "Alice",
//       description: "Eiffel Tower tickets",
//       amount: 60,
//       category: "entertainment",
//       date: new Date(),
//     },
//     {
//       id: 2,
//       paidBy: "Bob",
//       description: "Dinner at Le Chateaubriand",
//       amount: 200,
//       category: "food",
//       date: new Date(),
//     },
//   ]);
//   const [newExpense, setNewExpense] = useState({
//     paidBy: "",
//     description: "",
//     amount: 0,
//     category: "others",
//   });
//   const [newMember, setNewMember] = useState("");

//   const addExpense = () => {
//     if (newExpense.paidBy && newExpense.description && newExpense.amount > 0) {
//       const expense = {
//         id: expenses.length + 1,
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
//     if (newMember) {
//       const updatedGroup = {
//         ...group,
//         members: [...group.members, newMember],
//       };
//       setGroup(updatedGroup);
//       setNewMember("");
//     }
//   };

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

//         {/* <Card className="bg-gray-800 border-gray-700"></Card> */}
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
//               <Button variant="outline" className="w-full justify-start">
//                 Percentages
//               </Button>
//               <Button variant="outline" className="w-full justify-start">
//                 Dynamic Split
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

// // File: HisaabKitab\client\src\Pages\Group\GroupDetails.jsx
// // import React, { useState, useEffect } from "react";
// // import { useParams } from "react-router-dom";
// // import { Avatar, AvatarFallback } from "@/components/ui/avatar";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";

// // export default function GroupDetails() {
// //   const { groupId } = useParams();
// //   const [group, setGroup] = useState(null);

// //   useEffect(() => {
// //     // Fetch group details based on groupId
// //     const fetchedGroup = {
// //       id: groupId,
// //       name: "Trip to Paris",
// //       members: ["Alice", "Bob"],
// //       currency: "EUR",
// //     };
// //     setGroup(fetchedGroup);
// //   }, [groupId]);

// //   if (!group) return <div>Loading...</div>;

// //   return (
// //     <div className="p-6 bg-gray-900 text-gray-100">
// //       <Card>
// //         <CardHeader>
// //           <CardTitle className="text-purple-300">{group.name}</CardTitle>
// //           <CardDescription className="text-gray-400">
// //             {group.members.join(", ")}
// //           </CardDescription>
// //         </CardHeader>
// //         <CardContent>
// //           <p>Currency: {group.currency}</p>
// //           {/* Display more details like expenses, members, etc. */}
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // }

// // import { useParams } from "react-router-dom";

// // export default function GroupDetails() {
// //   const { groupId } = useParams(); // Retrieve the groupId from the URL

// //   // Fetch group details based on groupId (this is just an example)
// //   const group = {
// //     1: { name: "Group 1", description: "Details of Group 1" },
// //     2: { name: "Group 2", description: "Details of Group 2" },
// //     3: { name: "Group 3", description: "Details of Group 3" },
// //   }[groupId]; // This should ideally be fetched from your backend

// //   return (
// //     <div>
// //       {group ? (
// //         <>
// //           <h2 className="text-2xl font-bold">{group.name}</h2>
// //           <p>{group.description}</p>
// //         </>
// //       ) : (
// //         <p>Group not found!</p>
// //       )}
// //     </div>
// //   );
// // }

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get groupId from the URL
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const categoryIcons = {
  food: "🍔",
  shopping: "🛍️",
  travel: "✈️",
  entertainment: "🎬",
  others: "❓",
};

export default function GroupDetailsPage() {
  const { groupId } = useParams(); // Get the group ID from URL
  const [group, setGroup] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    paidBy: "",
    description: "",
    amount: 0,
    category: "others",
  });

  useEffect(() => {
    // Fetch group data by ID (simulate with hardcoded data or replace with API call)
    const fetchedGroup = {
      id: groupId,
      name: `Group ${groupId}`,
      members: ["Alice", "Bob"],
      currency: "USD",
    };
    setGroup(fetchedGroup);
  }, [groupId]);

  const addExpense = () => {
    if (newExpense.paidBy && newExpense.description && newExpense.amount > 0) {
      const newExpenseData = {
        ...newExpense,
        id: expenses.length + 1,
        date: new Date(),
      };
      setExpenses([...expenses, newExpenseData]);
      setNewExpense({
        paidBy: "",
        description: "",
        amount: 0,
        category: "others",
      });
    }
  };

  if (!group) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-purple-300">{group.name}</h2>

      <Card>
        <CardHeader>
          <CardTitle className="text-purple-300">Group Info</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>Currency: {group.currency}</div>
            <div>Members: {group.members.join(", ")}</div>
          </div>
        </CardContent>
      </Card>

      {/* Expenses List */}
      <div className="space-y-4">
        {expenses.map((expense) => (
          <Card key={expense.id} className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <div>{categoryIcons[expense.category]}</div>
              <div>
                <CardTitle className="text-lg text-purple-300">
                  {expense.paidBy}
                </CardTitle>
                <CardDescription className="text-sm text-gray-400">
                  {expense.date.toLocaleDateString()}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{expense.description}</p>
              <p className="text-lg font-semibold text-pink-500 mt-2">
                {group.currency} {expense.amount.toFixed(2)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add New Expense Form */}
      <div className="space-y-4">
        <Input
          placeholder="Who paid?"
          value={newExpense.paidBy}
          onChange={(e) =>
            setNewExpense({ ...newExpense, paidBy: e.target.value })
          }
          className="bg-gray-700 border-gray-600 text-gray-100"
        />
        <Input
          placeholder="Description"
          value={newExpense.description}
          onChange={(e) =>
            setNewExpense({ ...newExpense, description: e.target.value })
          }
          className="bg-gray-700 border-gray-600 text-gray-100"
        />
        <Input
          type="number"
          placeholder="Amount"
          value={newExpense.amount || ""}
          onChange={(e) =>
            setNewExpense({ ...newExpense, amount: parseFloat(e.target.value) })
          }
          className="bg-gray-700 border-gray-600 text-gray-100"
        />
        <select
          value={newExpense.category}
          onChange={(e) =>
            setNewExpense({ ...newExpense, category: e.target.value })
          }
          className="bg-gray-700 border-gray-600 text-gray-100"
        >
          <option value="food">Food</option>
          <option value="shopping">Shopping</option>
          <option value="travel">Travel</option>
          <option value="entertainment">Entertainment</option>
          <option value="others">Others</option>
        </select>
        <Button onClick={addExpense}>Add Expense</Button>
      </div>
    </div>
  );
}
