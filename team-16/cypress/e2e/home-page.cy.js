describe("user visit our website home page", () => {
  it("should click on the general link", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.get(".home-container > :nth-child(2) > :nth-child(3)").click();
    // cy.get('[href="https://www.youtube.com/watch?v=lwqeNnboh_4"]')
    //   .invoke("removeAttr", "target")
    //   .click();

    // cy.url().should("include", "youtube");

    cy.get("nav > :nth-child(2) > :nth-child(2)").click();
    cy.get(".search-header > :nth-child(5)").should("be.visible");
    cy.get(".search-header > :nth-child(5)").click();
    cy.get(".result").should("be.visible");

    cy.get("#search-bar").type("react");
    cy.get(".search-header > :nth-child(4)").click();
    cy.get(".result").should("be.visible");

    cy.get("#search-bar").type("banana");
    cy.get(".search-header > :nth-child(4)").click();
    cy.contains("No results found").should("be.visible");
  });
});
