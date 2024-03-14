describe("Search spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Stiv Heks").click();
    cy.contains("Fra 2 til 4 spillere");
    cy.contains("Review for Sample Game 0");
    cy.contains("DICE")
    cy.contains("You have to be signed in to rate this game.");

  });
});
