const express = require("express")
const mongoose = require("mongoose")
const Product = require("./model/product_model")
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello api');
})

//get all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//get single product
app.get('/api/products/:id', async (req, res) => {
    try {
        const {id} = req.params
        const product_id = await Product.findById(id)
        res.status(200).json(product_id)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.connect('mongodb://localhost:27017/demo')
    .then(() => {
        console.log("Connected to database!");
        app.listen(3001, () => {
            console.log("server is running on port 3001");
        })
    })
    .catch(() => {
        console.log("Connected failed");
    })

