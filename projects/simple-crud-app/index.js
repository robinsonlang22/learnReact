const express = require("express")
const mongoose = require("mongoose")
const app = express()

mongoose.connect('mongodb://localhost:27017/')
.then(() => {
    console.log("Connected to database!");
    app.listen(3000,() => {
        console.log("server is running on port 3000");
    })
})
.catch(() => {
    console.log("Connected failed");
})

app.get('/',(req,res)=> {
    res.send('hello api');
})
