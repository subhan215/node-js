const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express")
const app = express()

app.get("/" , (req , res) => {
    return res.end("Hello from Home Page!") ; 
})
app.get("/about" , (req , res) => {
    return res.end("Hello from about Page!") ;
})
app.listen(8000 , () => console.log("App Started!")) ; 