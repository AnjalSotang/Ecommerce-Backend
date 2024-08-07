const { Sequelize } = require("sequelize");

module.exports = (dbConnection, sequelize) => {
    const addToCart = dbConnection.define('AddToCart',{
        quantity: {
            type: Sequelize.STRING
        }
    })
    return addToCart;
}