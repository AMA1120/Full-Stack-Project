const express = require("express");
const app = express();
const mongoose = require('mongoose');


const DB_URL = 'mongodb+srv://pkkimansha27:resturant123@resturant.c1gnqtq.mongodb.net/?retryWrites=true&w=majority'
app.listen(4000, () => {
    console.log("Server Started");
  });

  mongoose.connect(DB_URL)
  .then(() =>{
    console.log('DB Connected');

  })
  .catch((err)=> console.log('DB connection error,err'));