/// <reference types="cypress"/>

describe("Sign-up page unit test-cases", () => {
  beforeEach(() => {
    cy.link("signup");
  });

  it("should contain sign-up card title", () => {
    cy.get("h1").contains("Sign up");
  });

  it("should contain footer title", () => {
    cy.get(".Home_footer__1WdhD").contains("Private routing example");
  });

  it("should clickable eye icon", () => {
    cy.fixture("example").then((data) => {
      cy.get("#outlined-adornment-username").type(
        data.valid_credentials.username
      );
      cy.get("#outlined-adornment-password").type(
        data.valid_credentials.password
      );

      cy.get(
        ".makeStyles-field-6 > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > .MuiIconButton-label > .material-icons"
      )
        .invoke("attr", "type", "password")
        .should("have.attr", "type", "password")
        .click();
    });
  });

  it("should go to login page", () => {
    cy.get("a").contains("Already have an account!").click();
    cy.matchUrl("/login");
  });

  it("should sign-up", () => {
    cy.fixture("example").then((data) => {
      cy.get("#outlined-adornment-username").type(
        data.valid_credentials.username
      );
      cy.get("#outlined-adornment-password").type(
        data.valid_credentials.password
      );

      cy.get(".makeStyles-wrapper-7 > .MuiButtonBase-root")
        .contains("Sign-up")
        .click()
        .then(() => {
          cy.wait(2000);

          cy.session_validator(
            data.valid_credentials.username,
            data.valid_credentials.password,
            false
          );

          cy.get(".MuiSnackbarContent-message").contains(
            data.signUp_success_message
          );
          cy.matchUrl("/login");
        });
    });
  });

  it("should show error message if required input field is empty", () => {
    cy.form_validator("#sign-up_form");
  });
});
