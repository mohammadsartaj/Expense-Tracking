import mongoose from "mongoose";

// Define the schema for a transaction entry
const transactionSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        category: { type: String, required: true },
        description: { type: String, default: "" },
        amount: { type: Number, required: true },
        accountType: { type: String, enum: ["income", "expense"], required: true },
        income: { type: Number, default: 0 }, // Amount added for income transactions
        expense: { type: Number, default: 0 }, // Amount added for expense transactions
        totalBalance: { type: Number, required: true }, // Calculated dynamically
        date: { type: String, required: true },
        time: { type: String, required: true },
    },
    { timestamps: true }
);

// Pre-save hook to calculate income, expense, and totalBalance
transactionSchema.pre("save", function (next) {
    if (this.accountType === "income") {
        this.income = this.amount;
        this.expense = 0;
    } else if (this.accountType === "expense") {
        this.income = 0;
        this.expense = this.amount;
    }

    // Calculate the total balance (assuming the initial balance is passed as totalBalance)
    this.totalBalance = this.totalBalance + this.income - this.expense;
    next();
});

// Create and export the model
const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
