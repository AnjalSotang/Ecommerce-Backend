const { where } = require("sequelize");
const db = require("../model");

const category = async (req, res) => {
  let { name } = req.body;

  const response = await db.category.create({ name: name });
  res.status(200).json({
    message: "Category creates successfully"
  })
}

const findAllCategory = async (req, res) => {
  const response = await db.category.findAll()
  res.send({
    data: response
  })
}


//Read
const getUserById = async (req, res) => {
  let { id } = req.params
  const response = await db.category.findByPk(id)
  res.send({
    data: response
  })
}

const categoryUpdate = async (req, res) => {
  let { id } = req.params;
  let { name } = req.body;

  const userFOund = await db.category.findOne({where:{id: id} });

  if (userFOund) {
    let response = await db.category.update(
      { name: name },
      {
        where: {
          id: id,
        },
      },
    );
    if (response) {
      res.status(200).json({
        message: "Updated successfully"
      })
    } else {
      res.status(500).json({
        message: "not found"
      })
    }
  } else {
    res.status(500).json({
      message: "user not found"
    })
  }
}

const deleteUser = async (req, res) => {
  let { id } = req.params
  let response = await db.category.destroy({
    where: {
      id: id,
    },
  });
  console.log(response)
  if (response) {
    res.status(200).json({
      message: "deleted successfully"
    })
  } else {
    res.status(500).json({
      message: "not found"
    })
  }
}

module.exports = {
  category,
  categoryUpdate,
  deleteUser
}
