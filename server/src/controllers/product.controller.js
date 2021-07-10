const express = require("express");
const router = express.Router();

const ProductModel = require("../models/mongo/productModel");
const ResponseHelper = require("../helpers/responseHelper");

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

router.get("/", async function (req, res) {

  let products = await ProductModel.find();

  if (!products || products.length == 0) {
      return ResponseHelper.createNotFoundResponse(res, 'No se encontraron productos.');
  }

  return ResponseHelper.createSuccessResponse(res, products, "Se han encontrado productos");
});


router.get("/:id", async function (req, res) {
  
  let product = await ProductModel.find({"id" : req.params.id});

  if (!product || product.length == 0) {
    return ResponseHelper.createNotFoundResponse(res, 'No se ha encontrado el producto');
  }
  return ResponseHelper.createSuccessResponse(res, product, "Se ha encontrado el producto");
});

module.exports = router;
