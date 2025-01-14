describe("Navigation", () => {
  it("Back, Forward , Refresh", () => {
    cy.visit("https://www.getlandestate.com");

    cy.wait(3000);
    cy.get('[data-rr-ui-event-key="4"]').click();

    cy.wait(3000);
    cy.go("back");
    //cy.go(-1); - onceki sayfaya gitmek icin buda kullanilabilir

    cy.wait(3000);
    cy.go("forward");
    //cy.go(1); - sonraki sayfaya gitmek icin buda kullanilabilir

    cy.wait(2000);
    cy.reload();
  });

  it.only("Chaining Navigation", () => {
    cy.visit("https://www.getlandestate.com");

    cy.wait(3000);
    cy.get('[data-rr-ui-event-key="4"]').click();

    cy.wait(3000);
    cy.go("back").go("forward").go(-1).go(1);

    cy.reload(true);
    // cy.reload(true): Sayfayi hafizadan(cache'den) degil yeniden yukler
  });
});
