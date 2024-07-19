const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const app = express()
const PORT = 8000 
const {connectMongoDb} = require("./connection")
const { restrictToLoggedInUserOnly, checkAuth } = require("./middleware/auth")
//routes //
const staticRoute = require("./routes/staticRouter")
const urlRoute = require("./routes/url")
const userRoute  = require("./routes/user")


connectMongoDb("mongodb://127.0.0.1:27017/url-short")
app.set("view engine" , "ejs")
app.set("views" , path.resolve("./views"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use("/url" , restrictToLoggedInUserOnly, urlRoute)
app.use("/" , checkAuth , staticRoute)
app.use("/user" , userRoute)

app.listen(PORT ,() => console.log("Server started at PORT: " , PORT))