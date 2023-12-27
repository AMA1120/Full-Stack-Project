const app = require("./app");
const mongoose = require("mongoose");
const http = require("http");
const WebSocket = require('ws');

// MongoDB Atlas connection URL
const DB_URL = "mongodb+srv://pkkimansha27:resturant123@resturant.c1gnqtq.mongodb.net/?retryWrites=true&w=majority";

// Function to create MongoDB connection
const createConnection = async () => {
  try {
    await mongoose.connect(DB_URL, {
      dbName: "test",
    });
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

// Create an HTTP server using the app
const server = http.createServer(app);

// Create a WebSocket server using the same server instance
const wss = new WebSocket.Server({ server });

// WebSocket server code
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

// Start the combined server on port 4000
server.listen(4000, async () => {
  await createConnection();
  console.log("Server Started");
});

// Export the server instance for testing or other purposes
module.exports = server;

