// https://docs.cypress.io/api/introduction/api.html

describe("Exercise 0", () => {
  it("visits the app root", () => { // @TODO Update when landing page is created
    cy.visit("/");
    cy.contains("h1", "Welcome!");
  });
});
