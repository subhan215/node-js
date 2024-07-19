const fs = require("fs")
function logReqRes(fileName) {
    return (req , res , next) => {
        fs.appendFile(filename , `\n${Date.now()} : ${req.method} : 
        ${req.path}\n` , (err , data) => {
            next()
        })
    }
}
module.exports = {
    logReqRes , 
    
}