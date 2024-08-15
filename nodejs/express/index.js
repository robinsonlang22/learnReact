const express = require("express")

const app = express()

func1 = (req,res,next)=>{
    console.log("token通过")
    const isValid = true
    if(isValid){
        next()
    }else{
        res.send("error")
    }
}

func2 = (req,res)=>{
    res.send({list:[1,2,3]})
}

app.get("/home",[func1,func2])

app.get("/login",(req,res)=>{
    res.send("login")
})

app.listen(3000,()=>{
    console.log("server start");
})