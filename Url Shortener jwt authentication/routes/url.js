const express = require("express")
const {handleGenerateNewShortUrl ,handleShortUrl , handleAnalystics} = require("../controllers/url")
const router = express.Router() ;

router.post("/" , handleGenerateNewShortUrl)
router.get("/:shortId" , handleShortUrl)
router.get("/analytics/:shortid" , handleAnalystics)
module.exports = router