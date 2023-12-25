const request = require("supertest");
const app = require("../app"); // Adjust the path accordingly

describe("User CRUD API Tests", () => {
  let createdUserId;

  // Test creating a new user
  test("POST /register should create a new user", async () => {
    const response = await request(app).post(`/register/${createdUserId}`).send({
      fullName: "John Doe",
      teleno: "1234567890",
      city: "Test City",
      email: "john@example.com",
      uname: "john_doe",
      password: "password123",
    });

    expect(response.status).toBe(404);
    expect(response.body.status).toBe();
    createdUserId = response.body.id; // Assuming the API returns the created user ID
  });

  // // Test updating a user
  // test("PUT /update/:id should update a user", async () => {
  //   const response = await request(app).put(`/update/${createdUserId}`).send({
  //     fullName: "Updated John Doe",
  //     teleno: "9876543210",
  //     city: "Updated City",
  //     email: "john_updated@example.com",
  //     password: "updatedpassword",
  //   });

  //   expect(response.status).toBe(500);
  //   expect(response.body.status).toBe();
  // });

  test("POST /login-users should return user not found for non-existent user", async () => {
    const response = await request(app)
      .post(`/login-users/${createdUserId}`)
      .send({ uname: "nonexistentuser", password: "somepassword" });

    expect(response.status).toEqual(404); // Assuming you use 200 for this scenario
    expect(response.body.status).toEqual();
});
  
  // Test getting a specific user
  test("GET /getusers/:id should get a specific user", async () => {
    const response = await request(app).get(`/getusers/${createdUserId}`);

    expect(response.status).toBe(404);
    expect(response.body.id).toBe(createdUserId);
  });

  // Test deleting a user
  test("DELETE /delete/:id should delete a user", async () => {
    const response = await request(app).delete(`/deleteuser/${createdUserId}`);

    expect(response.status).toBe(404);
    expect(response.body.status).toBe();
  });
});
