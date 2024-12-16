import express, { json, urlencoded } from 'express';
import session from 'express-session';
import passport from 'passport';
import dotenv from 'dotenv';
import cors from "cors";
import dbConnect from './config/dbConnent.js';
import authRoutes from "./routes/authRoutes.js"
import "./config/passportConfig.js";
import transactionRoutes from "./routes/transcationRout.js";

dotenv.config();
dbConnect();


const app = express();


//Middlewares
const corsOptions = {
    origin: ["http://localhost:5173"],
    credentials: true,
};
app.use(cors(corsOptions));
// app.options("*", cors(corsOptions));
app.use(json({ limit: "100mb" }));
app.use(urlencoded({ limit: "100mb", extended: true }));
app.use(session({
    secret: process.env.SESSION_SECREAT || 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000 * 60,
    },
}));
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionRoutes);


//Listen application
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Server is runnung on port ${PORT}`);
});