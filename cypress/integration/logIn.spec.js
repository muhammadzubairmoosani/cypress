/// <reference types="cypress"/>

describe("Login page unit test-cases", () => {
  beforeEach(() => {
    cy.link("/login");
  });

  it("should contain login card title", () => {
    cy.get("h1").contains("Login");
  });

  it("should contain footer title", () => {
    cy.get(".Home_footer__1WdhD").contains("Private routing example");
  });

  it("should go to sign-up page", () => {
    cy.get("a").contains("Create an account now!").click();
    cy.matchUrl("/signup");
  });

  it("should show error message if required input field is empty", () => {
    cy.form_validator("#login_form");
  });

  it("should not login", () => {
    cy.fixture("example").then((data) => {
      cy.logIn(
        data.invalid_credentials.username,
        data.invalid_credentials.password
      );

      cy.get(".MuiSnackbarContent-message").contains(data.logIn_error_message);
    });
  });

  it("should login", () => {
    cy.fixture("example").then((data) => {
      cy.set_session(
        data.valid_credentials.username,
        data.valid_credentials.password
      );

      cy.logIn(
        data.valid_credentials.username,
        data.valid_credentials.password
      );
      cy.get(".MuiSnackbarContent-message").contains(
        data.logIn_success_message
      );

      cy.matchUrl("/profile");
      cy.remove_session();
    });
  });
});
