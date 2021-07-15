const express = require("express");
const router = express.Router();

const ProductModel = require("../models/mongo/productModel");
const ResponseHelper = require("../helpers/responseHelper");

const productModel = require("../models/mongo/productModel");

/*

*/
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
