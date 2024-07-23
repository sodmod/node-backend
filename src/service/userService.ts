import User from "../models/useModel"
import { IUser } from "../models/interface/userInterface";
        
export const createUser = async (user: IUser): Promise<User> => {
    return await User.create(user);
};

export const getUserById = async (id: number): Promise<User | null> => {
    // Use
    return await User.findByPk(id);
};

export const getAllUsers = async (): Promise<User[]> => {
    return await User.findAll();
};

export const updateUser = async (id: number, user: IUser): Promise<[number, User[]]> => {
    return await User.update(user, {
        where: { id },
        returning: true
    });
};

export const deleteUser = async (id: number): Promise<number> => {
    return await User.destroy({
        where: { id },
    });
};