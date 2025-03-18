import mongoose from "mongoose";
import dotenv from "dotenv";
import { ERROR_MESSAGES } from "../constants/messageConstants";

dotenv.config();

const connectDB = async (): Promise<void> => {
    try {
        const mongoURI = process.env.MONGO_URI;
        
        if (!mongoURI) {
            throw new Error(ERROR_MESSAGES.MONGO_URI_MISSING);
        }

        await mongoose.connect(mongoURI);

        console.log("MongoDB connected successfully");
    } catch(error) {
        console.error(`${ERROR_MESSAGES.MONGO_CONNECTION_FAILED}:`, error);
        process.exit(1);
    }
};

export default connectDB;