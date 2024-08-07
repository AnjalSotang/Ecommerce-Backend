const express = require("express")
const { addToCart } = require("../controller/addToCart");
const { checkTokenAndRole } = require("../middleware/checkToken");
const router = express.Router()

router.post('/createCart/:product', checkTokenAndRole("user"), addToCart);
// router.get('/wishlist', checkTokenAndRole("user"), findAllWish);

module.exports = router