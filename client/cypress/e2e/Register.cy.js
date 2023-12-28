// cypress/integration/register_spec.js

describe("Register Page", () => {
  beforeEach(() => {
    // Visit the Register page before each test
    cy.visit("http://localhost:3000/register");
  });

  it("should display the registration form", () => {
    // Verify that the form elements are present
    cy.get('input[name="fullName"]').should("exist");
    cy.get('input[name="phoneNo"]').should("exist");
    cy.get('input[name="City"]').should("exist");
    cy.get('input[name="email"]').should("exist");
    cy.get('input[name="username"]').should("exist");
    cy.get('input[name="password"]').should("exist");
    cy.get('input[name="agreeToTerms"]').should("exist");
    cy.get('button[type="submit"]').should("exist");
  });

  it("should display error messages on form submission with invalid data", () => {
    // Submit the form without entering any data
    cy.get('button[type="submit"]').click();

    // Verify error messages
    cy.get("#full-name-error").should("be.visible");
    cy.get("#phoneNo-error").should("be.visible");
    cy.get("#City-error").should("be.visible");
    cy.get("#email-error").should("be.visible");
    cy.get("#username-error").should("be.visible");
    cy.get("#password-error").should("be.visible");
    cy.get("#terms-error").should("be.visible");
  });

  it("should successfully register with valid data", () => {
    // Enter valid data in the form
    cy.get('input[name="fullName"]').type("John Doe");
    cy.get('input[name="phoneNo"]').type("1234567890");
    cy.get('input[name="City"]').type("SomeCity");
    cy.get('input[name="email"]').type("john.doe@example.com");
    cy.get('input[name="username"]').type("johndoe");
    cy.get('input[name="password"]').type("securepassword");
    cy.get('input[name="agreeToTerms"]').check();

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verify that registration was successful
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Registered successfully!");
    });

    // Verify redirection to the Login page
    cy.url().should("include", "/Login");
  });
});
