import User, {IUser, ICreateUser} from "../models/userModel";

export const getUsers = async (): Promise<IUser[]> => {
    return await User.find();
};

export const getUserById = async (id: String): Promise<IUser | null> => {
    return await User.findById(id);
};

export const createUser = async (userData: ICreateUser): Promise<IUser> => {
    const newUser = new User(userData);
    return await newUser.save();
};

export const updateUser = async (id: String, userData: Partial<IUser>): Promise<IUser | null> => {
    return await User.findByIdAndUpdate(id, userData, {new: true});
};

export const deleteUser = async (id: String): Promise<boolean | null> => {
    const result = await User.findByIdAndDelete(id);
    return result !== null;
}