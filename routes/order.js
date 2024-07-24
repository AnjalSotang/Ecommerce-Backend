const express = require("express")
const { createOrder, findUserById, findAllOrder, updateStatus } = require("../controller/order");
const { checkTokenAndRole } = require("../middleware/checkToken");
const router = express.Router()

router.post('/order', checkTokenAndRole("user"), createOrder);
router.get('/findOrder', checkTokenAndRole("user"), findUserById);
router.get('/findAllOrder', checkTokenAndRole("admin"), findAllOrder);
router.patch('/updateStatus/:id', checkTokenAndRole("admin"), updateStatus);


module.exports = router
