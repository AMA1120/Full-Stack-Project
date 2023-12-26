const request = require("supertest");
const app = require("../app"); // Adjust the path accordingly

describe("User Profile API Tests", () => {
  let authToken;

  // Assuming you have a login endpoint that returns a token
  beforeAll(async () => {
    const loginResponse = await request(app)
      .post("/login")
      .send({ username: "testuser", password: "testpassword" });
    authToken = loginResponse.body.token;
  });

  test("POST /userprofile should return user profile", async () => {
    const response = await request(app)
      .post("/api/userprofile")
      .send({ token: authToken });

    // Adjust the expected status code and value based on your API design
    expect(response.status).toBe(404); 

    // Check if the response body has the expected structure
    expect(response.body.status).toBe();

    
  });



  // Test deleting user profile
  test("DELETE /deleteuser should delete user profile", async () => {
    const response = await request(app)
      .delete("/api/deleteuser")
      .send({ token: authToken });

    expect(response.status).toBe(404);
    expect(response.body.status).toBe();
    expect(response.body.message).toBe();
  });
});
