require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const Product = require("./src/models/product.model.js");
const productRoute = require("./src/routes/product.route.js");

//console.log("Valor da variável de ambiente DB_USER:", process.env.MONGOBD_URL);

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node Api Server Updated");
});

mongoose
  .connect(process.env.MONGOBD_URL)
  .then(() => {
    console.log("Connected to mongodb");
    app.listen(3002, () => {
      console.log("Server is running on port 3002");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
