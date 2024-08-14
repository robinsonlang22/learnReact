const express = require("express")

const app = express()

app.get("/",(req,res)=>{
    //res.send("hello world")
    res.send({
        name:"lang",
        age:26
    })
})

app.get("/login",(req,res)=>{
    res.write("login")
    res.end()
})


app.listen(3000,()=>{
    console.log("server start");
})