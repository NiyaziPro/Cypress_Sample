describe("Scroll", () => {
  it("Scrollintoview", () => {
    cy.visit("https://www.allovercommerce.com");

    cy.xpath("(//h2)[14]").scrollIntoView();
    //cy.get('.col-md-8 > .section-title > h2').scrollIntoView({duration:4000})
    cy.wait(3000);
    // scroll(x,y)
    cy.scrollTo(0, 500);
    cy.wait(1000);

    cy.scrollTo(0, 1000);
    cy.wait(1000);
    cy.scrollTo(0, 0);
  });
});
