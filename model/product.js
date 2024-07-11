module.exports = (dbConnection, Sequelize) =>{
    const product = dbConnection.define('product', {
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER
        },
        discount: {
            type: Sequelize.INTEGER
        },
        quantity: {
            type: Sequelize.INTEGER
        }
    })
    return product;
}