const db = require("../model");
const { sendMail } = require("./modemailer");

const addToCart = async (req, res) => {
    let { product } = req.params;

    let userId = req.decoded.id
    let {quantity} = req.body;
    // console.log(userid)

    const response = await db.addToCart.create({ quantity: quantity, productId: product, userId: userId });

    sendMail()
    res.send({
        response
    })
}

module.exports = {
    addToCart
}