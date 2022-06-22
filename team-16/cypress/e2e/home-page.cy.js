describe("Typical user journey through our website", () => {
  it("should visit the page and check that an expected element is visible", () => {
    cy.visit("http://localhost:3000");
    cy.wait(1000);
    cy.contains("Immutably changing arrays").should("be.visible");})
  it("should click the general button, select a link and open it correctly", () => {

    cy.get(".home-container > :nth-child(2) > :nth-child(3)").click();
    cy.get('[href="https://www.youtube.com/watch?v=lwqeNnboh_4"]').invoke('removeAttr', 'target').click();
    cy.url().should("include", "youtube");})
  it("Return to React app and select the Search button on the navbar", () => {
    cy.visit("http://localhost:3000");
    cy.get("nav > :nth-child(2) > :nth-child(2)").click();
    cy.get(".search-header > :nth-child(5)").should("be.visible");
  })
  it("Click the random button and check a result is displayed", () => {
    cy.get(".search-header > :nth-child(5)").click();
    cy.get(".result").should("be.visible");
  })
  it("Select the text input and type in react and check it is updated", () => {
    cy.get("#search-bar").type("react").should('have.value', 'react')
  })
  it("Click the search button and check a result is displayed", () => {
    cy.get(".search-header > :nth-child(4)").click();
    cy.get(".result").should("be.visible");
  })
  it("Select the text input and type in banana and check it is updated", () => {
    cy.get("#search-bar")
    .clear()
    .type("banana")
    .should('have.value', 'banana');
  })
  it("Click the search button and check no results found", () => {
    cy.get(".search-header > :nth-child(4)").click();
    cy.contains("No results found").should("be.visible");
  });
});
