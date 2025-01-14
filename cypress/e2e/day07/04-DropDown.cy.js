describe("DropDown", () => {
  it("Test case", () => {
    
    cy.visit("https://testcenter.techproeducation.com/index.php?page=dropdown");
    
    cy.get("#year").select("1990").should("have.value", "1990");
    
    cy.get("#state")
      .select("California")
      .then((stateValue) => expect(stateValue).to.value("CA"));
  });
});
