const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Define a mongoose schema for the user
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    mobilenumber: String,
    city: String,
    orders: [{ id: Number, date: String, total: Number }],
  });
  
  const User = mongoose.model('User', userSchema);
  
  app.use(bodyParser.json());
  
  // Define a route to handle the delete request
  app.delete('/api/users/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      await User.findByIdAndRemove(userId);
      res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });

  // Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});