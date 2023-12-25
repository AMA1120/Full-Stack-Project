const request = require("supertest");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("./model");
const app = express();

// Your router code here
const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.json({ error: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      const token = jwt.sign({ username }, "your-secret-key", {
        expiresIn: "1h",
      });
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "Invalid password" });
    }
  } catch (error) {
    return res.json({ status: "error", error: "Internal server error" });
  }
});

app.use(express.json());
app.use("/api", router);

// Test case for the login endpoint
describe("POST /api/login", () => {
  it("should return a valid token on successful login", async () => {
    const userData = {
      username: "testuser",
      password: "testpassword",
    };

    // Assuming you have a valid user in your test database
    await User.create({
      username: userData.username,
      password: await bcrypt.hash(userData.password, 10),
    });

    const response = await request(app)
      .post("/api/login")
      .send(userData)
      .expect(200);

    expect(response.body.status).toBe("ok");
    expect(response.body.data).toBeDefined();
  });

  it("should return an error for invalid credentials", async () => {
    const invalidUserData = {
      username: "invaliduser",
      password: "invalidpassword",
    };

    const response = await request(app)
      .post("/api/login")
      .send(invalidUserData)
      .expect(200);

    expect(response.body.error).toBe("User not found");
  });
});

// Close the MongoDB connection after all tests are done
afterAll(async () => {
  await mongoose.connection.close();
});
