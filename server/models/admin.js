const mongoose = require("mongoose");

const adminloginSchema = new mongoose.Schema(
    {
     

    uname: {
      type: String,
      required: true,
      unique:true,
    },
    password: {
      type: String,
      required: true,
      
    },
  },
  {
    collection: "admininfo",
  }
);

module.exports = mongoose.model("admininfo", adminloginSchema);