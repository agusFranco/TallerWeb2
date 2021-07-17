const express = require("express");
const uuid = require('uuid');
const cognitoMiddleware = require("../configuration/cognito-middleware");
const ResponseHelper = require("../helpers/responseHelper");
const orderValidator = require("../models/validators/orderValidator");
const UserModel = require("../models/mongo/userModel");
const OrderModel = require("../models/mongo/orderModel");

const router = express.Router();

router.get("/", async function (req, res) {

    let orders = await OrderModel.find();

    if (!orders || orders.length == 0) {
        return ResponseHelper.createNotFoundResponse(res, 'No se encontraron ordenes.');
    }

    return ResponseHelper.createSuccessResponse(res, orders);
});

router.get("/ByOrderId/:id", async function (req, res) {
    let order = await OrderModel.findOne({ "orderId": req.params.id });
    if (!order || order == null) {
        return ResponseHelper.createNotFoundResponse(res, 'No se encontraron ordenes del usuario.');
    }

    return ResponseHelper.createSuccessResponse(res, order);
});

router.get("/ByUserId/:id", async function (req, res) {
    let orders = [];

    orders = await OrderModel.find({ "user.cognitoId": req.params.id });

    if (!orders || orders.length == 0) {
        return ResponseHelper.createNotFoundResponse(res, 'No se encontraron ordenes del usuario.');
    }

    return ResponseHelper.createSuccessResponse(res, orders);
});



router.post("/", async function (req, res) {
    const { error } = orderValidator.validate(req.body);

    if (error) {
        return ResponseHelper.createBadRequestResponse(
            res,
            error.details[0].message
        );
    }

    let user = await UserModel.findOne({ cognitoId: req.body.cognitoId });

    if (!user) {
        return ResponseHelper.createBadRequestResponse(res, "Usuario no encontrado.");
    }

    const orderToSave = { orderId: uuid.v4(), user: user, products: req.body.products, date: req.body.date };

    const mongoOrder = new OrderModel(orderToSave);
    const savedOrder = await mongoOrder.save();

    return ResponseHelper.createSuccessResponse(res, savedOrder, 'Compra realizada exitosamente.');
});

module.exports = router;
