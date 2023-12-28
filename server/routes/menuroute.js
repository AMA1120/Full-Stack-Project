const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/foodData',async (req, res) => {
  let foodItemsDataArray = [];
  let foodCategoryDataArray = [];
  try {
    const foodItemsCollection = await mongoose.connection.db.collection('food_items');
        const foodItemsData = await foodItemsCollection.findOne({name:"BBQ Chicken"});
        foodItemsDataArray.push(foodItemsData);

        const foodCategoryCollection = await mongoose.connection.db.collection("food_category");
        const foodCategoryData = await foodCategoryCollection.findOne();
        foodCategoryDataArray.push(foodCategoryData);

    res.send({ foodItems: foodItemsDataArray, foodCategory: foodCategoryDataArray });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;