/// <reference types="cypress"/>

describe("Home page unit test-cases", () => {
  beforeEach(() => {
    cy.link("/");
  });

  it("should contain heading", () => {
    cy.get("h1").contains("Authenticated route example with NextJs");
  });

  it("should contain sub-heading", () => {
    cy.get("h2").contains("Welcome to the Home page");
  });

  it("should contain footer title", () => {
    cy.get(".Home_footer__1WdhD").contains("Private routing example");
  });

  it("should go to login page", () => {
    cy.remove_session();
    cy.get(".MuiButtonBase-root").contains("Login").click();
    cy.matchUrl("/login");
  });

  it("un-authenticated user should not access to authenticated routes", () => {
    cy.link("/profile");
    cy.matchUrl("/");
  });

  it("should go to profile page if user authenticated", () => {
    cy.fixture("example").then((data) => {
      cy.set_session(
        data.valid_credentials.username,
        data.valid_credentials.password,
        true
      );
      cy.link("/");
      cy.get(".MuiButtonBase-root").contains("Profile").click();
      cy.matchUrl("/profile");
    });
  });
});
