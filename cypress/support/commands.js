Cypress.Commands.add("link", (route) => cy.visit(route));

Cypress.Commands.add("logIn", (username, password) => {
  cy.get("#outlined-adornment-username").type(username);
  cy.get("#outlined-adornment-password").type(password);

  cy.get(".makeStyles-wrapper-7 > .MuiButtonBase-root")
    .contains("Login")
    .click();
});

Cypress.Commands.add(
  "set_session",
  (username, password, isLoggedIn = false) => {
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);
    sessionStorage.setItem("isLoggedIn", isLoggedIn);
  }
);

Cypress.Commands.add("session_validator", (username, password, isloggedIn) => {
  const _username = sessionStorage.getItem("username");
  const _password = sessionStorage.getItem("password");
  const _isLoggedIn = sessionStorage.getItem("isLoggedIn");

  expect(_username).to.eq(username);
  expect(_password).to.eq(password);
  expect(JSON.parse(_isLoggedIn)).to.eq(isloggedIn);
});

Cypress.Commands.add("matchUrl", (url) =>
  cy.url().should("eq", Cypress.config().baseUrl + url)
);

Cypress.Commands.add("form_validator", (form_id) => {
  cy.fixture("example").then((data) => {
    cy.get(form_id).within(() => {
      cy.get("#outlined-adornment-username")
        .then((el) => el[0].checkValidity())
        .should("be.false");

      cy.get("#outlined-adornment-password")
        .then((el) => el[0].checkValidity())
        .should("be.false");

      cy.get("#outlined-adornment-username")
        .invoke("prop", "validationMessage")
        .should("equal", data.empty_input_field_error_message);

      cy.get("#outlined-adornment-password")
        .invoke("prop", "validationMessage")
        .should("equal", data.empty_input_field_error_message);
    });
  });
});

Cypress.Commands.add("remove_session", () => {
  sessionStorage.clear();
});
