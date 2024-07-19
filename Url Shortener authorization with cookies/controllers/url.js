const shortid = require("shortid")

const URL = require("../models/url")
     
async function handleGenerateNewShortUrl(req , res) {
    const body = req.body ; 
     if(!body.url) {
        return res.status(400).json({"msg" : "url is required!"})
     }
    const shortId = shortid(8) ; 
    await URL.create({
        shortId: shortId , 
        redirectURL: body.url , 
        visitHistory: [] , 
        createdBy: req.user._id

    })
    return res.render("home", {id:shortId})
}
async function handleShortUrl(req , res) {
    const shortId = req.params.shortId ; 
    const entry = await URL.findOneAndUpdate({
        shortId
    } , {$push :{
        visitHistory: {
            timestamp: Date.now()
        }
    }})
    console.log(entry.redirectURL)
    res.redirect(entry.redirectURL)
}
async function handleAnalystics(req , res) {
       const shortId = req.params.shortid ; 
       const entry = await URL.findOne({
        shortId
       })
       const count = entry.visitHistory.length
       return res.json({totalCounts: count , history: entry.visitHistory})
}
module.exports = {
    handleGenerateNewShortUrl , 
    handleShortUrl , 
    handleAnalystics

}