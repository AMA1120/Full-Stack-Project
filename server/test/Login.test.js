// const request = require("supertest");
// const app = require("../app"); // Import the server app for testing

const request = require("supertest");
const app = require("../app"); // Replace with the path to your Express app file

describe("Login endpoint", () => {
  test("POST /login with valid credentials", async () => {
    const response = await request(app).post("/login").send({
      uname: "validuser",
      password: "validpassword",
    });

    expect(response.status).toBe(404);
    expect(response.body.data).toBe();
  });

  test("POST /login-users with invalid credentials", async () => {
    const response = await request(app).post("/login").send({
      uname: "invaliduser",
      password: "invalidpassword",
    });

    expect(response.status).toBe(404);
  });
});
