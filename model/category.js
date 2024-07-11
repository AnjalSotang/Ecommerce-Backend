module.exports = (dbConnection, Sequelize) =>{
    const category = dbConnection.define('category', {
        name: {
            type: Sequelize.STRING
        },
        
    })
    return category;
}