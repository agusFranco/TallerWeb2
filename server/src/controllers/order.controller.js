const express = require("express");
const cognitoMiddleware = require("../configuration/cognito-middleware");
const ResponseHelper = require("../helpers/responseHelper");

const router = express.Router();

router.get("/", cognitoMiddleware, async function (req, res) {
    return ResponseHelper.createSuccessResponse(res, []);
});

module.exports = router;
