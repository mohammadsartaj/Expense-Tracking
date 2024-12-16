/* eslint-disable react/prop-types */
import React, { useMemo } from "react";

function ExpenseList({ expenses }) {
  const groupedExpenses = useMemo(() => {
    return expenses.reduce((acc, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = {};
      }
      if (!acc[expense.category][expense.subCategory]) {
        acc[expense.category][expense.subCategory] = [];
      }
      acc[expense.category][expense.subCategory].push(expense);
      return acc;
    }, {});
  }, [expenses]);

  return (
    <div
      style={{
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {Object.entries(groupedExpenses).map(([category, subCategories]) => (
        <div
          key={category}
          style={{
            backgroundColor: "#2D3748",
            border: "1px solid #4A5568",
            borderRadius: "8px",
            padding: "16px",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "white",
              marginBottom: "16px",
            }}
          >
            {category}
          </h3>
          {Object.entries(subCategories).map(([subCategory, expenses]) => (
            <div key={subCategory} style={{ marginBottom: "16px" }}>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#CBD5E0",
                  marginBottom: "8px",
                }}
              >
                {subCategory}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {expenses.map((expense) => (
                  <li
                    key={expense.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "14px",
                      color: "#A0AEC0",
                      borderBottom: "1px solid #4A5568",
                      paddingBottom: "4px",
                      marginBottom: "4px",
                    }}
                  >
                    <span>
                      {expense.description} (by {expense.paidBy})
                    </span>
                    <span>${expense.amount.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
