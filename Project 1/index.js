const express = require("express");

const app = express();
const PORT = 8000;
const {logReqRes} = require("./middlewares/index")
const {connectMongoDb} = require('./connection')
const userRouter = require("./routes/user")
connectMongoDb("mongodb://127.0.0.1:27017/learningPiyushGarg")


app.use(express.urlencoded({ extended: false }));

app.use(logReqRes("log.txt"))
 

app.use('/api/users' , userRouter)
app.listen(PORT, () => console.log("Server Started at port 8000"));
