describe("Exercise 2", () => {
  it("visits the app root url", () => {
    cy.visit("/")
    cy.contains("My Team").click()
    cy.contains("Team 1")
    cy.contains("Team 2")
    cy.contains("Boards").click()
    cy.url().should('include', '/boards')
  });
});
