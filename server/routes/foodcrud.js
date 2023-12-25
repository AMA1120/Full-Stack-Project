const express = require("express");
const router = express.Router();
const FoodcrudModel = require("../models/Foodcrud");

router.post("/new", async (req, res) => {
  const { id, food_item, price, discription, image } = req.body;

  try {
    const savedCreateFood = new FoodcrudModel({
      id,
      food_item,
      price,
      discription,
      image,
    });

    await savedCreateFood.save();

    console.log(savedCreateFood);
    res.status(201).json(savedCreateFood);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//for food crud
router.post("/create", async (req, res) => {
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
    //console.error("Error creating food item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// Get all food items
router.get("/foods", async (req, res) => {
  try {
    const foodItems = await FoodcrudModel.find();
    res.json(foodItems);
  } catch (error) {
    //console.error("Error fetching food items:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Update food item by ID
router.put("/update/:id", async (req, res) => {
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
    //console.error("Error updating food item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Fetch food item by ID
router.get("/getfoods/:id", async (req, res) => {
  const foodId = req.params.id;

  try {
    const existingFood = await FoodcrudModel.findById(foodId);

    if (!existingFood) {
      return res.status(404).json({ error: "Food item not found" });
    }

    res.json(existingFood);
  } catch (error) {
    //console.error("Error fetching existing food item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Delete food item by ID
router.delete("/delete/:id", async (req, res) => {
  const foodId = req.params.id;

  try {
    const deletedFood = await FoodcrudModel.findByIdAndDelete(foodId);

    if (!deletedFood) {
      return res.status(404).json({ error: "Food item not found" });
    }

    console.log("Deleted Food:", deletedFood);
    res.json({ message: "Food item deleted successfully" });
  } catch (error) {
    // console.error("Error deleting food item:", error);
    res.status(500).json({ error: "Internal Server Error" });
    }
    
    

});


module.exports = router;
