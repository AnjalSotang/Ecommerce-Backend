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
db.order = require('./order')(dbConnection, Sequelize);
db.wishList = require('./wishList')(dbConnection, Sequelize);
db.addToCart = require('./addToCart')(dbConnection, Sequelize);

db.category.hasMany(db.products);
db.products.belongsTo(db.category);

db.users.hasMany(db.order);
db.order.belongsTo(db.users);

// db.products.hasMany(db.order);
// db.order.belongsTo(db.products);

db.users.hasMany(db.wishList);
db.wishList.belongsTo(db.users);
db.products.hasMany(db.wishList);
db.wishList.belongsTo(db.products);


db.users.hasMany(db.addToCart);
db.addToCart.belongsTo(db.users);
db.products.hasMany(db.addToCart);
db.addToCart.belongsTo(db.products);
db.addToCart.hasMany(db.order);
db.order.belongsTo(db.addToCart)

module.exports = db;