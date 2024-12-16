import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const integrations = [
  { name: "HubSpot", description: "CRM platform", icon: "🚀" },
  { name: "Trello", description: "Collaboration tool", icon: "📋" },
  { name: "QuickBooks", description: "Accounting software", icon: "💼" },
];

export default function IntegrationsOverview() {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        Integrations Overview
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((integration, index) => (
          <Card key={index} className="bg-gray-700 border-gray-600">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">
                {integration.name}
              </CardTitle>
              <div className="text-2xl">{integration.icon}</div>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-gray-400">{integration.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
