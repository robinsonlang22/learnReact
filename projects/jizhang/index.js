const express = require("express")
const mongoose = require("mongoose")
const Product = require("./model/goods_model")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
    res.send('jizhang');
})

//get all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//get single product
app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product_id = await Product.findById(id)
        res.status(200).json(product_id)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//commit products
app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//update a product
app.put('/api/product/:id', async (req, res) => {
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
})

//delete a product
app.delete('/api/product/:id', async (req, res) => {
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
})

//connet mongodb
mongoose.connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log("Connected to database!");
        app.listen(3002, () => {
            console.log("server is running on port 3002");
        })
    })
    .catch(() => {
        console.log("Connected failed");
    })

    