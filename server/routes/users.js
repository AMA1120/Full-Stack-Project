const express = require("express");
const Users = require("../models/users");
const mongoose = require("mongoose");
const router = express.Router();
const User = mongoose.model("Userinfo");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET ="kfjvd6574393hrerfhjnn?hyhhe[]bhen";

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
      const token = jwt.sign({ uname: user.uname}, JWT_SECRET);
      
      return res.json({ status: "ok", data: { token } });
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






//admin-delete users


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




// Post user details in userprofile
router.post("/userprofile", async (req, res) => {
  try {
    const { token } = req.body;
    console.log("Received token:", token);

    // Verify the token using the JWT_SECRET
    const decodedUser = jwt.verify(token, JWT_SECRET);
    console.log("Decoded user:", decodedUser);

    // Assuming you have a 'users' collection or model
    const foundUser = await User.findOne({ uname: decodedUser.uname });

    if (foundUser) {
      return res.json({ status: "ok", data: foundUser });
     
    } else {
      return res.status(404).json({ status: "error", error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "error", error: error.message });
  }
});



  // deleting user details from the profile page
router.delete("/deleteuser", async (req, res) => {
  const { token } = req.body;
  console.log("Received token:", token);

  try {
    // Verify the token using the JWT_SECRET
    const decodedUser = jwt.verify(token, JWT_SECRET);
    console.log("Decoded user:", decodedUser);

    // Assuming you have a 'users' collection or model
    const deletedUser = await User.findOneAndDelete({ uname: decodedUser.uname });

    if (deletedUser) {
      res.json({ status: "ok", message: "User deleted successfully" });
    } else {
      res.json({ status: "error", data: "User not found" });
    }
  } catch (error) {
    console.error(error);

    // Return a proper JSON response with an error message
    res.status(500).json({ status: "error", data: error.message });
  }
});

// Update
router.put("/updateuser", async (req, res) => {
  const { token, updatedUserDetails } = req.body;
  console.log("Received token:", token);
  console.log("Updated user details:", updatedUserDetails);

  try {
  //   JWT Screct key
    const decodedUser = jwt.verify(token, JWT_SECRET);
    console.log("Decoded user:", decodedUser);

    // user collection model
    const updatedUser = await User.findOneAndUpdate(
      { uname: decodedUser.uname },
      {
        $set: {
          fullName: updatedUserDetails.fullName,
          teleno: updatedUserDetails.teleno,
          city: updatedUserDetails.city,
          email: updatedUserDetails.email,
          uname: updatedUserDetails.newUname 
        }
      },
      { new: true } 
    );

    if (updatedUser) {
      res.json({ status: "ok", message: "User Profile updated successfully", data: updatedUser });
    } else {
      res.json({ status: "error", data: "User not found" });
    }
  } catch (error) {
    console.error(error);

  
    res.status(500).json({ status: "error", data: error.message });
  }
});

//get usersa
// router.get("/getusersa", verifyToken, async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json({ status: "ok", data: users });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ status: "error", data: error.message });
//   }
// });




module.exports = router;