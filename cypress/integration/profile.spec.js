/// <reference types="cypress"/>

describe("Profile page unit test-cases", () => {
  before(() => {
    cy.fixture("example").then((data) => {
      cy.set_session(
        data.valid_credentials.username,
        data.valid_credentials.password,
        true
      );
    });
  });
  beforeEach(() => {
    cy.link("/profile");
  });

  it("should contant heading", () => {
    cy.get("h1").contains('Welcome "admin" to the profile page');
  });

  it("looggedIn user would not access to login page", () => {
    cy.link("/login");
    cy.matchUrl("/");
  });

  it("looggedIn user would not access to sign-up page", () => {
    cy.link("/signup");
    cy.matchUrl("/");
  });

  it.only("looggedIn user access to home page", () => {
    cy.link("/");
    cy.matchUrl("/");
  });

  it("should contain footer title", () => {
    cy.get(".Home_footer__1WdhD").contains("Private routing example");
  });

  it("should go to home page", () => {
    cy.get(":nth-child(2) > .MuiButtonBase-root")
      .contains("Go to home")
      .click();

    cy.matchUrl("/");
  });

  it("should go to home page", () => {
    cy.fixture("example").then((data) => {
      cy.get(":nth-child(3) > .MuiButtonBase-root")
        .contains("Sign out")
        .click();

      cy.session_validator(
        data.valid_credentials.username,
        data.valid_credentials.password,
        false
      );
      cy.matchUrl("/login");
    });
  });
});
