const { Sequelize } = require('sequelize');
const bcrypt = require('bcrypt')
const dbConnection = new Sequelize('ecommerce', 'root', '', {
    'host': 'localhost',
    'dialect': 'mysql'
})



const checkConnectivity = async () => {
    try {
        await dbConnection.authenticate();
        console.log("Connection Successfull");
    } catch (error) {
        console.error("Connection not successful", error)
    }
}

checkConnectivity()

const db = {};

db.dbConnection = dbConnection;
db.Sequelize = Sequelize;

db.users = require("./auth")(dbConnection, Sequelize)
db.products = require("./product")(dbConnection, Sequelize)
db.category = require("./category")(dbConnection, Sequelize)


db.category.hasMany(db.products);
db.products.belongsTo(db.category);


module.exports = db;
