module.exports = (dbConnection, Sequelize) =>{
    const auth = dbConnection.define('user', {
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.STRING,
            defaultValue: "user"
        }
    })
    return auth;
}