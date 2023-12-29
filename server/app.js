const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

const FoodcrudModel = require("./models/Foodcrud");

//import routes
const userRoutes = require("./routes/users");
const promotionRoutes = require("./routes/promotion");
const foodcrudRoutes = require("./routes/foodcrud");
const menuRoutes = require("./routes/menuroute");
const promotionPayRoutes = require("./routes/promotionPay");

app.use(cors());
app.use(express.json());

//app middleware
app.use(bodyParser.json({ limit: "50mb" }));

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

//route middleware
app.use(userRoutes);
app.use(promotionRoutes);
app.use(foodcrudRoutes);
app.use(menuRoutes);
app.use(promotionPayRoutes);

module.exports = app;
