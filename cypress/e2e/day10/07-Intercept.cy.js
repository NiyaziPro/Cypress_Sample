/// <reference types="cypress"/>

describe("Intercept", () => {
  it("Test 01", () => {
    cy.intercept("GET", "https://restful-booker.herokuapp.com/booking", {
      statusCode: 200,
      body: {
        bookingid: 1,
        booking: {
          firstname: "Nikko",
          lastname: "Tester",
          totalprice: 123,
          depositpaid: true,
          bookingdates: {
            checkin: "2024-01-01",
            checkout: "2024-01-02",
          },
          additionalneeds: "All inclusive",
        },
      },
    }).as("postBooking");

    cy.request({
      url: "https://restful-booker.herokuapp.com/booking",
      method: "POST",
      auth: {
        username: "admin",
        password: "password123",
      },
      body: {
        firstname: "Nikko",
        lastname: "Tester",
        totalprice: 123,
        depositpaid: true,
        bookingdates: {
          checkin: "2024-01-01",
          checkout: "2024-01-02",
        },
        additionalneeds: "All inclusive",
      },
      token: "123abc",
    }).then((response) => {
      console.log(response);

      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("bookingid");
      expect(response.body.booking).to.have.property("firstname", "Nikko");
      expect(response.body.booking).to.have.property("lastname", "Tester");
      expect(response.body.booking).to.have.property("totalprice", 123);
      expect(response.body.booking).to.have.property("depositpaid", true);
      expect(response.body.booking.bookingdates).to.have.property(
        "checkin",
        "2024-01-01"
      );
      expect(response.body.booking.bookingdates).to.have.property(
        "checkout",
        "2024-01-02"
      );
      expect(response.body.booking).to.have.property(
        "additionalneeds",
        "All inclusive"
      );
    });
  });

  it("Test 02", () => {
    cy.visit("https://example.cypress.io/commands/waiting");
    //cy.intercept('GET', 'https://jsonplaceholder.cypress.io/comments').as('getComments')
    cy.intercept("GET", "**/comments/*").as("getComments");

    cy.get(".network-btn").click();
    cy.wait("@getComments")
      .its("response")
      .then((response) => {
        console.log(response);

        assert.equal(response.statusCode, 200);
      });
  });
});
