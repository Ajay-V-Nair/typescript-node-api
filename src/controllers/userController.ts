import { Request, Response } from "express";
import * as UserService from "./../services/userService";
import { ERROR_MESSAGES, SUCCESS_MESSAGES } from "../constants/messageConstants";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await UserService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
    }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await UserService.getUserById(req.params.id);
        if (user !== null) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: ERROR_MESSAGES.USER_NOT_FOUND });
        }
    } catch (error) {
        if (error instanceof Error) {
            if (error.message === ERROR_MESSAGES.INVALID_USER_ID) {
                res.status(400).json({ message: ERROR_MESSAGES.INVALID_USER_ID });
            } else {
                res.status(500).json({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
            }
        } else {
            res.status(500).json({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
        }
    }
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { firstName, lastName, email }: { firstName: string; lastName: string; email: string; } = req.body;
        const newUser = await UserService.createUser({ firstName, lastName, email });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: ERROR_MESSAGES.CREATE_USER_ERROR });
    }
}

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedUser = await UserService.updateUser(req.params.id, req.body);
        if (updatedUser !== null) {
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: ERROR_MESSAGES.USER_NOT_FOUND });
        }
    } catch (error) {
        res.status(500).json({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const isDeleted = await UserService.deleteUser(req.params.id);
        if (isDeleted) {
            res.status(200).json({ message: SUCCESS_MESSAGES.USER_DELETED });
        } else {
            res.status(404).json({ message: ERROR_MESSAGES.USER_NOT_FOUND });
        }
    } catch (error) {
        res.status(500).json({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
    }
}