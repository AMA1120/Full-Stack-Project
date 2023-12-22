const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const FoodcrudModel = require("./models/Foodcrud");

//import routes
const userRoutes = require("./routes/users");
const promotionRoutes = require("./routes/promotion");
const foodcrudRoutes = require("./routes/foodcrud");
const menuRoutes = require("./routes/menuroute");
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

 

//mongodb atlas connection
const DB_URL =
  "mongodb+srv://pkkimansha27:resturant123@resturant.c1gnqtq.mongodb.net/?retryWrites=true&w=majority";


//server.js listening port
app.listen(4000, () => {
  console.log("Server Started");
});

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("DB Connected", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  })
  .catch((err) => console.log("DB connection error,err"));
