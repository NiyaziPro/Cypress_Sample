/// <reference types="cypress"/>

describe("Post with Auth", () => {
  it("Test", () => {
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

      expect(response.body.booking.firstname).to.eq("Nikko");
      expect(response.body.booking.lastname).to.eq("Tester");
      expect(response.body.booking.totalprice).to.eq(123);
      expect(response.body.booking.depositpaid).to.eq(true);
      expect(response.body.booking.bookingdates.checkin).to.eq("2024-01-01");
      expect(response.body.booking.bookingdates.checkout).to.eq("2024-01-02");
      expect(response.body.booking.additionalneeds).to.eq("All inclusive");
    });
  });
});
