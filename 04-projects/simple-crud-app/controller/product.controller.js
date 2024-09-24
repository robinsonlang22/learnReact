const Product = require("../model/product_model")

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getProductsById = async (req, res) => {
    try {
        const { id } = req.params
        const product_id = await Product.findById(id)
        res.status(200).json(product_id)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createProducts = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateProducts = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        } else {
            const updatedProduct = await Product.findById(id)
            res.status(200).json(updatedProduct)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteProducts = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        } else {
            res.status(200).json({ message: "Product deleted successfully" })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getProducts,
    getProductsById,
    createProducts,
    updateProducts,
    deleteProducts
}