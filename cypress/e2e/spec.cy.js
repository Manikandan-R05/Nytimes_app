describe("Nytimes api fetch", () => {
  it("render default heading  ", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[datatest-id="cp-title"]')
      .should("exist")
      .should("have.text", "Most Popular New York Times Articles");
  });
  it("API requests  ", () => {
    cy.request(
      "GET",
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=PbYA24xyseFrrcavsfTNUGBuYvpORMVR"
    )
      .its("status")
      .should("equal", 200);
  });
  it("render article id in list", () => {
    cy.visit("http://localhost:3000/");
    cy.get("[datatest-id]").should("exist");
  });
  it("render API news title", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[datatest-id="cp-articletitle"]').should("exist");
  });
});
