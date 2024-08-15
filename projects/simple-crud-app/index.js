const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello api');
})

app.post('api/products', (req, res) => {
    res.send("")
})

mongoose.connect('mongodb://localhost:27017/')
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log("server is running on port 3000");
        })
    })
    .catch(() => {
        console.log("Connected failed");
    })

