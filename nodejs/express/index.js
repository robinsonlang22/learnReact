const express = require("express")

const app = express()

func1 = (req, res, next) => {
    console.log("token通过")
    const isValid = true
    if (isValid) {
        next()
    } else {
        res.send("error")
    }
}

func2 = (req, res) => {
    res.send({ list: [1, 2, 3] })
}

//应用级中间件
app.use(func1)

//路由层
app.get("/home", [func2])

app.get("/login", (req, res) => {
    res.send("login")
})

app.listen(3000, () => {
    console.log("server start");
})


