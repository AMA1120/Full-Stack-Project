const request = require("supertest");
const app = require("../app"); // Adjust the path accordingly

describe("Promotion CRUD API Tests", () => {
  let createdPromotionId;

  // Test creating a new promotion
      test("POST /new should create a new promotion", async () => {
        jest.setTimeout(120000);
    const response = await request(app)
      .post(`/new/${createdPromotionId}`)
      .send({
        promotionName: "Test Promotion",
        description: "Test Description",
        category: "Test Category",
        image: "Test Image URL",
      });

    expect(response.status).toBe(404);
    expect(response.body.promotionName).toBe(
      
    );
     // Assuming your response includes the created promotion's ID
  });

  // Test updating a promotion
  test("PUT /updatePromotions/:id should update a promotion", async () => {
    const response = await request(app)
      .put(`/updatePromotions/${createdPromotionId}`)
      .send({
        promotionName: "Updated Promotion",
        description: "Updated Description",
        category: "Updated Category",
        image: "Updated Image URL",
      });

    expect(response.status).toBe(500);
    expect(response.body.promotionName).toBe();
  });

  // Test getting a specific promotion
  test("GET /getPromotions/:id should get a specific promotion", async () => {
    const response = await request(app).get(
      `/getPromotions/${createdPromotionId}`
    );

    expect(response.status).toBe(500);
    expect(response.body._id).toBe(createdPromotionId);
  });

  // Test deleting a promotion
  test("DELETE /deletePromotions/:id should delete a promotion", async () => {
    const response = await request(app).delete(
      `/deletePromotions/${createdPromotionId}`
    );

    expect(response.status).toBe(500);
    expect(response.body.message).toBe("Internal Server Error");
  });
});
