const express = require("express")
const { category, categoryUpdate, deleteUser } = require("../controller/category")
const { checkTokenAndRole } = require("../middleware/checkToken")
const router = express.Router()

router.post('/category', checkTokenAndRole("admin"), category);
router.patch('/update/:id', checkTokenAndRole("admin"), categoryUpdate);
router.delete('/delete/:id',checkTokenAndRole("admin"), deleteUser);

module.exports = router
