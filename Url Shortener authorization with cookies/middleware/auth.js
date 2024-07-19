const { getUser } = require("../service/auth");


function checkForAuthentication(req , res , next) {
    req.user = null ; 

    if(req.cookies?.token) {
        const token = req.cookies?.token;
        console.log(token)
        const user = getUser(token)
        console.log(user)
        req.user = user
    }
    return next()
}

function restrictTo(roles = []) {
    return function (req , res , next) {
        if(!req.user) {
            return res.redirect("/login")
        }
        if(!roles.includes(req.user.role)) {
            return res.end("UnAuthorized!") ; 
        }
        return next()
    }
}
module.exports = {
    checkForAuthentication ,
    restrictTo
}