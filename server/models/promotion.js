const mongoose = require("mongoose");

const PromotionSchema = new mongoose.Schema(
  {
    promotionName: {
      type: String,
      required: [true, "Please add a promotion name"],
    },

    description: {
      type: String,
      required: [true, "Please add a description"],
    },

    category: {
      type: String,
      required: [true, "Please add the category"],
    },

    image: {
      type: String,
      required: [true, "Please add image"],
    },
  },
  {
    collection: "PromotionDetails",
  }
);

module.exports = mongoose.model("PromotionDetails", PromotionSchema);
