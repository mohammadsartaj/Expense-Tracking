import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const suggestions = [
  {
    domain: "Project Management",
    technology: "Asana",
    budget: "$200",
    suggestion: "Consider switching to Trello",
    currentSpending: "$250",
  },
  {
    domain: "CRM",
    technology: "Salesforce",
    budget: "$500",
    suggestion: "Optimize user licenses",
    currentSpending: "$600",
  },
  {
    domain: "Cloud Storage",
    technology: "Dropbox",
    budget: "$100",
    suggestion: "Upgrade to annual plan for 20% savings",
    currentSpending: "$120",
  },
  {
    domain: "Email Marketing",
    technology: "Mailchimp",
    budget: "$150",
    suggestion: "Review inactive subscribers",
    currentSpending: "$180",
  },
];

export default function SmartBudgetSuggestions() {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
      <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        Smart Budget Suggestions
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-300">Domain</TableHead>
            <TableHead className="text-gray-300">Technology</TableHead>
            <TableHead className="text-gray-300">Monthly Budget</TableHead>
            <TableHead className="text-gray-300">Suggestion</TableHead>
            <TableHead className="text-gray-300">Current Spending</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {suggestions.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-gray-300">
                {item.domain}
              </TableCell>
              <TableCell className="text-gray-300">{item.technology}</TableCell>
              <TableCell className="text-gray-300">{item.budget}</TableCell>
              <TableCell className="text-purple-400">
                {item.suggestion}
              </TableCell>
              <TableCell className="text-gray-300">
                {item.currentSpending}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
