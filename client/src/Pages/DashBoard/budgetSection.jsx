import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function BudgetSection() {
  return (
    <Card className="bg-gray-800">
      <CardHeader>
        <CardTitle>Budget</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span>Entertainment</span>
            <span>60%</span>
          </div>
          <Progress value={60} className="h-2 bg-gray-600 [&>div]:bg-white" />
          <div className="flex justify-between text-sm text-gray-400 mt-1">
            <span>Jun 1</span>
            <span>Jun 30</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span>Eating Out</span>
            <span>40%</span>
          </div>
          <div>
            <Progress value={40} className="h-2 bg-gray-600 [&>div]:bg-white" />
          </div>
          <div className="flex justify-between text-sm text-gray-400 mt-1">
            <span>Jun 1</span>
            <span>Jun 30</span>
          </div>
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <span>Fuel</span>
            <span>75%</span>
          </div>
          <Progress value={75} className="h-2 bg-gray-600 [&>div]:bg-white" />
          <div className="flex justify-between text-sm text-gray-400 mt-1">
            <span>Jun 1</span>
            <span>Jun 30</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
