const { where } = require("sequelize");
const db = require("../model");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    let email = req.body.email
    let password = req.body.password
    const hashpassword = await bcrypt.hash(password, 8);

    const response = await db.users.create({ email: email, password: hashpassword });
    res.send({
        response
    })

}


const login = async (req, res) => {

    let email = req.body.email
    let password = req.body.password
    let userFOund = await db.users.findOne({
        where: {
            email: email
        }
    })

    console.log(userFOund)

    if (userFOund) {
        const match = await bcrypt.compare(password, userFOund.password);

        // console.log(match)

        if (!match) {
            res.send({
                message: 'password does not match'
            })
        }

        let token = jwt.sign({ id: userFOund.id, role: userFOund.role }, "secret-key");
        // if(token)
        res.send({
            token: token, user: userFOund
        })
        // res.status(200).json({
        //     success: true,
        //     token: `Bearer ${token}`,
        //     message: "success",
        // });
    }
}

const create = async (req, res) => {
    let email = req.body.email
    let password = req.body.password
    const hashpassword = await bcrypt.hash(password, 8);

    const response = await db.products.create({ email: email, password: hashpassword });
    res.send({
        response
    })

}


module.exports = {
    register, login
}