/* eslint-disable react/prop-types */
import React from "react";

function GroupExpenses({ expenses }) {
  const groupedExpenses = expenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = {};
    }
    if (!acc[expense.category][expense.subCategory]) {
      acc[expense.category][expense.subCategory] = [];
    }
    acc[expense.category][expense.subCategory].push(expense);
    return acc;
  }, {});

  return (
    <div
      style={{
        backgroundColor: "#1F2937",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <h3
        style={{
          fontSize: "1.125rem",
          fontWeight: "600",
          color: "#E5E7EB",
          marginBottom: "8px",
        }}
      >
        Group Expenses
      </h3>
      <div style={{ height: "calc(100vh - 20rem)", overflowY: "auto" }}>
        {Object.entries(groupedExpenses).map(([category, subCategories]) => (
          <div key={category} style={{ marginBottom: "24px" }}>
            <h4
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                color: "#D1D5DB",
                marginBottom: "8px",
              }}
            >
              {category}
            </h4>
            {Object.entries(subCategories).map(([subCategory, subExpenses]) => (
              <div key={subCategory} style={{ marginBottom: "16px" }}>
                <h5
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "#9CA3AF",
                    marginBottom: "8px",
                  }}
                >
                  {subCategory}
                </h5>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginBottom: "8px",
                  }}
                >
                  <thead>
                    <tr>
                      <th
                        style={{
                          textAlign: "left",
                          color: "#9CA3AF",
                          padding: "8px",
                        }}
                      >
                        Description
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                          color: "#9CA3AF",
                          padding: "8px",
                        }}
                      >
                        Amount
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                          color: "#9CA3AF",
                          padding: "8px",
                        }}
                      >
                        Paid By
                      </th>
                      <th
                        style={{
                          textAlign: "left",
                          color: "#9CA3AF",
                          padding: "8px",
                        }}
                      >
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {subExpenses.map((expense) => (
                      <tr key={expense.id}>
                        <td style={{ color: "#D1D5DB", padding: "8px" }}>
                          {expense.description}
                        </td>
                        <td style={{ color: "#D1D5DB", padding: "8px" }}>
                          ${expense.amount.toFixed(2)}
                        </td>
                        <td style={{ color: "#D1D5DB", padding: "8px" }}>
                          {expense.paidBy}
                        </td>
                        <td style={{ color: "#D1D5DB", padding: "8px" }}>
                          {expense.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupExpenses;
