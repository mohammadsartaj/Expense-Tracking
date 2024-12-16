/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function CreateGroupModal({ isOpen, onClose, onAddGroup }) {
  const [groupName, setGroupName] = useState("");
  const [members, setMembers] = useState([]);
  const [memberInput, setMemberInput] = useState("");

  const handleAddMember = () => {
    if (memberInput.trim()) {
      setMembers([
        ...members,
        {
          name: memberInput.trim(),
          avatar: `/placeholder.svg?height=32&width=32`,
        },
      ]);
      setMemberInput("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGroup = { name: groupName, members };
    onAddGroup(newGroup);
    setGroupName("");
    setMembers([]);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Group</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="groupName">Group Name</Label>
            <Input
              id="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter group name"
            />
          </div>
          <div>
            <Label htmlFor="addMember">Add Members</Label>
            <div className="flex space-x-2">
              <Input
                id="addMember"
                value={memberInput}
                onChange={(e) => setMemberInput(e.target.value)}
                placeholder="Enter member name"
              />
              <Button type="button" onClick={handleAddMember}>
                Add
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {members.map((member, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-secondary p-2 rounded-md"
              >
                <Avatar>
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <span>{member.name}</span>
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button type="submit">Create Group</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
