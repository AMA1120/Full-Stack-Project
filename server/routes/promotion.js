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
router.get("/getPromotions", async (req, res) => {
  try {
    const promotions = await Promotion.find();
    res.json(promotions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Update Promotion by ID
router.put("/updatePromotions/:id", async (req, res) => {
  const id = req.params.id;
  const { promotionName, description, category, image } = req.body;
  try {
    const updatedPromotion = await Promotion.findByIdAndUpdate(
      id,
      {
        promotionName,
        description,
        category,
        image,
      },
      { new: true }
    );

    if (!updatedPromotion) {
      return res.status(404).json({ error: "Promotion not found" });
    }

    console.log("Updated Promotion:", updatedPromotion);
    res.json(updatedPromotion);
  } catch (error) {
    console.error("Error updating Promotion:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Delete Promotion by ID
router.delete("/deletePromotions/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedPromotion = await Promotion.findByIdAndDelete(id);

    if (!deletedPromotion) {
      return res.status(404).json({ error: "Promotion not found" });
    }

    console.log("Deleted Promotion:", deletedPromotion);
    res.json({ message: "Promotion deleted successfully" });
  } catch (error) {
    console.error("Error deleting Promotion:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
