describe("User Profile Page", () => {
  beforeEach(() => {
    // Assuming your app runs on http://localhost:3000
    cy.visit("http://localhost:3000/userprofile");
  });

  it("displays user details", () => {
    // Assuming the user's details are displayed in a table
    cy.get(".user-details-table").should("be.visible");
    cy.contains("Full Name:").should("be.visible");
    cy.contains("Email:").should("be.visible");
    cy.contains("Mobile Number:").should("be.visible");
    cy.contains("City:").should("be.visible");
  });

  it("allows user to edit details", () => {
    // Click on the "Edit" button
    cy.contains("Edit").click();

    // Assuming your input fields have unique names
    cy.get('input[name="fullName"]')
      .should("be.visible")
      .clear()
      .type("fullName");
    cy.get('input[name="email"]')
      .should("be.visible")
      .clear()
      .type("newemail@example.com");
    cy.get('input[name="teleno"]')
      .should("be.visible")
      .clear()
      .type("1234567890");
    cy.get('input[name="city"]').should("be.visible").clear().type("New City");

    // Click on the "Save" button
    cy.contains("Save").click();

    

    
  });

  it("allows user to cancel edit", () => {
    // Click on the "Edit" button
    cy.contains("Edit").click();

    // Assuming your input fields have unique names
    cy.get('input[name="fullName"]')
      .should("be.visible")
      .clear()
      .type("Cancelled Edit");

    // Click on the "Cancel" button
    cy.contains("Cancel").click();

    // Confirm that the original details are still displayed
    cy.contains("Cancelled Edit").should("not.exist");
  });

  it("allows user to delete account", () => {
    // Click on the "Delete" button
    // Click on the "Delete" button
    cy.contains("Delete").click();



     
  });
});
