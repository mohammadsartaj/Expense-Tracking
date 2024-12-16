// import React, { useState } from "react";
// import { PlusCircle, X } from "lucide-react";
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

// export default function GroupsRoute() {
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
//   const [newMember, setNewMember] = useState("");

//   const addMember = () => {
//     setMembers([...members, ""]);
//   };

//   const removeMember = (index) => {
//     const newMembers = members.filter((_, i) => i !== index);
//     setMembers(newMembers);
//   };

//   const updateMember = (index, value) => {
//     const newMembers = [...members];
//     newMembers[index] = value;
//     setMembers(newMembers);
//   };

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

//   const selectGroup = (group) => {
//     // In a React Router setup, you'd use navigation here
//     console.log("Selected group:", group);
//   };

//   return (
//     <div className="flex h-full">
//       {/* Left side: Group list */}
//       <div className="w-1/3 pr-6 border-r border-gray-700 overflow-y-auto">
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

//       {/* Right side: Create Group form */}
//       <div className="w-2/3 pl-6">
//         <div>
//           <h2 className="text-2xl font-bold mb-4 text-purple-300">
//             Create New Group
//           </h2>
//           <Card className="bg-gray-800 border-gray-700">
//             <CardContent className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="groupName"
//                   className="block text-sm font-medium text-gray-400 mb-1"
//                 >
//                   Group Name
//                 </label>
//                 <Input
//                   id="groupName"
//                   value={groupName}
//                   onChange={(e) => setGroupName(e.target.value)}
//                   className="bg-gray-700 border-gray-600 text-gray-100"
//                   placeholder="Enter group name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-400 mb-1">
//                   Members
//                 </label>
//                 {members.map((member, index) => (
//                   <div key={index} className="flex items-center space-x-2 mb-2">
//                     <Input
//                       value={member}
//                       onChange={(e) => updateMember(index, e.target.value)}
//                       className="bg-gray-700 border-gray-600 text-gray-100"
//                       placeholder="Enter member name"
//                     />
//                     {index > 0 && (
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         onClick={() => removeMember(index)}
//                         className="text-gray-400 hover:text-gray-100"
//                       >
//                         <X className="h-4 w-4" />
//                       </Button>
//                     )}
//                   </div>
//                 ))}
//                 <Button
//                   variant="outline"
//                   onClick={addMember}
//                   className="mt-2 text-purple-300 border-purple-300 hover:bg-purple-300 hover:text-gray-900"
//                 >
//                   <PlusCircle className="mr-2 h-4 w-4" /> Add Member
//                 </Button>
//               </div>
//               <div>
//                 <label
//                   htmlFor="currency"
//                   className="block text-sm font-medium text-gray-400 mb-1"
//                 >
//                   Currency
//                 </label>
//                 <Select onValueChange={setCurrency}>
//                   <SelectTrigger className="bg-gray-700 border-gray-600 text-gray-100">
//                     <SelectValue placeholder="Select currency" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-gray-800 border-gray-700">
//                     <SelectItem value="USD">USD - US Dollar</SelectItem>
//                     <SelectItem value="EUR">EUR - Euro</SelectItem>
//                     <SelectItem value="GBP">GBP - British Pound</SelectItem>
//                     <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <p className="text-sm text-gray-400 mt-1">
//                   Selected currency will be used for all expenses in this group.
//                 </p>
//               </div>
//               <Button
//                 onClick={createGroup}
//                 className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
//               >
//                 Create Group
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }

// // File: HisaabKitab\client\src\Pages\Group\GroupRoute.jsx
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { PlusCircle, X } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";

// // export default function GroupRoute() {
// //   const navigate = useNavigate(); // Using useNavigate hook
// //   const [groups, setGroups] = useState([
// //     {
// //       id: 1,
// //       name: "Trip to Paris",
// //       members: ["Alice", "Bob"],
// //       currency: "EUR",
// //     },
// //     {
// //       id: 2,
// //       name: "Office Lunch",
// //       members: ["Charlie", "David", "Eve"],
// //       currency: "USD",
// //     },
// //   ]);
// //   const [groupName, setGroupName] = useState("");
// //   const [members, setMembers] = useState([""]);
// //   const [currency, setCurrency] = useState("");

// //   const addMember = () => {
// //     setMembers([...members, ""]);
// //   };

// //   const removeMember = (index) => {
// //     const newMembers = members.filter((_, i) => i !== index);
// //     setMembers(newMembers);
// //   };

// //   const updateMember = (index, value) => {
// //     const newMembers = [...members];
// //     newMembers[index] = value;
// //     setMembers(newMembers);
// //   };

// //   const createGroup = () => {
// //     if (groupName && members.length > 0 && currency) {
// //       const newGroup = {
// //         id: groups.length + 1,
// //         name: groupName,
// //         members: members.filter((member) => member.trim() !== ""),
// //         currency,
// //       };
// //       setGroups([...groups, newGroup]);
// //       setGroupName("");
// //       setMembers([""]);
// //       setCurrency("");
// //     }
// //   };

// //   const selectGroup = (group) => {
// //     // Navigate to the group details page when a group is clicked
// //     navigate(`/group/${group.id}`);
// //   };

