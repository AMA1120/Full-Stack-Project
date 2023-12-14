const express = require("express");
const Users = require("../models/users");
const mongoose = require("mongoose");


const router = express.Router();

//register users

// router.post("/register", (req, res) => {
//     let newUser = new Users(req.body);
    
//     newUser.save()
//       .then(() => {
//         return res.status(200).json({
//           success: "Post saved successfully",
//         });
//       })
//       .catch((err) => {
//         return res.status(400).json({
//           error: err,
//         });
//       });
//   });
  



const User = mongoose.model("Userinfo");


router.post("/register", async (req, res) => { 
  const { fullName, teleno, city,email,uname,password } = req.body;
  try {
    await User.create({
      fullName,
      teleno,
      city,
      email,
      uname,
      password
    });
    res.send({ status: "ok" });
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).send({ status: 'error', error: error.message });
  }
});













//Delete Users
// router.delete("/delete/:fname", async (req, res) => {
//     const Fname = req.params.fname;
  
//     try {
//       await Users.findByIdAndDelete(fname);
//       return res.status(200).json({
//         success: "User deleted successfully",
//       });
//     } catch (err) {
//       return res.status(400).json({
//         error: err,
//       });
//     }
//   });
  

  



  module.exports = router;
  