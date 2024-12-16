import { Router } from "express";
import passport from "passport";
import { register, login, logout, authStatus, verify2FA, reset2FA, setup2FA } from "../controllers/authController.js";

const router = Router();

//Registration Route
router.post("/register", register);
//Login Route
router.post("/login", passport.authenticate("local"), login);
//Auth Status Route
router.get("/status", authStatus);
//Logout Route
router.post("/logout", logout);

//2fa setup
router.post("/2fa/setup", (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.status(401).json({ message: "Unauthorized" });
}, setup2FA);

//verify Route
router.post("/2fa/verify",
    (req, res, next) => {
        if (req.isAuthenticated()) return next();
        res.status(401).json({ message: "Unauthorized" });
    }, verify2FA);

//Reset Route
router.post("/2fa/reset",
    (req, res, next) => {
        if (req.isAuthenticated()) return next();
        res.status(401).json({ message: "Unauthorized" });
    }, reset2FA);

export default router;