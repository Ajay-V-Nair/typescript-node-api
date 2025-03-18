import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig";
import userRoutes from "./routes/userRoutes";
import errorHandler from "./middlewares/errorHandler";

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

app.use(cors({ origin: process.env.ALLOWED_ORIGINS || "*" }));
app.use(helmet());
app.use(express.json());

app.use("/api/users", userRoutes);

app.use(errorHandler);

export default app;