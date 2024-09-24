const express = require("express")
const app = express()
const homeRouter = require("./router2/homeRouter")
const loginRouter = require("./router2/loginRouter")

//third-party middleware
app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//app middleware
app.use((req, res, next) => {
    console.log("token");
    next()
})

//router middleware
app.use("/home", homeRouter)
app.use("/login", loginRouter)

app.listen(3000, () => {
    console.log("server start");
})