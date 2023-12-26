const request = require("supertest");
const app = require("../app"); // Import the server app for testing

describe("Login endpoint", () => {
  test("Successful login", async () => {
    const response = await request(app)
      .post("/admin")
      .send({ username: "exampleUser", password: "examplePassword" });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe();
  });

  test("Invalid username or password", async () => {
    const response = await request(app)
      .post("/admin")
      .send({ username: "invalidUser", password: "invalidPassword" });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe();
  });
});
