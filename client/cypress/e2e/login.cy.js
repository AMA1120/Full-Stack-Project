// cypress/integration/login.spec.js

describe("Login Page", () => {
  it("should display login form and handle login", () => {
    // Visit the login page
    cy.visit("http://localhost:3000/login");

    // Check if the form elements are present
    cy.get(".login-container").should("exist");
    cy.get(".h").should("have.text", "Login");
    cy.get(".form-field").should("have.length", 2);
    cy.get('button[type="submit"]').should("have.text", "Log In");

    // Perform a login with valid credentials
    cy.get(".form-field").first().type("your-username");
    cy.get(".form-field").last().type("your-password");
    cy.get('button[type="submit"]').click();

    // Verify that registration was successful
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Login successfully!");
    });

    // // Verify redirection to the Login page
    // cy.url().should("include", "/Userprofile");

    // Perform a login with invalid credentials
    cy.visit("http://localhost:3000/login"); // Refresh the page
    cy.get(".form-field").first().type("invalid-username");
    cy.get(".form-field").last().type("invalid-password");
    cy.get('button[type="submit"]').click();

    // Check if error message is displayed
    cy.get("p").should(
      "have.text",
      "Error during login. Please try again.Not a member yet? Register with us."
    );
  });
});
