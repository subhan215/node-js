const express = require("express");
const URL = require("../models/url");
const { handleHomeUrls } = require("../controllers/static");
const router = express.Router() ;
router.get("/" , handleHomeUrls)

router.get("/signup" , (req , res) => {
    return res.render("signup")
})

router.get("/login" , (req , res) => {
    return res.render("login")
})


module.exports = router