const express = require("express")
const Product = require("./model/product_model")
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})