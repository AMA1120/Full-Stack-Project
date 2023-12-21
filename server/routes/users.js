const express = require("express");
const Users = require("../models/users");
const mongoose = require("mongoose");
const router = express.Router();
const User = mongoose.model("Userinfo");
const bcrypt = require("bcrypt");




//Client side
//Register users

router.post("/register", async (req, res) => { 
  const { fullName, teleno, city, email, uname, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ uname });
    if (oldUser) {
      res.send({ error: "User Exists" });
    } else {
      await User.create({
        fullName,
        teleno,
        city,
        email,
        uname,
        password: encryptedPassword,
      });
      res.send({ status: "ok" });
    }
  } catch (error) {
    console.error("Error creating user:", error.message);
    res.status(500).send({ status: "error", error: error.message });
  }
});





  




//Customer profile update

















//Admin side 
//get Users

router.route('/getusers').get(async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error('Error fetching user data:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//delete users



router.delete("/deleteusers", async (req, res) => { 
  const { uname } = req.body;
  
  try {
    const deletedUser = await User.findOneAndDelete({ uname });
    
    if (deletedUser) {
      res.json({ success: true, message: 'User deleted successfully.' });
    } else {
      res.json({ error: "User not found or already deleted." });
    }
  } catch (error) {
    console.error("Error deleting user:", error.message);
    res.status(500).json({ status: "error", error: error.message });
  }
});






module.exports = router;
