import { Request, Response, NextFunction } from "express";
import { ERROR_MESSAGES } from "../constants/messageConstants";

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
};

export default errorHandler;