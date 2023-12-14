const express = require("express");
const Promotions = require("../models/promotion");
const mongoose = require("mongoose");

const router = express.Router();
const Promotion = mongoose.model("PromotionDetails");

//hello world
router.get("/", async (req, res) => {
  try {
    res.send("Hello world");
  } catch (error) {
    console.log(error);
  }
});

router.post("/new", async (req, res) => {
  const { promotionName, description, category, image } = await req.body;

  try {

    const savedPromotion = new Promotion({
      promotionName,
      description,
      category,
      image,
    });

    await savedPromotion.save();

    console.log(savedPromotion);
    res.send(savedPromotion).status(201);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;