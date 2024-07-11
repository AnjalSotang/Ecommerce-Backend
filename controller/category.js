const { where } = require("sequelize");
const db = require("../model");

const category = async (req, res) => {
    let {name} = req.body;

    const response = await db.category.create({ name: name });
    res.send({
        response
    })
}

module.exports = {
    category
}
