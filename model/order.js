module.exports = (dbConnection, Sequelize) =>{
    const order = dbConnection.define('order', {
        quantity: {
            type: Sequelize.STRING
        },
        shippingAddress: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        }    
    })
    return order;
}