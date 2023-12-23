const mongoose = require("mongoose");

const UserProfileModel = {
    username: '', 
    email: '', 
    mobilenumber: '', 
    city: '', 
  };
  
  export default UserProfileModel;

module.exports = mongoose.model("userprofile", userprofileSchema);