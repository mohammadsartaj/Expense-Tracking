/* eslint-disable react/prop-types */
import React, { useState } from "react";

function GroupChat({ groupId, role }) {
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [newMember, setNewMember] = useState("");
  const [members, setMembers] = useState([
    { id: "1", name: "Alice", avatar: "/placeholder.svg" },
    { id: "2", name: "Bob", avatar: "/placeholder.svg" },
    { id: "3", name: "Charlie", avatar: "/placeholder.svg" },
  ]);
  const [showMembersDialog, setShowMembersDialog] = useState(false);
  const [showAddMemberDialog, setShowAddMemberDialog] = useState(false);

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setShowAddExpense(false);
  };

  const handleAddMember = () => {
    if (newMember) {
      setMembers([
        ...members,
        {
          id: Date.now().toString(),
          name: newMember,
          avatar: "/placeholder.svg",
        },
      ]);
      setNewMember("");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        style={{
          padding: "16px",
          backgroundColor: "#4A5568",
          color: "white",
          fontWeight: "600",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>Group Chat {groupId}</span>
        <div style={{ display: "flex", gap: "8px" }}>
          {/* Members Dialog Trigger */}
          <button
            onClick={() => setShowMembersDialog(true)}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: "16px", color: "white" }}>👥</span>
          </button>
          {role === "admin" && (
            <button
              onClick={() => setShowAddMemberDialog(true)}
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "16px", color: "white" }}>➕</span>
            </button>
          )}
        </div>
      </div>

      {/* Members Dialog */}
      {showMembersDialog && (
        <div
          style={{
            position: "fixed",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "16px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            width: "300px",
          }}
        >
          <h3
            style={{ marginBottom: "8px", fontSize: "18px", fontWeight: "600" }}
          >
            Group Members
          </h3>
          {members.map((member) => (
            <div
              key={member.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
                gap: "8px",
              }}
            >
              <img
                src={member.avatar}
                alt={member.name}
                style={{ width: "32px", height: "32px", borderRadius: "50%" }}
              />
              <span>{member.name}</span>
            </div>
          ))}
          <button
            onClick={() => setShowMembersDialog(false)}
            style={{
              marginTop: "8px",
              padding: "8px",
              backgroundColor: "#4A5568",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            Close
          </button>
        </div>
      )}

      {/* Add Member Dialog */}
      {showAddMemberDialog && (
        <div
          style={{
            position: "fixed",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "16px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            width: "300px",
          }}
        >
          <h3
            style={{ marginBottom: "8px", fontSize: "18px", fontWeight: "600" }}
          >
            Add Member
          </h3>
          <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
            <input
              type="text"
              placeholder="Enter username"
              value={newMember}
              onChange={(e) => setNewMember(e.target.value)}
              style={{
                flex: "1",
                padding: "8px",
                border: "1px solid #CBD5E0",
                borderRadius: "4px",
              }}
            />
            <button
              onClick={handleAddMember}
              style={{
                padding: "8px",
                backgroundColor: "#4A5568",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              Add
            </button>
          </div>
          <button
            onClick={() => setShowAddMemberDialog(false)}
            style={{
              marginTop: "8px",
              padding: "8px",
              backgroundColor: "#4A5568",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            Close
          </button>
        </div>
      )}

      <div style={{ flex: "1", overflowY: "auto", padding: "16px" }}>
        {/* Replace this with your ExpenseList component */}
        <ul>
          {expenses.map((expense, index) => (
            <li key={index} style={{ color: "white" }}>
              {expense.description} - ${expense.amount}
            </li>
          ))}
        </ul>
      </div>

      {/* Replace this with your ExpenseSummary component */}
      <div
        style={{ padding: "16px", backgroundColor: "#4A5568", color: "white" }}
      >
        <span>
          Total Expenses: $
          {expenses.reduce((sum, expense) => sum + expense.amount, 0)}
        </span>
      </div>

      {showAddExpense ? (
        <div style={{ padding: "16px", display: "flex", gap: "8px" }}>
          {/* Replace this with your AddExpense component */}
          <button
            onClick={() =>
              handleAddExpense({ description: "Test", amount: 10 })
            }
            style={{
              flex: "1",
              padding: "8px",
              backgroundColor: "#6B46C1",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            Save Expense
          </button>
          <button
            onClick={() => setShowAddExpense(false)}
            style={{
              padding: "8px",
              backgroundColor: "#E53E3E",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div style={{ padding: "16px", display: "flex", gap: "8px" }}>
          <button
            onClick={() => setShowAddExpense(true)}
            style={{
              flex: "1",
              padding: "8px",
              backgroundColor: "#6B46C1",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            Add Expense
          </button>
          <button
            style={{
              padding: "8px",
              backgroundColor: "#4A5568",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            Split
          </button>
        </div>
      )}
    </div>
  );
}

export default GroupChat;
