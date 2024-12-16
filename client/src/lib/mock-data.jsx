export const mockData = {
  summary: {
    totalExpenses: 1250.75,
    contributions: 850.25,
    outstandingBalance: 400.5,
    expensesByCategory: [
      { name: "Food", value: 450 },
      { name: "Travel", value: 300 },
      { name: "Utilities", value: 200 },
      { name: "Entertainment", value: 300.75 },
    ],
  },
  individualExpenses: [
    {
      date: "2023-06-15",
      group: "Roommates",
      category: "Utilities",
      description: "Electricity Bill",
      amountPaid: 50,
      amountOwed: 25,
    },
    {
      date: "2023-06-14",
      group: "Friends",
      category: "Food",
      description: "Dinner at Restaurant",
      amountPaid: 80,
      amountOwed: 20,
    },
    {
      date: "2023-06-13",
      group: "Family",
      category: "Travel",
      description: "Gas for Road Trip",
      amountPaid: 40,
      amountOwed: 10,
    },
  ],
  groupExpenses: [
    {
      name: "Roommates",
      totalExpenses: 600,
      members: [
        { name: "You", contribution: 200, balance: -50 },
        { name: "Alice", contribution: 250, balance: 50 },
        { name: "Bob", contribution: 150, balance: 0 },
      ],
    },
    {
      name: "Friends",
      totalExpenses: 450,
      members: [
        { name: "You", contribution: 150, balance: 0 },
        { name: "Charlie", contribution: 200, balance: 50 },
        { name: "David", contribution: 100, balance: -50 },
      ],
    },
  ],
  transactionHistory: [
    {
      date: "2023-06-15",
      time: "14:30",
      description: "Electricity Bill",
      type: "Split",
      amount: 50,
    },
    {
      date: "2023-06-14",
      time: "20:15",
      description: "Dinner at Restaurant",
      type: "Exact",
      amount: 80,
    },
    {
      date: "2023-06-13",
      time: "10:00",
      description: "Gas for Road Trip",
      type: "Dynamic",
      amount: 40,
    },
  ],
  notifications: [
    { type: "payment", message: "You owe $25 for Electricity Bill" },
    { type: "reminder", message: "Upcoming rent payment on 2023-07-01" },
    { type: "update", message: "Charlie updated the dinner expense" },
  ],
};
