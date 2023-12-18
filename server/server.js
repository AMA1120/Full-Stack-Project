const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const FoodcrudModel = require('./models/Foodcrud')
//import routes
const userRoutes = require("./routes/users");
const promotionRoutes = require("./routes/promotion");
const foodcrudRoutes = require("./routes/foodcrud");
app.use(cors());
app.use(express.json())
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

//mongodb atlas connection
const DB_URL =
  "mongodb+srv://pkkimansha27:resturant123@resturant.c1gnqtq.mongodb.net/?retryWrites=true&w=majority";

//for food crud
app.post("/create", async (req, res) => {
  const { id, food_item, price, discription, image } = req.body;

  try {
    const foodDetails = await FoodcrudModel.create({
      id,
      food_item,
      price,
      discription,
      image,
    });

    console.log(foodDetails);
    res.json(foodDetails);
  } catch (error) {
    console.error("Error creating food item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update food item endpoint
app.put("/update/:id", async (req, res) => {
  const foodId = req.params.id;
  const { id, food_item, price, discription, image } = req.body;

  try {
    const updatedFood = await FoodcrudModel.findByIdAndUpdate(
      foodId,
      { id, food_item, price, discription, image },
      { new: true }
    );

    res.json(updatedFood);
  } catch (error) {
    console.error("Error updating food item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


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
