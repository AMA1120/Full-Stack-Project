const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
    {
     fullName : {
        type: String,
        required: true

     },
    teleno: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

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
    collection: "Userinfo",
  }
);

module.exports = mongoose.model("Userinfo", UserDetailsSchema);
