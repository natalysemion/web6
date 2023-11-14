/// <reference types="cypress" />
describe("On first start app", () => {
  it("should have an empty URL on start", () => {
    cy.visit("/");

    cy.location("pathname").should("eq", "/");
    cy.location("search").should("be.empty");
  });

  it("should have an empty search", () => {
    cy.visit("/");

    cy.get("#name").should("have.value", "");
  });
});

describe("Search Component", () => {
  it("should update the URL when the name is changed", () => {
    cy.visit("/");

    const testName = "Rick";
    cy.get("#name").type(testName);

    cy.location("search").should("include", `name=${testName}`);
  });
});
