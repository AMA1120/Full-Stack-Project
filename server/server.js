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

//websocket for the chatroom
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5000 });

// Server-side WebSocket code
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        // Ensure data is stringified before sending
        client.send(JSON.stringify(data));
      }
    });
  });
});










//server.js listening port
app.listen(5000, async () => {
  await createConnection();
  console.log("Server Started");
});
const server = http.createServer(app);
module.exports = server;
