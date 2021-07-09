// Configuration
require("dotenv").config();

// Packages
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

// Controllers
const userController = require("./controllers/user.controller");
const productsController = require("./controllers/product.controller");
const authorizedController = require("./controllers/authorized.controller");
const orderController = require("./controllers/order.controller");

// Middleware
const cognitoMiddleware = require("./configuration/cognito-middleware");

// Database
const MongoODBC = require("./configuration/mongo");
const mongoODBC = new MongoODBC().connect();


// Initalize
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Middleware
app.use((req, res, next) => {
  // console.log("Middleware");
  next();
});

// Controllers
app.use("/user", userController);
app.use("/product", productsController);
app.use("/order", orderController);
app.use("/authorized", cognitoMiddleware, authorizedController);

app.listen(process.env.PORT || 8000, () => {
  console.log("Server App listening on port " + process.env.PORT || 8000);
});
