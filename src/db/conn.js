import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connection sucessfull :) ");
    }
    catch (error) {
        console.log("connection fail :( ", error);
        process.exit(1);
    }
}

export default connectDb;