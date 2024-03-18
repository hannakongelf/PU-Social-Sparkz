describe("Search spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Stiv Heks");
    cy.contains("Bro, Bro, Brille");
    cy.contains("Sort by Name ");

    cy.get("input").first().click().type("Kims lek");

    cy.contains("Stiv Heks").should("not.exist");

    cy.get("input").first().click().clear();

    cy.contains("Stiv Heks");

    cy.get("button").contains("CARD").click()

    cy.contains("Stiv Heks").should("not.exist");
    cy.contains("Haien kommer");

    cy.contains("Haien kommer").click();

    cy.contains("CARD");


  });
});
