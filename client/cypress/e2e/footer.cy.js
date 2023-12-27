describe("Footer Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000"); // Update the URL based on your app's URL
  });

  it("displays the logo", () => {
    cy.get(".logo").should("be.visible");
  });

  it("displays social media icons", () => {
    cy.get(".footer-icons").should("be.visible");
    cy.get(".icon").should("have.length", 4); // Assuming you have four social media icons
  });

  it("navigates to Home page", () => {
    cy.contains("Home").click();
    cy.url().should("include", "/");
  });

  it("navigates to Our Menu page", () => {
    cy.contains("Our Menu").click();
    // Adjust the URL based on your routing logic
    cy.url().should("include", "/menu/");
  });

  it("navigates to View Cart page", () => {
    cy.contains("View Cart").click();
    cy.url().should("include", "/cart");
  });

  it("navigates to Profile page", () => {
    cy.contains("Profile").click();
    cy.url().should("include", "/userprofile");
  });

  it("navigates to Login page", () => {
    cy.contains("Login").click();
    cy.url().should("include", "/login");
  });

  it("displays contact information", () => {
    cy.get(".Last-footer").should("be.visible");
    cy.contains("+94 345627892").should("be.visible");
    cy.contains("fullstack@gmail.com").should("be.visible");
    cy.contains("Homagama, Sri Lanka.").should("be.visible");
  });
});
