const app = require("./app");
const mongoose = require("mongoose");
const http = require("http");
//mongodb atlas connection
const DB_URL =
  "mongodb+srv://pkkimansha27:resturant123@resturant.c1gnqtq.mongodb.net/?retryWrites=true&w=majority";

const createConnection = async () => {
  try {
    await mongoose.connect(DB_URL, {
      //dbName: "test",
       dbName: "takeout",
    });
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

//server.js listening port
app.listen(4000, async () => {
  await createConnection();
  console.log("Server Started");
});
const server = http.createServer(app);
module.exports = server;
