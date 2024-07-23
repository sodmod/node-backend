import {Request, Response} from 'express';
import {createUser, deleteUser, getAllUsers, getUserById, updateUser} from "../service/userService";
import {IUser} from "../models/interface/userInterface";
import User from "../models/useModel";

export const createUserController = async (req: Request, res: Response): Promise<void> => {
    console.log("we are getting there")
    const user: IUser = req.body;
    const newUser: User = await createUser(user);
    res.status(201).json(newUser);
};

export const getUserByIdController = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    const user: User | null = await getUserById(id);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({message: 'User not found'});
    }
};

export const getAllUsersController = async (_req: Request, res: Response): Promise<void> => {
    const users = await getAllUsers();
    res.status(201).json(users);
};

export const updateUserController = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    const user: IUser = req.body;
    const [updated] = await updateUser(id, user);
    if (updated) {
        const updatedUser = await getUserById(id);
        res.status(200).json(updatedUser);
    } else {
        res.status(404).json({message: 'User not found'});
    }
};

export const deleteUserController = async (req: Request, res: Response): Promise<void> => {
    const id = parseInt(req.params.id);
    const deleted = await deleteUser(id);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).json({message: 'User not found'});
    }
};