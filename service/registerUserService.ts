import { connectDB } from "../config/mongo";
import { closeConnection } from "../config/mongo";
import { User } from "../models/user";

export const register = async (name: string, email: string, password: string) => {
    // DB 연결
    await connectDB();

    const registerUser = new User({
        name : name,
        email : email,
        password: password
    });

    try {
        await registerUser.save();
        console.log('User saved successfully');
    } catch (error) {
        console.error(`Error saving user: ${error}`);
    } finally {
        await closeConnection();
    }
}