const { where } = require("sequelize");
const db = require("../model");

const products = async (req, res) => {
    let {name, description, price, discount, quantity, categoryId} = req.body;

    const response = await db.products.create({ name: name, description: description, price: price, discount: discount, quantity: quantity, categoryId: req.categoryId });
    res.send({
        response
    })
}

const productView = async (req, res) => {
    const findAll = await db.products.findAll();
    res.send({
        findAll
    })
}

module.exports = {
    products
}
