/* eslint-disable react/prop-types */
import React, { useState } from "react";

const allGroups = [
  {
    id: "1",
    name: "Family Trip",
    lastMessage: "Dad: I added the hotel expense",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "admin",
  },
  {
    id: "2",
    name: "Roommates",
    lastMessage: "Alice: Rent is due next week",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "participant",
  },
  {
    id: "3",
    name: "Office Lunch",
    lastMessage: "Bob: I'll get the pizzas",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "admin",
  },
  {
    id: "4",
    name: "Book Club",
    lastMessage: "Eve: Next meeting on Friday",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "participant",
  },
];

export default function GroupList({ onSelectGroup, role }) {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const filteredGroups = allGroups.filter((group) => group.role === role);

  const handleGroupClick = (groupId) => {
    setSelectedGroup(groupId);
    onSelectGroup(groupId);
  };

  return (
    <div style={{ overflowY: "auto", height: "100%" }}>
      {filteredGroups.map((group) => (
        <div
          key={group.id}
          className={`flex items-center space-x-4 p-4 cursor-pointer ${
            selectedGroup === group.id ? "bg-gray-700" : ""
          }`}
          style={{
            backgroundColor:
              selectedGroup === group.id ? "#4B5563" : "transparent",
            hover: { backgroundColor: "#374151" },
          }}
          onClick={() => handleGroupClick(group.id)}
        >
          <div className="flex-shrink-0">
            <img
              src={group.avatar}
              alt={group.name}
              className="h-10 w-10 rounded-full"
              onError={(e) => (e.target.src = "placeholder.svg")} // Fallback for image
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-200 truncate">
              {group.name}
            </p>
            <p className="text-sm text-gray-400 truncate">
              {group.lastMessage}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
