import { Request, Response } from "express";
import * as UserService from "./../services/userService";
import User from "../models/userModel";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await UserService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: "Server error."});
    }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await UserService.getUserById(req.params.id);
        if(user !== null) {
            res.status(200).json(user);
        } else {
            res.status(404).json({message: "User not found."});
        }        
    } catch (error) {
        res.status(500).json({ message: "Server error" });        
    }
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { firstName, lastName, email }: { firstName: string; lastName: string; email: string; } = req.body;
        const newUser = await UserService.createUser({firstName, lastName, email});
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: "Error creating user." });        
    }
}

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedUser = await UserService.updateUser(req.params.id, req.body);
        if(updateUser !== null) {
            res.status(204).send();
        } else {
            res.status(404).json({message: "User not found."});
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });        
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const isDeleted = await UserService.deleteUser(req.params.id);
        if(isDeleted !== null) {
            res.status(200).json({message: "User deleted successfully."});
        } else {
            res.status(404).json({message: "User not found."});
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });        
    }
}