const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/foodData',async (req, res) => {
  try {
    const foodItemsCollection = await mongoose.connection.db.collection('food_items');
        const foodItemsData = await foodItemsCollection.find({}).toArray();

        const foodCategoryCollection = await mongoose.connection.db.collection("food_category");
        const foodCategoryData = await foodCategoryCollection.find({}).toArray();

    res.send({ foodItems: foodItemsData, foodCategory: foodCategoryData });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;