describe("Exercise 1", () => {
    it("Alerts changes", () => {
        cy.visit("/boards");
        cy.contains("New Board +").click();
        cy.contains("div", "Board 4");
        cy.contains("span", 'Board Created: Board 4')
    });
  });
  