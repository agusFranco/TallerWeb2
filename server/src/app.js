// Configuration
require("dotenv").config();

// Packages
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8000;

// Controllers
const userController = require("./controllers/user.controller");
const productsController = require("./controllers/product.controller");

// Initalize
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Middleware
app.use((req, res, next) => {
  console.log("Middleware");
  next();
});

// Controllers
app.use("/user", userController);
app.use("/product", productsController);

app.listen(port, () => {
  console.log("Server App listening on port " + port);
});
