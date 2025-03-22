const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI; // Ensure this matches your .env variable
        if (!uri) {
            throw new Error("MongoDB URI is not defined. Please check your .env file.");
        }
        await mongoose.connect(uri); // Removed deprecated options
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;