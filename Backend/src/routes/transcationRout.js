import { Router } from "express";
import { addTransaction, getTransactions, getTotalBalance } from "../controllers/transactionsCeontroller.js";

const router = Router();
router.post("/addTransaction", addTransaction);
router.get("/getTransactions", getTransactions);
router.get("/getTotalBalance", getTotalBalance);


export default router;