/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"; // Importing icons from lucid-react
import axios from "axios"; // Axios for API requests
import { getTotalBalance } from "../../service/transactionApi.js";

export default function Header({ currentDate, onMonthChange }) {
  const [totalBalance, setTotalBalance] = useState(0); // State for total balance
  const [username, setUsername] = useState(""); // State for username
  const [error, setError] = useState(""); // State for error handling

  // Format the current date to display the month and year
  const monthYear = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  // Fetch total balance from the database
  const fetchTotalBalance = async (user) => {
    try {
      const response = await getTotalBalance(user);
      console.log("API Response:", response.data); // Debug the API response
      // Ensure the response data is structured correctly
      if (response.data && response.data.totalBalance !== undefined) {
        setTotalBalance(response.data.totalBalance);
      } else {
        setError("Total balance not found");
        setTotalBalance(0); // Set to 0 if balance is not found
      }
    } catch (error) {
      console.error("Error fetching total balance:", error);
      setError("Error fetching total balance");
    }
  };

  // Retrieve username from local storage and fetch balance
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    console.log(storedUsername);
    if (storedUsername) {
      setUsername(storedUsername);
      fetchTotalBalance(storedUsername); // Fetch balance for the stored username
    } else {
      console.error("Username not found in local storage");
      setError("Username not found in local storage");
    }
  }, []);

  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* Navigation buttons and current date */}
      <div className="flex items-center space-x-4">
        {/* Previous month button */}
        <button
          onClick={() => onMonthChange("prev")}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
        </button>
        {/* Month and Year Display */}
        <h1 className="text-2xl font-bold">{monthYear}</h1>
        {/* Next month button */}
        <button
          onClick={() => onMonthChange("next")}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      {/* Displaying total balance */}
      <div className="text-2xl font-bold text-green-500">
        <span className="text-black">Total Balance: </span> ₹{" "}
        {error ? (
          <span className="text-red-500">{error}</span> // Display error if there is one
        ) : (
          totalBalance.toFixed(2)
        )}
      </div>
    </header>
  );
}
