// eslint-disable-next-line no-unused-vars
import React from "react";
import DashBoard from "../../assets/dashboard.jpg";

export default function MockupSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Experience the Future of Expense Tracking
        </h2>
        <div className="relative flex justify-center items-center p-3">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl transform -rotate-1"></div>
          <img
            src={DashBoard}
            alt="ExpenseTrack Mockup"
            width="1200"
            height="600"
            className="inset-0 rounded-3xl shadow-2xl relative z-10 transform -rotate-1 "
          />
        </div>
      </div>
    </section>
  );
}
