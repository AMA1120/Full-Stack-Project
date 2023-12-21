const express = require("express");
const Admins = require("../models/admin");
const mongoose = require("mongoose");
const router = express.Router();
const Admin = mongoose.model("admininfo");



const jwt = require("jsonwebtoken");
const JWT_SECRET ="kfjvd6574393hrerfhjnn?hyhhe[]bhen ";


//admin login

router.post("/login-admin", async (req, res) => { 
const {uname,password} = req.body;
const admin = await Admin.findOne({uname});
if(!admin){
    return res.json({error : "Incorrect Username"});
}

if (password === admin.password) {
    const token = jwt.sign({}, JWT_SECRET);
    return res.status(201).json({ status: "ok", data: token });
  } else {
    return res.status(401).json({ error: "Incorrect Password" });
  }
});









module.exports = router;