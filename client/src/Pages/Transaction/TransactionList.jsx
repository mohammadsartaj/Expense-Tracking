// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
// import {
//   List as ListIcon,
//   Grid as GridIcon,
//   Download as DownloadIcon,
//   MoreVertical as MoreVerticalIcon,
// } from "lucide-react";
// import { getTransactions } from "../../service/transactionApi";

// export default function TransactionList({
//   currentDate,
//   onMonthChange,
//   filters = {}, // Provide a default empty object
// }) {
//   const [viewMode, setViewMode] = useState("list");
//   const [transactions, setTransactions] = useState([]); // Explicitly initialize as empty array
//   const [filteredTransactions, setFilteredTransactions] = useState([]);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const [localFilters, setLocalFilters] = useState(filters); // Manage filters locally

//   // Fetch transactions on mount
//   useEffect(() => {
//     const username = localStorage.getItem("username");
//     if (username) {
//       setIsLoading(true);
//       getTransactions(username)
//         .then((data) => {
//           // Ensure data is an array
//           const tempData = data;
//           const transactionData = Array.isArray(data.data) ? data : [];
//           // console.log(transactionData);
//           console.log("Fetched Transactions:", transactionData);
//           setTransactions(transactionData);
//           // console.log(transactionData);
//           setIsLoading(false);
//         })
//         .catch((err) => {
//           console.error("Error fetching transactions:", err);
//           setError("Failed to load transactions");
//           setTransactions([]); // Ensure transactions is an empty array on error
//           setIsLoading(false);
//         });
//     } else {
//       setError("Username not found in local storage");
//       setIsLoading(false);
//     }
//   }, []);

//   // Filter transactions whenever transactions or filters change
//   useEffect(() => {
//     // Ensure transactions is an array before filtering
//     if (!Array.isArray(transactions)) {
//       setFilteredTransactions([]);
//       return;
//     }

//     // If transactions is empty, set filtered transactions to empty
//     if (transactions.length === 0) {
//       setFilteredTransactions([]);
//       console.log(filteredTransactions);
//       return;
//     }

//     let result = transactions.filter((transaction) => {
//       // Ensure transaction is valid
//       if (!transaction || typeof transaction !== "object") return false;

//       const transactionDate = new Date(transaction.date);

//       // Month and Year Filter
//       const sameMonth =
//         transactionDate.getMonth() === currentDate.getMonth() &&
//         transactionDate.getFullYear() === currentDate.getFullYear();

//       // Category Filter
//       const categoryMatch =
//         !localFilters.category ||
//         (transaction.category &&
//           transaction.category
//             .toLowerCase()
//             .includes(localFilters.category.toLowerCase()));

//       // Date Range Filter
//       const dateFromMatch =
//         !localFilters.dateFrom || transactionDate >= localFilters.dateFrom;
//       const dateToMatch =
//         !localFilters.dateTo || transactionDate <= localFilters.dateTo;

//       // Transaction Type Filter (Income/Expense)
//       const typeMatch =
//         !localFilters.type || transaction.type === localFilters.type;

//       return (
//         sameMonth && categoryMatch && dateFromMatch && dateToMatch && typeMatch
//       );
//     });

//     // Sort transactions (most recent first)
//     result.sort((a, b) => new Date(b.date) - new Date(a.date));

//     setFilteredTransactions(result);
//     console.log(filteredTransactions);
//   }, [transactions, currentDate, localFilters]);

//   const handleDelete = (id) => {
//     setTransactions((prevTransactions) =>
//       prevTransactions.filter((transaction) => transaction.id !== id)
//     );
//   };

//   const handleDownload = () => {
//     const csvContent = generateCSV(filteredTransactions);
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const link = document.createElement("a");
//     const url = URL.createObjectURL(blob);
//     link.setAttribute("href", url);
//     link.setAttribute("download", "transactions.csv");
//     link.style.visibility = "hidden";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   // Helper function to generate CSV
//   const generateCSV = (data) => {
//     const headers = ["Date", "Category", "Type", "Amount"];
//     const csvRows = [
//       headers.join(","),
//       ...data.map((t) =>
//         [t.date, t.category, t.type, t.amount]
//           .map((val) => `"${val}"`)
//           .join(",")
//       ),
//     ];
//     return csvRows.join("\n");
//   };

