import Transaction from "../models/transactions.js";

// Add a new transaction
export const addTransaction = async (req, res) => {
    try {
        const {
            username,
            category,
            description,
            amount,
            accountType,
            from,
            to,
            totalBalance,
            date,
            time,
            notes,
        } = req.body;

        // Validation
        if (!username || !category || !amount || !accountType || !date || !time) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        const transaction = new Transaction({
            username,
            category,
            description,
            amount,
            accountType,
            from: accountType === "income" ? from : null,
            to: accountType === "expense" ? to : null,
            totalBalance,
            date,
            time,
            notes,
        });

        await transaction.save();
        res.status(201).json({ success: true, message: "Transaction added successfully" });
    } catch (error) {
        console.error("Error adding transaction:", error);
        res.status(500).json({ success: false, message: "Failed to add transaction" });
    }
};

// Get all transactions for a user
// export const getTransactions = async (req, res) => {
//     try {
//         const { username } = req.query;

//         if (!username) {
//             return res.status(400).json({ success: false, message: "Username is required" });
//         }

//         const transactions = await Transaction.find({ username }).sort({ createdAt: -1 });
//         res.status(200).json(transactions);
//     } catch (error) {
//         console.error("Error retrieving transactions:", error);
//         res.status(500).json({ success: false, message: "Failed to retrieve transactions" });
//     }
// };
export const getTransactions = async (req, res) => {
    try {
        const { username, category, type, dateFrom, dateTo } = req.query;

        // Check if username is provided
        if (!username) {
            return res.status(400).json({ success: false, message: "Username is required" });
        }

        // Initialize the filter object with username
        let filters = { username };

        // Apply category filter if provided
        if (category && category !== "all") {
            filters.category = category;
        }

        // Apply type filter if provided
        if (type && type !== "all") {
            filters.type = type;
        }

        // Apply dateFrom filter if provided
        if (dateFrom) {
            filters.createdAt = { ...filters.createdAt, $gte: new Date(dateFrom) };
        }

        // Apply dateTo filter if provided
        if (dateTo) {
            filters.createdAt = { ...filters.createdAt, $lte: new Date(dateTo) };
        }

        // Fetch transactions based on the filters
        const transactions = await Transaction.find(filters).sort({ createdAt: -1 });

        // If no transactions are found, send a message indicating no results
        if (transactions.length === 0) {
            return res.status(404).json({ success: false, message: "No transactions found for the provided filters" });
        }

        // Return the filtered transactions
        res.status(200).json(transactions);
    } catch (error) {
        console.error("Error retrieving transactions:", error);
        res.status(500).json({ success: false, message: "Failed to retrieve transactions" });
    }
};


export const getTotalBalance = async (req, res) => {
    try {
        const { username } = req.query;

        if (!username) {
            return res.status(400).json({ success: false, message: "Username is required" });
        }

        // Find the most recent transaction and get its totalBalance
        const latestTransaction = await Transaction.findOne({ username })
            .sort({ createdAt: -1 }) // Sort by createdAt in descending order
            .select("totalBalance"); // Select only the totalBalance field

        // If no transactions exist for the user, return 0
        const balance = latestTransaction ? latestTransaction.totalBalance : 0;

        res.status(200).json({ success: true, totalBalance: balance });
    } catch (error) {
        console.error("Error retrieving total balance:", error);
        res.status(500).json({ success: false, message: "Failed to retrieve total balance" });
    }
};


// module.exports = { addTransaction, getTransactions };