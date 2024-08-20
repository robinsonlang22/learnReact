const express = require("express")
const mongoose = require("mongoose")
const productRoute = require("./router/product.router")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

//routes
app.use("/api/product", productRoute)

app.get('/', (req, res) => {
    res.send('hello api');
})

//connet mongodb
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

    