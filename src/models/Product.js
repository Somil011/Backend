import mongoose from "mongoose";

const ProdData = new mongoose.Schema({
    productName: { type: String, required: true},
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true},
});

export default mongoose.model("Prod", ProdData);