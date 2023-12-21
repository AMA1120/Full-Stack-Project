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



module.exports = router;
