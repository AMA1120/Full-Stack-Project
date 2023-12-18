const mongoose = require("mongoose");

const CreateFoodSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "Add an ID"],
  },
  food_item: {
    type: String,
    required: [true, "Add a food Item"],
  },
  price: {
    type: String,
    required: [true, "Add a Price"],
  },
  discription: {
    type: String,
    required: [true, "Add a Discription"],
  },
  image: {
    type: String,
    required: [true, "Add a Image"],
  },
});

module.exports = mongoose.model("FoodDetails", CreateFoodSchema);
