const express = require("express")
const { category } = require("../controller/category")
const router = express.Router()

router.post('/post', category)

module.exports = router
