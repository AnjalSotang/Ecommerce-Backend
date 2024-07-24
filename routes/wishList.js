const express = require("express")
const { createWish, findAllWish } = require("../controller/wishList");
const { checkTokenAndRole } = require("../middleware/checkToken");
const router = express.Router()

router.post('/createWishList/:product', checkTokenAndRole("user"), createWish);
router.get('/wishlist', checkTokenAndRole("user"), findAllWish);

module.exports = router