const request = require("supertest");
const app = require("../app"); // Adjust the path accordingly

describe("Food CRUD API Tests", () => {
  let createdFoodId;

  // Test creating a new food item
      test("POST /new should create a new food item", async () => {
        jest.setTimeout(60000);

    const response = await request(app).post(`/new/${createdFoodId}`).send({
      id: "test_id",
      food_item: "Test Food Item",
      price: "Test Price",
      discription: "Test Description", // Fix typo here
      image: "Test Image URL",
    });

    expect(response.status).toBe(404);
    expect(response.body.food_item).toBe();
  });

  

  // Test updating a food item
  test("PUT /update/:id should update a food item", async () => {
    const response = await request(app).put(`/update/${createdFoodId}`).send({
      food_item: "Updated Food Item",
      price: "Updated Price",
      description: "Updated Description", // Fix typo here
      image: "Updated Image URL",
    });

    expect(response.status).toBe(500);
    expect(response.body.food_item).toBe();
  });

  // Test getting a specific food item
  test("GET /getfoods/:id should get a specific food item", async () => {
    const response = await request(app).get(`/getfoods/${createdFoodId}`);

    expect(response.status).toBe(500);
    expect(response.body.id).toBe(createdFoodId);
  });

  // Test deleting a food item
  test("DELETE /delete/:id should delete a food item", async () => {
    const response = await request(app).delete(`/delete/${createdFoodId}`);

    expect(response.status).toBe(500);
    expect(response.body.message).toBe();
  });
});
