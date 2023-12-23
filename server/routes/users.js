const express = require("express");
const Users = require("../models/users");
const mongoose = require("mongoose");
const router = express.Router();
const User = mongoose.model("Userinfo");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET ="kfjvd6574393hrerfhjnn?hyhhe[]bhen ";

//client side
//register users

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





//user login



router.post("/login-users", async (req, res) => { 
  try {
    const { uname, password } = req.body;  // Corrected the destructuring syntax
    const user = await User.findOne({ uname });  // Corrected the method name

    if (!user) {
      return res.json({ error: "User Not found" });  // Return a JSON response
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {

      //generate JWT token
      const token = jwt.sign({}, JWT_SECRET);
      
      return res.json({ status: "ok", data: "Successfully logged in",token});
    } else {
      return res.json({ status: "error", error: "Invalid Password" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });  // Handle server error
  }
});





//admin side 

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

//


router.post("/userprofile", async (req, res) => {
    // const { token } = req.body;
    // console.log("Received token:", token);
  
    // try {
    //   const user = jwt.verify(token, JWT_SECRET); // Use JWT_SECRET here
    //   console.log("Decoded user:", user);
  
    //   const foundUser = await users.findOne({ uname: user.uname });
  
    //   if (foundUser) {
    //     res.send({ status: "ok", data: foundUser });
    //   } else {
    //     res.send({ status: "error", data: "User not found" });
    //   }
    // } catch (error) {
    //   console.error(error);
    //   res.send({ status: "error", data: error.message });
    // }

    try {
      const { token } = req.body;
      console.log("Received token:", token);
  
      // Verify the token using the JWT_SECRET
      const user = jwt.verify(token, JWT_SECRET);
      console.log("Decoded user:", user);
  
      // Assuming you have a 'users' collection or model
      const foundUser = await users.findOne({ uname: user.uname });
  
      if (foundUser) {
        res.send({ status: "ok", data: foundUser });
      } else {
        res.send({ status: "error", data: "User not found" });
      }
    } catch (error) {
      console.error(error);
  
      // Return a proper JSON response with an error message
      res.status(500).json({ status: "error", data: error.message });
    }
  });
  
  // Endpoint for deleting user details
  router.delete("/deleteuser", async (req, res) => {
    const { token } = req.body;
    console.log("Received token:", token);
  
    try {
      const user = jwt.verify(token, JWT_SECRET); // Use JWT_SECRET here
      console.log("Decoded user:", user);
  
      const deletedUser = await users.findOneAndDelete({ uname: user.uname });
  
      if (deletedUser) {
        res.send({ status: "ok", message: "User deleted successfully" });
      } else {
        res.send({ status: "error", data: "User not found" });
      }
    } catch (error) {
      console.error(error);
      res.send({ status: "error", data: error.message });
    }
  });
  









module.exports = router;
