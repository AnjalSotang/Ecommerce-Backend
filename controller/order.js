const { where } = require("sequelize");
const db = require("../model");

const createOrder = async (req, res) => {
    let { quantity, shippingAddress, productId, status } = req.body;


    let userId = req.decoded.id
    // console.log(userid)

    const response = await db.order.create({ quantity: quantity, shippingAddress: shippingAddress, status: status, productId: productId, userId: userid });
    res.send({
        response
    })
}

const findUserById = async (req, res) => {
    let userId = req.decoded.id;
    console.log(userId)
    const project = await db.order.findAll({ where: { userId: userId } });
    if (project === null) {
        console.log('Not found!');
    } else {
        res.send({
            project
        })
    }
}

const findAllOrder = async (req, res) => {
    const orders = await db.order.findAll();
    res.send({
        orders
    })
}

const updateStatus = async (req, res) => {
    let { id } = req.params;
    let { status } = req.body;

    const orderFound = await db.order.findByPk(id);
    if (orderFound === null) {
        console.log('Not found!');
        res.send({
            message: "Not Found"
        })
    } else {
        const update = await db.order.update(
            { status: status },
            {
                where: {
                    id: id,
                },
            },
        );
        res.send({
            update
        })
    }

}



module.exports = {
    createOrder,
    findUserById,
    findAllOrder,
    updateStatus
}