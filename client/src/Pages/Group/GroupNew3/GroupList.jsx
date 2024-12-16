/* eslint-disable react/prop-types */
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Trash2 } from "lucide-react";

export function GroupList({ groups, onSelectGroup }) {
  return (
    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4">
      {groups.map((group) => (
        <Card
          key={group.id}
          className="group hover:shadow-lg transition-shadow duration-300"
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{group.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p
              className={`font-semibold ${
                group.balance >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              Balance: ${group.balance.toFixed(2)}
            </p>
            <div className="mt-4 flex justify-between">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onSelectGroup(group)}
                className="bg-gradient-to-r from-teal-400 to-indigo-500 hover:from-teal-500 hover:to-indigo-600 rounded-3xl"
              >
                <Eye className="mr-2 h-4 w-4" /> View Details
              </Button>
              <Button
                variant="destructive"
                size="sm"
                className="bg-gradient-to-r from-red-400 to-red-700 hover:from-red-500 hover:to-red-600 rounded-3xl"
              >
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
