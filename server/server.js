const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');


//import routes
const userRoutes = require('./routes/users');
app.use(cors());

//app middleware
app.use(bodyParser.json());

//route middleware
app.use(userRoutes);

//mongodb atlas connection
const DB_URL = 'mongodb+srv://pkkimansha27:resturant123@resturant.c1gnqtq.mongodb.net/?retryWrites=true&w=majority'

//server.js listening port
app.listen(4000, () => {
    console.log("Server Started");
  });

  mongoose.connect(DB_URL)
  .then(() =>{
    console.log('DB Connected');

  })
  .catch((err)=> console.log('DB connection error,err'));