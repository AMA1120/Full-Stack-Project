const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const FoodcrudModel = require("./models/Foodcrud");
const PromotionModel = require("./models/promotion");

//import routes
const userRoutes = require("./routes/users");
const promotionRoutes = require("./routes/promotion");
const foodcrudRoutes = require("./routes/foodcrud");
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
app.use(loginRoute);

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
// Get all food items
app.get("/foods", async (req, res) => {
  try {
    const foodItems = await FoodcrudModel.find();
    res.json(foodItems);
  } catch (error) {
    console.error("Error fetching food items:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Update food item by ID
app.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const { food_item, price, discription, image } = req.body;

  try {
    const updatedFood = await FoodcrudModel.findByIdAndUpdate(
      id,
      {
        food_item,
        price,
        discription,
        image,
      },
      { new: true }
    );

    if (!updatedFood) {
      return res.status(404).json({ error: "Food item not found" });
    }

    console.log("Updated Food:", updatedFood);
    res.json(updatedFood);
  } catch (error) {
    console.error("Error updating food item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Fetch food item by ID
app.get("/getfoods/:id", async (req, res) => {
  const foodId = req.params.id;

  try {
    const existingFood = await FoodcrudModel.findById(foodId);

    if (!existingFood) {
      return res.status(404).json({ error: "Food item not found" });
    }

    res.json(existingFood);
  } catch (error) {
    console.error("Error fetching existing food item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Delete food item by ID
app.delete("/delete/:id", async (req, res) => {
  const foodId = req.params.id;

  try {
    const deletedFood = await FoodcrudModel.findByIdAndDelete(foodId);

    if (!deletedFood) {
      return res.status(404).json({ error: "Food item not found" });
    }

    console.log("Deleted Food:", deletedFood);
    res.json({ message: "Food item deleted successfully" });
  } catch (error) {
    console.error("Error deleting food item:", error);
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
