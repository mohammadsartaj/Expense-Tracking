/* eslint-disable react/prop-types */
import React from "react";

// Layout Component
export const Layout = ({ children, className }) => (
  <div className={`flex ${className}`}>{children}</div>
);

// LayoutHeader Component
export const LayoutHeader = ({ children, className }) => (
  <header className={`${className}`}>{children}</header>
);

// LayoutSidebar Component
export const LayoutSidebar = ({ children, className }) => (
  <aside className={`${className}`}>{children}</aside>
);

// LayoutContent Component
export const LayoutContent = ({ children, className }) => (
  <main className={`${className}`}>{children}</main>
);
