import mongoose from "mongoose";
import {CustomError} from "../common/error/customError";

export const connectDB = async () => {
    try {
        const connection = await mongoose.connect('mongodb://localhost:27017/mydatabase', {
            user: 'root',
            pass: 'root',
            authSource: 'admin'
        });

        console.log(`MongoDB Connected : ${connection.connection.host}`)
        console.log(`Connection Name : ${connection.connection.name}`)

    } catch (error) {
        console.log(error);
    }
};

export const closeConnection = async () => {
    try {
        await mongoose.connection.close();
        console.log(`[TIME] : [${new Date()}] Disconnect from MongoDB`)
    } catch (error) {
        console.error(`[TIME] [${new Date()}], errorMessage = ${error}`)
    }
}
