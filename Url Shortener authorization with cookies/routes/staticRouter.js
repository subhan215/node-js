const express = require("express");
const URL = require("../models/url");
const { handleHomeUrls  , handleAdminAllUrls} = require("../controllers/static");
const { restrictTo } = require("../middleware/auth");
const router = express.Router() ;

router.get("/admin/urls" , restrictTo(["Admin"]) , handleAdminAllUrls)
router.get("/" , restrictTo(["Normal" , "Admin"]),  handleHomeUrls)

router.get("/signup" , (req , res) => {
    return res.render("signup")
})

router.get("/login" , (req , res) => {
    return res.render("login")
})


module.exports = router