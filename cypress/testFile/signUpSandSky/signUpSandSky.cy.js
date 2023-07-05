describe("Validate To Sky Sand & Create New User", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  it("Create Account On Sand Sky", () => {
    cy.signupCMD();
  });
});
