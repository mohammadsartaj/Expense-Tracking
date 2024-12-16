import bcrypt from "bcryptjs";
import User from "../models/user.js";
import speakeasy from "speakeasy";
import jwt from "jsonwebtoken";
import qrCode from "qrcode";
export const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            password: hashedPassword,
            isMfaActive: false,
        });
        console.log("New User :", newUser);
        await newUser.save();
        res.status(201).json({ message: "User Registered successfully" })
    } catch (error) {
        res.status(500).json({ error: "Error registring user", message: error })
    }
};
export const login = async (req, res) => {
    console.log("The authenticated user is : ", req.user);
    res.status(200).json({
        message: "User logged in successfully",
        username: req.user.username,
        isMfaActive: req.user.isMfaActive,
    });
};
export const authStatus = async (req, res) => {
    if (req.user) {
        res.status(200).json({ message: "User is authenticated", username: req.user.username, isMfaActive: req.user.isMfaActive, });
    }
    else {
        res.status(401).json({ message: "Unauthorized User!" });
    }
};
export const logout = async (req, res) => {
    if (!req.user) res.status(401).json({ message: "Unauthorized User!" });
    req.logout((err) => {
        if (err) return res.status(400).json({ message: "User not Logged in" });
        res.status(200).json({ message: "Logout successfull" });
    });
};
export const setup2FA = async (req, res) => {
    try {
        console.log("The req.user is : ", req.user);
        const user = req.user;
        var secret = speakeasy.generateSecret();
        console.log("The secreat object is : ", secret);
        user.twoFactorSecret = secret.base32;
        user.isMfaActive = true;
        await user.save();
        const url = speakeasy.otpauthURL({
            secret: secret.base32,
            label: `${req.user.username}`,
            issuer: "www.Hisaab_Kitab.com",
            encoding: "base32",
        });
        const qrImageUrl = await qrCode.toDataURL(url);
        res.status(200).json({ qrCode: qrImageUrl, });
    } catch (error) {
        res.status(500).json({ error: "Error settingup 2fa", message: error });
    }
};
export const verify2FA = async (req, res) => {
    const { token } = req.body;
    const user = req.user;
    const verified = speakeasy.totp.verify({
        secret: user.twoFactorSecret,
        encoding: "base32",
        token,
    });
    if (verified) {
        const jwtToken = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: "1hr" });
        res.status(200).json({ message: "2fa verified", token: jwtToken });
    }
    else {
        res.status(400).json({ message: "InValid 2FA token" });
    }
};
export const reset2FA = async (req, res) => {
    try {
        const user = req.user;
        user.twoFactorSecret = "";
        user.isMfaActive = false;
        await user.save();
        res.status(200).json({ message: "2fa reseted" });
    } catch (error) {
        res.status(500).json({ error: "Error resetting 2fa", message: error });
    }
};


