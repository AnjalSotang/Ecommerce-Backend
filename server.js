const express = require('express');
const app = express();
const db = require('./model/index')
const bcrypt = require('bcrypt')


db.dbConnection.sync({ force: 0 });

// Built-in middleware functions for parsing request bodies
// Using these middlewares ensures that your Express application can handle and parse both JSON and URL-encoded data from incoming requests.
app.use(express.json()); // Parse JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded payloads

const routerAuth = require("./routes/auth")
app.use('/auth', routerAuth)

const routerProduct = require("./routes/product")
app.use('/api', routerProduct)

const routerCategory = require("./routes/category")
app.use('/api', routerCategory)

const createUser = async () => {
    let foundAdmin = await db.users.findOne({
        where: {
            role: "admin"
        }
    })
    

    if (!foundAdmin) {
        const hashpassword = await bcrypt.hash("password", 8);
        let createAdmin = await db.users.create({
            email: "admin@gmail.com",
            password: hashpassword,
            role: "admin"
        })
        console.log("created successfully")
    } else {
        console.log("already seeeded")
    }
}
createUser()


app.listen(3001, () => {
    console.log("Server Running");
})