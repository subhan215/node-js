const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express")
const app = express()
function myHandler(req , res) {
    if (req.url === "/favicon.ico") return res.end();
    
    const log = `${Date.now()} : ${req.url} New Request Received!\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    // Log the request asynchronously
    fs.appendFile("log.txt", log, (err) => {
        if (err) console.error("Error logging request:", err);
    });

    // Handle the response
    res.setHeader("Content-Type", "text/plain");
    
    switch (myUrl.pathname) {
        case "/":
            res.end("Homepage");
            break;
        case "/about":
            const username = myUrl.query.myname;
            res.end(`Hi ${username}`);
            break;
        case "/search":
            const search = myUrl.query.query_search;
            res.end("Here are the results for: " + search);
            break;
        case "/signup" : 
            if (req.method === "GET") {
                res.end("This is a sign up form!")
            }
            else if(req.method === "POST") {
                res.end("Successfully Signed Up!")
            }
            default:

            res.statusCode = 404;
            res.end("404 Not Found");
    }
}

const myServer = http.createServer(myHandler);

myServer.listen(8000, () => {
    console.log("Server Started!");
});
