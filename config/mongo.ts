import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        const connection = await mongoose.connect('mongodb://localhost:27017/mydatabase');

        console.log(`MongoDB Connected : ${connection.connection.host}`)

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;