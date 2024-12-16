import { useState, useEffect } from "react";
import { Search, Settings, Bell, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const notifications = [
  {
    id: 1,
    message: "You have a due payment of $50 for electricity bill",
    type: "warning",
  },
  { id: 2, message: "New expense added in 'Project X' group", type: "info" },
  { id: 3, message: "Your monthly report is ready", type: "success" },
];

export default function Header() {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Retrieve username from localStorage
    const storedUsername = localStorage.getItem("username") || "Guest";
    setUsername(storedUsername);
  }, []);

  return (
    <header className="bg-gray-800 border-b border-gray-700 py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* Profile Avatar */}
          <div className="w-10 h-10 rounded-full mr-3 border-2 border-purple-500 flex items-center justify-center bg-gray-200">
            <User className="w-6 h-6 text-purple-500" />
          </div>
          {/* Username */}
          <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            {username}
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Input
              type="search"
              placeholder="Search 'Expense'"
              className="pl-10 pr-4 py-2 w-64 bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-purple-500 focus:border-purple-500"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
          </div>
          <Popover
            open={isNotificationsOpen}
            onOpenChange={setIsNotificationsOpen}
          >
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-white hover:text-gray-800 rounded-3xl"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 bg-gray-800 border-gray-700 p-0">
              <div className="p-4 border-b border-gray-700">
                <h3 className="font-semibold text-lg text-gray-200">
                  Notifications
                </h3>
              </div>
              <div className="divide-y divide-gray-700">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="p-4 hover:bg-gray-700 transition-colors"
                  >
                    <p className="text-sm text-gray-300">
                      {notification.message}
                    </p>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
