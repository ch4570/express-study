import { connectDB } from "../config/mongo";
import { closeConnection } from "../config/mongo";
import { User } from "../models/user";
import { LoadUserResponse } from "../dto/response/loadUserResponse";

export const loadAllUsers = async () => {
    await connectDB();

    try {
        const users = await User.find();
        console.log(users);
        return users.map(user => {
            return new LoadUserResponse(user.name, user.email, user.password)
        });
    } catch (error) {
        console.error(`Error in loadAllUser : ${error}`);
    } finally {
        await closeConnection();
    }
}

export const loadUserByName = async (name: string) => {
    await connectDB();

    try {
        const user = await User.findOne({ name: name });
        console.log(user);

        if (user === null) return null;

        return new LoadUserResponse(user.name, user.email, user.password)
    } catch (error) {
        console.error(`Error in loadUserByName : ${error}`);
    } finally {
        await closeConnection();
    }
}