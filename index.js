require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");

//console.log("Valor da variável de ambiente DB_USER:", process.env.MONGOBD_URL);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
