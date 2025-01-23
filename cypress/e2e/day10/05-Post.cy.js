/// <reference types="cypress"/>

describe("Post", () => {
  const requestUrl = "https://jsonplaceholder.cypress.io/comments";
  it("Post 01", () => {
    cy.request("POST", requestUrl, {
      postId: 1,
      id: 501,
      title: "Cypress cok kolay",
      body: "JavaScript daha da kolay hale geldi",
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("postId", 1);
      expect(response.body).to.have.property("id", 501);
      expect(response.body).to.have.property("title", "Cypress cok kolay");
      expect(response.body).to.have.property(
        "body",
        "JavaScript daha da kolay hale geldi"
      );
    });
  });
});
