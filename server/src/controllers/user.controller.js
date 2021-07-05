const router = require("express").Router();

// Helpers
const ResponseHelper = require("../helpers/responseHelper");

// Validators
const loginValidator = require("../models/validators/loginValidator");
const registerValidator = require("../models/validators/registerValidator");
const verifyValidator = require("../models/validators/verifyValidator");

// Cognito
const Cognito = require("../configuration/cognito");

// Mongo Model
const UserModel = require("../models/mongo/userModel");

router.get("/", async function (req, res) { });

router.post("/", async function (req, res) {
  const { error } = registerValidator.validate(req.body);

  if (error) {
    return ResponseHelper.createBadRequestResponse(
      res,
      error.details[0].message
    );
  }

  let cognito = new Cognito();

  cognito
    .register(req.body)
    .then(async (userSub) => {
      try {
        const userModel = { ...req.body, cognitoId: userSub };
        const mongoUser = new UserModel(userModel);
        const savedUser = await mongoUser.save();

        return ResponseHelper.createSuccessResponse(
          res,
          savedUser,
          `Email de confirmacion enviado satisfactoriamente.!`
        );
      } catch (error) {
        return ResponseHelper.createBadRequestResponse(res, error);
      }
    })
    .catch((errorMessage) => {
      return ResponseHelper.createBadRequestResponse(res, errorMessage);
    });
});

router.post("/Login", async function (req, res) {
  const { error } = loginValidator.validate(req.body);

  if (error) {
    return ResponseHelper.createBadRequestResponse(
      res,
      error.details[0].message
    );
  }

  let cognito = new Cognito();

  cognito
    .authenticate(req.body.email, req.body.password)
    .then(async (cognitoResult) => {

      let user = await UserModel.findOne({ cognitoId: cognitoResult.payload.sub });
      let outputModel = { user: user, token: cognitoResult.jwtToken };

      return ResponseHelper.createSuccessResponse(
        res,
        outputModel,
        `Bienvenido ${user.firstName} ${user.lastName}!`
      );
    })
    .catch((errorMessage) => {
      return ResponseHelper.createBadRequestResponse(res, errorMessage);
    });
});

router.post("/Verify", async function (req, res) {
  const { error } = verifyValidator.validate(req.body);

  if (error) {
    return ResponseHelper.createBadRequestResponse(
      res,
      error.details[0].message
    );
  }

  let cognito = new Cognito();

  cognito
    .verify(req.body.email, req.body.code)
    .then(async (cognitoResult) => {
      return ResponseHelper.createSuccessResponse(res, null, "Usuario confirmado existosamente.");
    })
    .catch((errorMessage) => {
      return ResponseHelper.createBadRequestResponse(res, errorMessage);
    });
});

module.exports = router;
