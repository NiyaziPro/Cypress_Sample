/// <reference types="cypress"/>

describe("Dummy Assert", () => {
  it("Test Case 01", () => {
    cy.request("https://reqres.in/api/users").should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("data");
      expect(response.body.data).to.have.length(6);
      expect(response).to.have.property("headers");
      expect(response).to.have.property("duration");
      /* {
            "id": 3,
            "email": "emma.wong@reqres.in",
            "first_name": "Emma",
            "last_name": "Wong",
            "avatar": "https://reqres.in/img/faces/3-image.jpg"
        } */
      assert.equal(response.body.data[2].id, 3);
      assert.equal(response.body.data[2].email, "emma.wong@reqres.in");
      assert.equal(response.body.data[2].first_name, "Emma");
      assert.equal(response.body.data[2].last_name, "Wong");
      assert.equal(
        response.body.data[2].avatar,
        "https://reqres.in/img/faces/3-image.jpg"
      );
    });
  });
});
