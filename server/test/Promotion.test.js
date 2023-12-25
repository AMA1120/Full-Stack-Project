
const request = require("supertest");
const app = require("../server");
// const app = server.app;// Import your Express app instance

//  server is listening on port 4000
const baseUrl = "/"; // Update this if routes are mounted on a different base URL.

// Test cases for the promotion routes
describe("Promotion Routes", () => {
      //Test for the "GET /" endpoint
      describe("GET /", () => {
            it('should return "Hello world"', async () => {
                  const response = await request(app).get(`${baseUrl}promotion`);
                  expect(response.status).toBe(200);
                  expect(response.text).toBe("Hello world");
            });
      });

      //Test for the "POST /new" endpoint
      describe("POST /new", () => {
            it("should create a new promotion", async () => {
                  const promotionData = {
                        promotionName: "Test Promotion",
                        description: "Test Description",
                        category: "Test Category",
                        image: "Test Image URL",
                  };

                  const response = await request(app)
                        .post(`${baseUrl}promotion/new`)
                        .send(promotionData);

                  expect(response.status).toBe(201);
                  expect(response.body).toHaveProperty("_id");
                  //  add more assertions based on the application logic
            });
      });

      // Test for the "GET /getPromotions" endpoint
        describe("GET /getPromotions", () => {
          it("should fetch all promotions", async () => {
            const response = await request(app).get(
              `${baseUrl}promotion/getPromotions`
            );
            expect(response.status).toBe(200);
            expect(response.body).toBeInstanceOf(Array);
            //  add more assertions based on the application logic
          });
        });

      // ...

      // Test for the "PUT /updatePromotions/:id" endpoint
        describe("PUT /updatePromotions/:id", () => {
          it("should update an existing promotion", async () => {
            const existingPromotion = await createTestPromotion(); // Helper function to create a test promotion

            const updatedData = {
              promotionName: "Updated Promotion",
              description: "Updated Description",
              category: "Updated Category",
              image: "Updated Image URL",
            };

            const response = await request(app)
              .put(`${baseUrl}promotion/updatePromotions/${existingPromotion._id}`)
              .send(updatedData);

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty(
              "_id",
              existingPromotion._id.toString()
            );
       //add more assertions based on the application logic
      });
      });

      // Test for the "GET /getPromotions/:id" endpoint
        describe("GET /getPromotions/:id", () => {
          it("should fetch a specific promotion by ID", async () => {
            const existingPromotion = await createTestPromotion(); // Helper function to create a test promotion

            const response = await request(app).get(
              `${baseUrl}promotion/getPromotions/${existingPromotion._id}`
            );

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty(
              "_id",
              existingPromotion._id.toString()
            );
       //add more assertions based on the application logic
      });

          it("should return 404 if promotion ID is not found", async () => {
            const nonExistingPromotionId = "nonexistentid";

            const response = await request(app).get(
              `${baseUrl}promotion/getPromotions/${nonExistingPromotionId}`
            );

            expect(response.status).toBe(404);
            // add more assertions based on the application logic
          });
        });

      // Test for the "DELETE /deletePromotions/:id" endpoint
        describe("DELETE /deletePromotions/:id", () => {
          it("should delete a specific promotion by ID", async () => {
            const existingPromotion = await createTestPromotion(); // Helper function to create a test promotion

            const response = await request(app).delete(
              `${baseUrl}promotion/deletePromotions/${existingPromotion._id}`
            );

            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty(
              "message",
              "Promotion deleted successfully"
            );
            //  add more assertions based on the application logic
          });

          it("should return 404 if promotion ID is not found", async () => {
            const nonExistingPromotionId = "nonexistentid";

            const response = await request(app).delete(
              `${baseUrl}promotion/deletePromotions/${nonExistingPromotionId}`
            );

            expect(response.status).toBe(404);
            //  add more assertions based on the application logic
          });
        });

      // Helper function to create a test promotion
        async function createTestPromotion() {
          const promotionData = {
            promotionName: "Test Promotion",
            description: "Test Description",
            category: "Test Category",
            image: "Test Image URL",
          };

          const response = await request(app)
            .post(`${baseUrl}promotion/new`)
            .send(promotionData);

          return response.body;
        }

  
      });

      //Close the server after all tests are done
      afterAll((done) => {
        app.close(() => {
          done();
        });
      });
