const mongoose = require("mongoose");

class MongoODBC {
  constructor() {}

  connect = () => {
    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@tallerweb2.ic2rs.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`;

    mongoose
      .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log("Base de datos conectada"))
      .catch((e) => console.log("error db:", e));
  };
}

module.exports = MongoODBC;
