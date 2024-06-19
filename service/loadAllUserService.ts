import { connectDB } from "../config/mongo";
import { closeConnection } from "../config/mongo";
import { User } from "../models/user";
import {LoadAllUserResponse} from "../dto/response/loadAllUserResponse";

export const loadAllMembers = async () => {
    await connectDB();

    try {
        const users = await User.find();
        console.log(users);
        return users.map(user => {
            return new LoadAllUserResponse(user.name, user.email, user.password)
        });
    } catch (error) {
        console.error(`Error in loadAllUser : ${error}`);
    } finally {
        await closeConnection();
    }
}