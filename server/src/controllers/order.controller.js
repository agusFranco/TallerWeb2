const express = require("express");
const cognitoMiddleware = require("../configuration/cognito-middleware");
const ResponseHelper = require("../helpers/responseHelper");
const orderValidator = require("../models/validators/orderValidator");
const UserModel = require("../models/mongo/userModel");
const OrderModel = require("../models/mongo/orderModel");

const router = express.Router();

router.get("/"/*,cognitoMiddleware*/, async function (req, res) {

    let ordenes = OrderModel.find()
    .then(function(ordenes){
        
    return ResponseHelper.createSuccessResponse(res, ordenes, "Obtener ordenes");
    })
});

router.post("/", async function (req, res) {
    const { error } = orderValidator.validate(req.body);

    if (error) {
        return ResponseHelper.createBadRequestResponse(
            res,
            error.details[0].message
        );
    }

    let user = await UserModel.findOne({ cognitoId: req.body.userId });

    if (!user) {
        return ResponseHelper.createBadRequestResponse(res, "Usuario no encontrado.");
    }

    const orderToSave = { user: user, products: req.body.products, date: req.body.date };

    const mongoOrder = new OrderModel(orderToSave);
    const savedOrder = await mongoOrder.save();

    return ResponseHelper.createSuccessResponse(res, savedOrder);
});

module.exports = router;
