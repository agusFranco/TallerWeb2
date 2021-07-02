const router = require("express").Router();

// Helpers
const ResponseHelper = require("../helpers/responseHelper");

// Validators
const loginValidator = require("../models/validators/loginValidator");
const registerValidator = require("../models/validators/registerValidator");

// Cognito
const Cognito = require("../configuration/cognito");

// Mongo Model
const User = require("../models/mongo/user");

router.get("/", async function (req, res) {});

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
    .then(async (user) => {
      try {
        const mongoUser = new User(req.body);
        const savedUser = await mongoUser.save();

        return ResponseHelper.createSuccessResponse(
          res,
          savedUser,
          `Usuario creado satisfactoriamente.!`
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
    .then((data) => {
      return ResponseHelper.createSuccessResponse(
        res,
        data,
        `Bienvenido ${req.body.email}!`
      );
    })
    .catch((errorMessage) => {
      return ResponseHelper.createBadRequestResponse(res, errorMessage);
    });
});

module.exports = router;
