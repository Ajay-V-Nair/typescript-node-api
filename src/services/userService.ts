import User, { IUser, ICreateUser } from "../models/userModel";
import { Types } from "mongoose";
import { ERROR_MESSAGES } from "../constants/messageConstants";

// Fetch all users
export const getUsers = async (): Promise<IUser[]> => {
    try {
        return await User.find().lean();
    } catch (error) {
        throw new Error(ERROR_MESSAGES.FETCH_USERS_ERROR);
    }
};

// Fetch user by ID
export const getUserById = async (id: string): Promise<IUser | null> => {
    try {
        if (!Types.ObjectId.isValid(id)) {
            throw new Error(ERROR_MESSAGES.INVALID_USER_ID);
        }
        return await User.findById(id).lean();
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error(ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
        }
    }
};

// Create a new user
export const createUser = async (userData: ICreateUser): Promise<IUser> => {
    try {
        const newUser = new User(userData);
        return await newUser.save();
    } catch (error) {
        throw new Error(ERROR_MESSAGES.CREATE_USER_ERROR);
    }
};

// Update an existing user
export const updateUser = async (id: string, userData: Partial<IUser>): Promise<IUser | null> => {
    try {
        if (!Types.ObjectId.isValid(id)) {
            throw new Error(ERROR_MESSAGES.INVALID_USER_ID);
        }
        return await User.findByIdAndUpdate(id, userData, { new: true }).lean();
    } catch (error) {
        throw new Error(`${ERROR_MESSAGES.UPDATE_USER_ERROR}${id}`);
    }
};

// Delete a user
export const deleteUser = async (id: string): Promise<boolean> => {
    try {
        if (!Types.ObjectId.isValid(id)) {
            throw new Error(ERROR_MESSAGES.INVALID_USER_ID);
        }
        const result = await User.findByIdAndDelete(id);
        return result !== null;
    } catch (error) {
        throw new Error(`${ERROR_MESSAGES.DELETE_USER_ERROR}${id}`);
    }
};