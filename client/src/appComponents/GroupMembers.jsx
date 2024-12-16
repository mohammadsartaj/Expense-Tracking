/* eslint-disable react/prop-types */
import React from "react";

function GroupMembers({ members }) {
  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#1F2937",
        borderRadius: "8px",
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
        Group Members
      </h3>
      <div style={{ height: "160px", overflowY: "auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {members.map((member) => (
            <div
              key={member.id}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <div
                style={{
                  height: "32px",
                  width: "32px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#374151",
                }}
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    e.target.src = "";
                    e.target.style.backgroundColor = "#4B5563";
                    e.target.style.color = "#D1D5DB";
                    e.target.innerText = member.name.slice(0, 2).toUpperCase();
                  }}
                />
              </div>
              <span style={{ fontSize: "0.875rem", color: "#D1D5DB" }}>
                {member.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GroupMembers;
