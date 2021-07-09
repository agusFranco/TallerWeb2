const express = require("express");
const router = express.Router();

const ResponseHelper = require("../helpers/responseHelper");
const orderValidator = require("../models/validators/orderValidator");
const UserModel = require("../models/mongo/userModel");
const OrderModel = require("../models/mongo/orderModel");

const orders = [
  {
    id: 1,
    user: { email: "seba@gmail.com", firstName: "Sebastian", lastName: "Tofano"},
    products: [
      {
        id: 1,
        name: "Producto 1",
        description: "Descripcion Prod 1",
        price: 10,
        category: { id: 1, description: "Categoria 1" },
      },
      {
        id: 2,
        name: "Producto 2",
        description: "Descripcion Prod 2",
        price: 10,
        category: { id: 1, description: "Categoria 1" },
      },
      {
        id: 3,
        name: "Producto 3",
        description: "Descripcion Prod 3",
        price: 10,
        category: { id: 2, description: "Categoria 2" },
      }
    ]
  },
  {
    id: 2,
    user: { email: "seba@gmail.com", firstName: "Sebastian", lastName: "Tofano" },
    products: [
      {
        id: 1,
        name: "Producto 1",
        description: "Descripcion Prod 1",
        price: 10,
        category: { id: 1, description: "Categoria 1" },
      },
      {
        id: 2,
        name: "Producto 2",
        description: "Descripcion Prod 2",
        price: 10,
        category: { id: 1, description: "Categoria 1" },
      },
    ]
  },


];

router.get("/", function (req, res) {
  // Ir a mongo, o a donde sea, y recuperar la data.
  const apiResponse = {
    data: orders,
    messages: [],
    hasErrors: false,
  }

  res.send(apiResponse);
});


router.get("/:id", function (req, res) {
  // Ir a mongo, o a donde sea, y recuperar la data.
  const apiResponse = {
    data: orders.find(x => x.id == req.params.id),
    messages: [],
    hasErrors: false,
  }

  res.send(apiResponse);
});

router.post("/confirmarCompra", async function (req, res) {
  //const { error } = orderValidator.validate(req.body);
  
  let user = await UserModel.findOne({ cognitoId: "e0ae9967-0ac4-47ad-85c9-833fd1506a5d" });

  if (!user) {
      return ResponseHelper.createBadRequestResponse(res, "Usuario no encontrado.");
  }

  const orderToSave = { user: req.body.user, products: req.body.products, date: null };

    const mongoOrder = new OrderModel(orderToSave);
    const savedOrder = await mongoOrder.save();

    return ResponseHelper.createSuccessResponse(res, savedOrder);
});


module.exports = router;
