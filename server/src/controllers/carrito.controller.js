const express = require("express");
const router = express.Router();

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

module.exports = router;
