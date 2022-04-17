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

  it("should go to login screen", () => {
    cy.get(".MuiButtonBase-root").contains("Login").click();
    cy.matchUrl("/login");
  });
});
