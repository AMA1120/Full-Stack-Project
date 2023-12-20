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

// Fetch all promotions
router.get('/getPromotions', async (req, res) => {
  try {
    const promotions = await Promotion.find();
    res.json(promotions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = router;