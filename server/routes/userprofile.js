const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const router = express.Router();

const userprofileRouter = require('./routes/userprofile');
app.use('/api', userprofileRouter);

// // Define a mongoose schema for the user
// const userSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     mobilenumber: String,
//     city: String,
//     orders: [{ id: Number, date: String, total: Number }],
//   });
  
//   const User = mongoose.model('User', userSchema);
  
//   app.use(bodyParser.json());
  
//   // Define a route to handle the delete request
//   app.delete('/api/users/:userId', async (req, res) => {
//     try {
//       const userId = req.params.userId;
//       await User.findByIdAndRemove(userId);
//       res.status(200).json({ success: true, message: 'User deleted successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ success: false, message: 'Internal server error' });
//     }
//   });

const JWT_SECRET = 'your-secret-key'; // Replace with your actual secret key

router.post("/userprofile", async (req, res) => {
  const { token } = req.body;
  console.log("Received token:", token);

  try {
    const user = jwt.verify(token, JWT_SECRET); // Use JWT_SECRET here
    console.log("Decoded user:", user);

    const foundUser = await User.findOne({ uname: user.uname });

    if (foundUser) {
      res.send({ status: "ok", data: foundUser });
    } else {
      res.send({ status: "error", data: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.send({ status: "error", data: error.message });
  }
});

// Endpoint for deleting user details
router.delete("/deleteuser", async (req, res) => {
  const { token } = req.body;
  console.log("Received token:", token);

  try {
    const user = jwt.verify(token, JWT_SECRET); // Use JWT_SECRET here
    console.log("Decoded user:", user);

    const deletedUser = await User.findOneAndDelete({ uname: user.uname });

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


  // Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});