const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");
const listEndpoints = require("express-list-endpoints");





const app = express();

// Allowed Origins for CORS
const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:3002",
    "http://localhost:3008",
];

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
}));

// Request Timeout Handling
app.use((req, res, next) => {
    res.setTimeout(80000, () => {
        console.log("Request Timeout");
        res.status(408).json({ message: "Request Timeout", error: true, success: false });
    });
    next();
});

// API Routes
app.use("/api", router);

// Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error("Error:", err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
        error: true,
    });
});

// Start Server After Connecting to MongoDB
const PORT = process.env.PORT || 8000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Connected to MongoDB");
            console.log(`🚀 Server is running on port ${PORT}`);
            console.table(listEndpoints(app));  // Logs all API endpoints
        });
    })
    .catch((err) => {
        console.error("Database Connection Failed:", err);
        process.exit(1);
    });
