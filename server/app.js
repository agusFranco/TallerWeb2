const express = require("express");
// Controllers
const userController = require("./controllers/user.controller");
const productsController = require("./controllers/product.controller");

const app = express();

// Middleware
app.use((req, res, next) => {
  console.log("Middleware");
});

// IDK
app.use(express.json());

// Controllers
app.use("/user", userController);
app.use("/products", productsController);

app.listen(3000, () => {
  console.log("Server App listening on port 3000!");
});
