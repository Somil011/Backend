import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/product.js"
import cors from "cors";
import connectDb from "./db/conn.js";


dotenv.config({ path: "../.env" })
connectDb();

const app = express(); 

app.use(cors());
app.use(cors({origin: "*"}));

app.use(express.json());


const PORT = process.env.PORT || 4500

app.use("/api/product", productRoutes);

app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
});