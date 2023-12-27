// cypress/integration/navbar_spec.js

describe("Navbar Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000"); // Adjust the URL accordingly
  });

  it("should display the logo", () => {
    cy.get(".logo").should("be.visible");
  });

  it("should navigate to Home page", () => {
    cy.contains("Home").click();
    cy.url().should("include", "/");
  });

  
  // Add more tests for Menu Items, User Profile, Logout, and Login functionality
});