// //   return (
// //     <div className="flex h-full">
// //       {/* Left side: Group list */}
// //       <div className="w-1/3 pr-6 border-r border-gray-700 overflow-y-auto">
// //         <h2 className="text-2xl font-bold mb-4 text-purple-300">Your Groups</h2>
// //         <div className="space-y-4">
// //           {groups.map((group) => (
// //             <Card
// //               key={group.id}
// //               className="bg-gray-800 border-gray-700 cursor-pointer"
// //               onClick={() => selectGroup(group)} // Trigger group details page navigation
// //             >
// //               <CardHeader>
// //                 <CardTitle className="text-purple-300">{group.name}</CardTitle>
// //                 <CardDescription className="text-gray-400">
// //                   {group.members.join(", ")}
// //                 </CardDescription>
// //               </CardHeader>
// //               <CardContent>
// //                 <p className="text-pink-500">Currency: {group.currency}</p>
// //               </CardContent>
// //             </Card>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Right side: Create Group form */}
// //       <div className="w-2/3 pl-6">
// //         <div>
// //           <h2 className="text-2xl font-bold mb-4 text-purple-300">
// //             Create New Group
// //           </h2>
// //           <Card className="bg-gray-800 border-gray-700">
// //             <CardContent className="space-y-4">
// //               <div>
// //                 <label
// //                   htmlFor="groupName"
// //                   className="block text-sm font-medium text-gray-400 mb-1"
// //                 >
// //                   Group Name
// //                 </label>
// //                 <Input
// //                   id="groupName"
// //                   value={groupName}
// //                   onChange={(e) => setGroupName(e.target.value)}
// //                   className="bg-gray-700 border-gray-600 text-gray-100"
// //                   placeholder="Enter group name"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="block text-sm font-medium text-gray-400 mb-1">
// //                   Members
// //                 </label>
// //                 {members.map((member, index) => (
// //                   <div key={index} className="flex items-center space-x-2 mb-2">
// //                     <Input
// //                       value={member}
// //                       onChange={(e) => updateMember(index, e.target.value)}
// //                       className="bg-gray-700 border-gray-600 text-gray-100"
// //                       placeholder="Enter member name"
// //                     />
// //                     {index > 0 && (
// //                       <Button
// //                         variant="ghost"
// //                         size="icon"
// //                         onClick={() => removeMember(index)}
// //                         className="text-gray-400 hover:text-gray-100"
// //                       >
// //                         <X className="h-4 w-4" />
// //                       </Button>
// //                     )}
// //                   </div>
// //                 ))}
// //                 <Button
// //                   variant="outline"
// //                   onClick={addMember}
// //                   className="mt-2 text-purple-300 border-purple-300 hover:bg-purple-300 hover:text-gray-900"
// //                 >
// //                   <PlusCircle className="mr-2 h-4 w-4" /> Add Member
// //                 </Button>
// //               </div>
// //               <div>
// //                 <label
// //                   htmlFor="currency"
// //                   className="block text-sm font-medium text-gray-400 mb-1"
// //                 >
// //                   Currency
// //                 </label>
// //                 <Select onValueChange={setCurrency}>
// //                   <SelectTrigger className="bg-gray-700 border-gray-600 text-gray-100">
// //                     <SelectValue placeholder="Select currency" />
// //                   </SelectTrigger>
// //                   <SelectContent className="bg-gray-800 border-gray-700">
// //                     <SelectItem value="USD">USD - US Dollar</SelectItem>
// //                     <SelectItem value="EUR">EUR - Euro</SelectItem>
// //                     <SelectItem value="GBP">GBP - British Pound</SelectItem>
// //                     <SelectItem value="JPY">JPY - Japanese Yen</SelectItem>
// //                   </SelectContent>
// //                 </Select>
// //                 <p className="text-sm text-gray-400 mt-1">
// //                   Selected currency will be used for all expenses in this group.
// //                 </p>
// //               </div>
// //               <Button
// //                 onClick={createGroup}
// //                 className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
// //               >
// //                 Create Group
// //               </Button>
// //             </CardContent>
// //           </Card>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // import { Link } from "react-router-dom";

// // export default function GroupRoute() {
// //   // Sample group list (this should come from your backend or state)
// //   const groups = [
// //     { id: 1, name: "Group 1" },
// //     { id: 2, name: "Group 2" },
// //     { id: 3, name: "Group 3" },
// //   ];

// //   return (
// //     <div>
// //       <h2 className="text-2xl font-bold mb-4">Groups</h2>
// //       <ul>
// //         {groups.map((group) => (
// //           <li key={group.id} className="mb-2">
// //             <Link
// //               to={`/group/${group.id}`} // Link to the dynamic group details page
// //               className="text-blue-500 hover:underline"
// //             >
// //               {group.name}
// //             </Link>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

import React, { useState } from "react";
import { Link } from "react-router-dom"; // For navigation
import { Button } from "@/components/ui/button";
// import { Input } from "@components/ui/input";
import { Input } from "@/components/ui/input";
export default function GroupRoute() {
  const [groupList, setGroupList] = useState([]);
  const [newGroupName, setNewGroupName] = useState("");

  const createGroup = () => {
    if (newGroupName.trim() !== "") {
      const newGroup = {
        id: groupList.length + 1, // Unique ID based on the list length
        name: newGroupName,
        members: [],
        currency: "USD", // Default currency
      };
      setGroupList([...groupList, newGroup]);
      setNewGroupName(""); // Reset the input field after creating a group
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-purple-300">Groups</h2>

      {/* Group Creation Form */}
      <Input
        value={newGroupName}
        onChange={(e) => setNewGroupName(e.target.value)}
        placeholder="Enter new group name"
        className="bg-gray-700 border-gray-600 text-gray-100"
      />
      <Button onClick={createGroup} className="mt-2">
        Create Group
      </Button>

      {/* Group List */}
      <div className="mt-6 space-y-4">
        {groupList.map((group) => (
          <div
            key={group.id}
            className="flex justify-between items-center bg-gray-800 p-4 rounded-lg"
          >
            <span className="text-purple-300">{group.name}</span>
            <Link to={`/group-details/${group.id}`}>
              <Button variant="outline">View Details</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
