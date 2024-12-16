"use client";

import React, { useState } from "react";
import { GroupList } from "./GroupList";
import { GroupDetails } from "./GroupDetails";
import { CreateGroupModal } from "./CreatGroupModal";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const initialGroups = [
  {
    id: 1,
    name: "Roommates",
    balance: 150.5,
    expenses: [
      {
        id: 1,
        description: "Groceries",
        amount: 50,
        category: "Food",
        paidBy: "Alice",
      },
      {
        id: 2,
        description: "Utilities",
        amount: 100,
        category: "Bills",
        paidBy: "Bob",
      },
      {
        id: 3,
        description: "Netflix",
        amount: 15,
        category: "Entertainment",
        paidBy: "Charlie",
      },
    ],
    members: [
      { name: "Alice", paid: 50, owed: 55 },
      { name: "Bob", paid: 100, owed: 55 },
      { name: "Charlie", paid: 15, owed: 55 },
    ],
  },
  {
    id: 2,
    name: "Trip to Paris",
    balance: -75.2,
    expenses: [
      {
        id: 1,
        description: "Flights",
        amount: 500,
        category: "Travel",
        paidBy: "David",
      },
      {
        id: 2,
        description: "Hotel",
        amount: 600,
        category: "Accommodation",
        paidBy: "Eve",
      },
      {
        id: 3,
        description: "Dinner",
        amount: 100,
        category: "Food",
        paidBy: "Frank",
      },
    ],
    members: [
      { name: "David", paid: 500, owed: 400 },
      { name: "Eve", paid: 600, owed: 400 },
      { name: "Frank", paid: 100, owed: 400 },
    ],
  },
];

export default function GroupPage() {
  const [groups, setGroups] = useState(initialGroups);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleAddGroup = (newGroup) => {
    const groupWithId = {
      ...newGroup,
      id: groups.length + 1,
      balance: 0,
      expenses: [],
      members: newGroup.members.map((member) => ({
        name: member.name,
        paid: 0,
        owed: 0,
      })),
    };
    setGroups([...groups, groupWithId]);
  };

  return (
    <div className="container mx-auto p-4 space-y-8 bg-gray-600 rounded-3xl">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        Daily Expenses Sharing
      </h1>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Your Groups</h2>
        <Button
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-gradient-to-r from-teal-400 to-indigo-500 hover:from-teal-500 hover:to-indigo-600 text-white"
        >
          <Plus className="mr-2 h-4 w-4" /> Create Group
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <GroupList groups={groups} onSelectGroup={setSelectedGroup} />
        </div>
        <div className="md:col-span-2">
          {selectedGroup ? (
            <GroupDetails group={selectedGroup} />
          ) : (
            <div className="text-center text-gray-500">
              Select a group to view details
            </div>
          )}
        </div>
      </div>
      <CreateGroupModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onAddGroup={handleAddGroup}
      />
    </div>
  );
}
