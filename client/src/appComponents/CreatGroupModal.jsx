import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

// eslint-disable-next-line react/prop-types
export default function CreateGroupModal({ isOpen, onClose }) {
  const [groupName, setGroupName] = useState("");
  const [members, setMembers] = useState([""]);

  const handleAddMember = () => {
    setMembers([...members, ""]);
  };

  const handleRemoveMember = (index) => {
    const newMembers = members.filter((_, i) => i !== index);
    setMembers(newMembers);
  };

  const handleMemberChange = (index, value) => {
    const newMembers = [...members];
    newMembers[index] = value;
    setMembers(newMembers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("New group:", {
      name: groupName,
      members: members.filter((m) => m !== ""),
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-800 text-white border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Create New Group
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Create a new expense group and add members.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="groupName" className="text-gray-300">
              Group Name
            </Label>
            <Input
              id="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white"
              placeholder="Enter group name"
            />
          </div>
          <div>
            <Label className="text-gray-300">Members</Label>
            {members.map((member, index) => (
              <div key={index} className="flex items-center mt-2">
                <Input
                  value={member}
                  onChange={(e) => handleMemberChange(index, e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white mr-2"
                  placeholder="Enter member name or email"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveMember(index)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={handleAddMember}
              className="mt-2 bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-600"
            >
              Add Member
            </Button>
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
          >
            Create Group
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