//   // Calculate total income and expenses
//   const totalIncome = (filteredTransactions || [])
//     .filter((t) => t.type === "Income")
//     .reduce((sum, t) => sum + (t.amount || 0), 0);

//   const totalExpenses = (filteredTransactions || [])
//     .filter((t) => t.type === "Expense")
//     .reduce((sum, t) => sum + (t.amount || 0), 0);

//   // Loading state
//   if (isLoading) {
//     return <div className="text-center p-4">Loading transactions...</div>;
//   }

//   // Error state
//   if (error) {
//     return <div className="text-red-500 p-4">{error}</div>;
//   }

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setLocalFilters((prev) => ({
//       ...prev,
//       [name]: value || "",
//     }));
//   };

//   return (
//     <div className="flex space-x-4 p-4">
//       <div className="w-1/4 p-4 bg-gray-200 rounded-xl shadow-md">
//         <h3 className="font-semibold text-lg">Filter Transactions</h3>
//         <div className="space-y-4 mt-4">
//           <div>
//             <label className="block font-medium">Category</label>
//             <select
//               name="category"
//               value={localFilters.category || ""}
//               onChange={handleFilterChange}
//               className="w-full p-2 rounded-md bg-white border"
//             >
//               <option value="">All</option>
//               <option value="Food">Food</option>
//               <option value="Travel">Travel</option>
//               <option value="Entertainment">Entertainment</option>
//               <option value="Utilities">Utilities</option>
//             </select>
//           </div>
//           <div>
//             <label className="block font-medium">Date From</label>
//             <input
//               type="date"
//               name="dateFrom"
//               value={localFilters.dateFrom || ""}
//               onChange={handleFilterChange}
//               className="w-full p-2 rounded-md bg-white border"
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Date To</label>
//             <input
//               type="date"
//               name="dateTo"
//               value={localFilters.dateTo || ""}
//               onChange={handleFilterChange}
//               className="w-full p-2 rounded-md bg-white border"
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Type</label>
//             <select
//               name="type"
//               value={localFilters.type || ""}
//               onChange={handleFilterChange}
//               className="w-full p-2 rounded-md bg-white border"
//             >
//               <option value="">All</option>
//               <option value="Income">Income</option>
//               <option value="Expense">Expense</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       <div className="flex-1 overflow-auto">
//         <div className="flex justify-between items-center mb-4">
//           <div className="flex items-center space-x-4">
//             <span className="text-lg font-semibold text-green-600">
//               Total Income: ₹{totalIncome.toFixed(2)}
//             </span>
//             <span className="text-lg font-semibold text-red-600">
//               Total Expenses: ₹{totalExpenses.toFixed(2)}
//             </span>
//             <div className="flex space-x-2">
//               <button
//                 onClick={() => setViewMode("list")}
//                 className={`p-2 rounded-md ${
//                   viewMode === "list" ? "bg-gray-200" : "hover:bg-gray-100"
//                 }`}
//                 aria-label="List view"
//               >
//                 <ListIcon className="h-5 w-5 text-gray-600" />
//               </button>
//               <button
//                 onClick={() => setViewMode("grid")}
//                 className={`p-2 rounded-md ${
//                   viewMode === "grid" ? "bg-gray-200" : "hover:bg-gray-300"
//                 }`}
//                 aria-label="Grid view"
//               >
//                 <GridIcon className="h-5 w-5 text-gray-600" />
//               </button>
//               <button
//                 onClick={handleDownload}
//                 className="inline-flex items-center p-2 rounded-md hover:bg-gray-100"
//                 aria-label="Download report"
//               >
//                 <DownloadIcon className="h-5 w-5 text-gray-600 mr-1" />
//                 <span className="text-sm text-gray-600">Download</span>
//               </button>
//             </div>
//           </div>
//         </div>
//         {viewMode === "list" ? (
//           <div className="space-y-4">
//             {filteredTransactions.length === 0 ? (
//               <div>No transactions found for this filter</div>
//             ) : (
//               filteredTransactions.map((transaction) => (
//                 <div
//                   key={transaction.id}
//                   className="p-4 bg-white rounded-xl shadow-md flex justify-between items-center"
//                 >
//                   <div>
//                     <div className="text-sm font-medium text-gray-700">
//                       {new Date(transaction.date).toLocaleDateString()}
//                     </div>
//                     <div className="text-lg font-semibold text-gray-900">
//                       {transaction.category} - ₹{transaction.amount}
//                     </div>
//                     <div className="text-sm text-gray-500">
//                       {transaction.type}
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => handleDelete(transaction.id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <MoreVerticalIcon className="h-5 w-5" />
//                   </button>
//                 </div>
//               ))
//             )}
//           </div>
//         ) : (
//           <div className="grid grid-cols-2 gap-4">
//             {filteredTransactions.map((transaction) => (
//               <div
//                 key={transaction.id}
//                 className="p-4 bg-white rounded-xl shadow-md"
//               >
//                 <div className="text-sm font-medium text-gray-700">
//                   {new Date(transaction.date).toLocaleDateString()}
//                 </div>
//                 <div className="text-lg font-semibold text-gray-900">
//                   {transaction.category} - ₹{transaction.amount}
//                 </div>
//                 <div className="text-sm text-gray-500">{transaction.type}</div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  List as ListIcon,
  Grid as GridIcon,
  MoreVertical as MoreVerticalIcon,
  CookingPot as DollarSignIcon,
  ShoppingCart as ShoppingCartIcon,
  Film as FilmIcon,
  PlaneIcon as AirplaneIcon,
} from "lucide-react";
import { getTransactions } from "../../service/transactionApi";

export default function TransactionList({
  currentDate,
  onMonthChange,
  filters = {},
}) {
  const [viewMode, setViewMode] = useState("list");
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [localFilters, setLocalFilters] = useState(filters);

  const fetchTransactions = () => {
    const username = localStorage.getItem("username");
    if (!username) {
      setError("Username not found in local storage");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    let query = { username };

    if (localFilters.category && localFilters.category !== "all") {
      query.category = localFilters.category;
    }
    if (localFilters.dateFrom) {
      query.dateFrom = localFilters.dateFrom;
    }
    if (localFilters.dateTo) {
      query.dateTo = localFilters.dateTo;
    }
    if (localFilters.type && localFilters.type !== "all") {
      query.type = localFilters.type;
    }

    getTransactions(query)
      .then((data) => {
        const transactionData = Object.values(data.data);
        setTransactions(transactionData);
        setIsLoading(false);
      })
      .catch((err) => {
        setTransactions([]);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchTransactions();
  }, [localFilters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({ ...prev, [name]: value || "" }));
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Food":
        return <DollarSignIcon className="h-6 w-6 text-green-600" />;
      case "Travel":
        return <AirplaneIcon className="h-6 w-6 text-blue-600" />;
      case "Entertainment":
        return <FilmIcon className="h-6 w-6 text-purple-600" />;
      case "Utilities":
        return <ShoppingCartIcon className="h-6 w-6 text-orange-600" />;
      default:
        return <MoreVerticalIcon className="h-6 w-6 text-gray-400" />;
    }
  };

  const clearFilters = () => {
    setLocalFilters({
      category: "all",
      dateFrom: "",
      dateTo: "",
      type: "all",
    });
  };

  // Loading state
  if (isLoading) {
    return <div className="text-center p-4">Loading transactions...</div>;
  }

  // Error state
  if (error) {
    return <div className="text-red-500 p-4">{error}</div>;
  }

  return (
    <div className="flex space-x-4 p-4">
      {/* Filters Panel */}
      <div className="w-1/4 p-4 bg-gray-600 rounded-xl shadow-md">
        <h3 className="font-semibold text-lg">Filter Transactions</h3>
        <div className="space-y-4 mt-4">
          <div>
            <label className="block font-medium">Category</label>
            <select
              name="category"
              value={localFilters.category || ""}
              onChange={handleFilterChange}
              className="w-full p-2 rounded-md bg-white border"
            >
              <option value="all">All</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Utilities">Utilities</option>
            </select>
          </div>
          <div>
            <label className="block font-medium">Date From</label>
            <input
              type="date"
              name="dateFrom"
              value={localFilters.dateFrom || ""}
              onChange={handleFilterChange}
              className="w-full p-2 rounded-md bg-gray-400 border"
            />
          </div>
          <div>
            <label className="block font-medium">Date To</label>
            <input
              type="date"
              name="dateTo"
              value={localFilters.dateTo || ""}
              onChange={handleFilterChange}
              className="w-full p-2 rounded-md bg-gray-400 border"
            />
          </div>
          <div>
            <label className="block font-medium">Type</label>
            <select
              name="type"
              value={localFilters.type || ""}
              onChange={handleFilterChange}
              className="w-full p-2 rounded-md bg-white border"
            >
              <option value="all">All</option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>
          <button
            onClick={clearFilters}
            className="w-full p-2 mt-4 text-white bg-red-600 rounded-md"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Transactions List */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-semibold text-gray-800">
            Transactions
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md ${
                viewMode === "list" ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
              aria-label="List view"
            >
              <ListIcon className="h-5 w-5 text-gray-600" />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md ${
                viewMode === "grid" ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
              aria-label="Grid view"
            >
              <GridIcon className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Render List or Grid */}
        {viewMode === "list" ? (
          <div className="space-y-4">
            {transactions.length === 0 ? (
              <div>No transactions found for this filter</div>
            ) : (
              transactions.map((transaction) => (
                <div
                  key={transaction._id}
                  className="p-4 bg-white rounded-xl shadow-md flex items-center space-x-4"
                >
                  <div>{getCategoryIcon(transaction.category)}</div>
                  <div className="text-md font-semibold text-gray-900">
                    {transaction.category}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-700">
                      Date:
                      {transaction.date
                        ? new Date(transaction.date).toLocaleDateString()
                        : "Invalid Date"}{" "}
                      {`Time: ${formatTime(transaction.time)}`}
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {transaction.description}
                    </div>
                    <div className="text-sm text-gray-500">
                      {transaction.notes}
                    </div>
                  </div>
                  <div className="ml-auto">
                    <div className="font-semibold">
                      {formatAmount(transaction.type, transaction.amount)}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {transactions.map((transaction) => (
              <div
                key={transaction._id}
                className="p-4 bg-white rounded-xl shadow-md"
              >
                {getCategoryIcon(transaction.category)}
                <div className="text-lg font-semibold text-gray-800">
                  {transaction.category}
                </div>
                <div className="text-sm font-medium text-gray-700">
                  {transaction.date
                    ? new Date(transaction.date).toLocaleDateString()
                    : "Invalid Date"}{" "}
                  {formatTime(transaction.time)}
                </div>
                <div className="text-md font-semibold text-gray-900">
                  {transaction.description}
                </div>
                <div className="text-sm text-gray-500">{transaction.notes}</div>
                <div>{formatAmount(transaction.type, transaction.amount)}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const formatAmount = (type, amount) => {
  return (
    <span
      className={`font-semibold ${
        type === "Expense" ? "text-red-500" : "text-green-500"
      }`}
    >
      {type === "Expense" ? "-" : "+"} ₹ {amount}
    </span>
  );
};

const formatTime = (time) => {
  if (!time) return "Invalid Time"; // In case there's no time
  const [hours, minutes] = time.split(":");
  return `${hours}:${minutes}`;
};
