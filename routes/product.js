const express = require("express")
const { products } = require("../controller/product")
const { checkTokenAndRole } = require("../middleware/checkToken")
const router = express.Router()

router.post('/post', checkTokenAndRole("admin"), products)

module.exports = router