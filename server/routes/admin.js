const express = require("express");
const Admins = require("../models/admin");
const mongoose = require("mongoose");
const router = express.Router();
const Admin = mongoose.model("admininfo");






//admin login

router.post("/admin", async (req, res) => { 
const {uname,password} = req.body;
const admin = await Admin.findOne({uname});
if(!admin){
    return res.json({error : "Incorrect Username"});
}

if (password === admin.password) {
  
    return res.status(201).json({ status: "ok" });
  } else {
    return res.status(401).json({ error: "Incorrect Password" });
  }
});







module.exports = router;