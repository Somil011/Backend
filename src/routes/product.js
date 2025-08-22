import Prod from "../models/Product.js";
import express from "express";

const router = express.Router();

// Get all Product
router.get("/", async (req,res) => {
    const products = await Prod.find();
    res.json(products);
});

// Get product by id
router.get("/:id", async(req,res) => {
    const product = await Prod.findById(req.params.id);
    res.json(product); 
});

// post
router.post("/", async(req,res) => {
    const {productName, price, imageUrl} = req.body;
    
    const newProd = new Prod({productName, price, imageUrl});
    await newProd.save();

    res.json(newProd);
})

//put
router.put("/:id", async (req,res) => {
    const {productName, price, imageUrl} = req.body;

    const updated = await Prod.findByIdAndUpdate(
        req.params.id,
        { productName, price, imageUrl },
        {new: true}
    );

    res.json(updated);
});

//delete a product by id
router.delete("/:id", async(req,res) => {
    await Prod.findByIdAndDelete(req.params.id);
    res.json({message: "Product deleted"});
});

export default router;