const db = require("../model");


const createWish = async (req, res) => {
    let { product } = req.params;


    let userId = req.decoded.id
    // console.log(userid)

    const response = await db.wishList.create({ productId: product, userId: userId });
    res.send({
        response
    })
}

const findWishById = async (req, res) => {
    let userId = req.decoded.id;
    console.log(userId)
    const project = await db.wishList.findAll({ where: { userId: userId } });
    if (project === null) {
        console.log('Not found!');
    } else {
        res.send({
            project
        })
    }
}

const findAllWish = async (req, res) => {
    const findAll = await db.wishList.findAll({
        include: [{ model: db.products }, { model: db.users }],
    });
    res.send({
        findAll
    })
}

const updateStatus = async (req, res) => {
    let { id } = req.params;
    let { product } = req.body;

    const wish = await db.wishList.findByPk(id);
    if (wish === null) {
        console.log('Not found!');
        res.send({
            message: "Not Found"
        })
    } else {
        const update = await db.wishList.update(
            { product: product },
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
    createWish,
    findWishById,
    findAllWish,
    updateStatus
}