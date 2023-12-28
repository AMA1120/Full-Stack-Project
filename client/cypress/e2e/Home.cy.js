// cypress/integration/home_spec.js

describe("Home Page", () => {
  beforeEach(() => {
    // Visit the Home page before each test
    cy.visit("http://localhost:3000/Home");
  });

  it("should display the menu with food items", () => {
    // Verify that the food cards are present
    cy.get(".card").should("have.length.greaterThan", 0);
  });

  it('should navigate to login page when "Order Now" is clicked without login', () => {
    // Click the "Order Now" button on the first food card
    cy.get(".order-button").first().click();

    // Verify the navigation to the login page
    cy.url().should("include", "/login");
  });

  it("should allow selecting a quantity for each food item", () => {
    // Select a quantity for the first food item
    cy.get(".card").first().find("select").select("2");

    // Verify that the selected quantity is updated
    cy.get(".card").first().find("select").should("have.value", "2");
  });

  it('should navigate to the details page when "Order Now" is clicked after login', () => {
    // Login using a token (replace 'your-token-here' with an actual token)
    cy.window().then((win) => {
      win.localStorage.setItem("token", "your-token-here");
    });

    // Click the "Order Now" button on the first food card
    cy.get(".order-button").first().click();

    // Verify the navigation to the details page
    cy.url().should("match", /\/menu\/\w+/);
  });
});
