const express = require("express");
const router = express.Router();

const ResponseHelper = require("../helpers/responseHelper");

const productModel = require("../models/mongo/productModel");

/*
const products = [
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
    category: { id: 1, description: "Categoria 2" },
  },
  {
    id: 4,
    name: "Producto 4",
    description: "Descripcion Prod 4",
    price: 10,
    category: { id: 1, description: "Categoria 2" },
  },
  {
    id: 5,
    name: "Producto 5",
    description: "Descripcion Prod 5",
    price: 10,
    category: { id: 1, description: "Categoria 2" },
  },
  {
    id: 6,
    name: "Producto 6",
    description: "Descripcion Prod 6",
    price: 10,
    category: { id: 1, description: "Categoria 3" },
  },
];
*/

router.get("/", async function (req, res) {
  // Ir a mongo, o a donde sea, y recuperar la data.
   let product = productModel.find()
   .then(function (productos) {
    return ResponseHelper.createSuccessResponse(res, productos, "Obtener productos");
   });

  // let product = await ProductModel.findOne({ id: 1 });
  // return ResponseHelper.createSuccessResponse(res, product, "Obtener productos");
  
  //return ResponseHelper.createSuccessResponse(res, products, "Obtener productos");
});


router.get("/:id", function (req, res) {
  // Ir a mongo, o a donde sea, y recuperar la data.
  const apiResponse = {
    data: products.find(x => x.id == req.params.id),
    messages: [],
    hasErrors: false,
  }

  res.send(apiResponse);
});

module.exports = router;
