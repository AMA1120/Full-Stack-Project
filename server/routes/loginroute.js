// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('./model'); // Assuming model.js is in the same directory
// /*const User = mongoose.model("user"); */

// const router = express.Router();

// // Endpoint for user login

// router.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });

//     if (!user) {
//       return res.json({ error: 'User not found' });
//     }

//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (passwordMatch) {
//       const token = jwt.sign({ username }, 'your-secret-key', { expiresIn: '1h' });
//       return res.json({ status: 'ok', data: token });
//     } else {
//       return res.json({ error: 'Invalid password' });
//     }
//   } catch (error) {
//     return res.json({ status: 'error', error: 'Internal server error' });
//   }
  
// });



// module.exports = router;