/// <reference types="cypress"/>

describe("Json Placeholder", () => {
  const url = "https://jsonplaceholder.cypress.io/comments";
  it("Test Case 01", () => {
    cy.request(url).should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length(500);
      expect(response).to.have.property("headers");
      expect(response).to.have.property("duration");

      /*{
    "postId": 1,
    "id": 3,
    "name": "odio adipisci rerum aut animi",
    "email": "Nikita@garfield.biz",
    "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  } */
      assert.equal(response.body[2].postId, 1);
      assert.equal(response.body[2].id, 3);
      assert.equal(response.body[2].name, "odio adipisci rerum aut animi");
      assert.equal(response.body[2].email, "Nikita@garfield.biz");
      assert.equal(
        response.body[2].body,
        "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
      );
    });
  });

  it("Test Case 02", () => {
    cy.request(url).should((response) => {
      expect(response.body[2].postId).to.eq(1);
      expect(response.body[2].id).to.eq(3);
      expect(response.body[2].name).to.eq("odio adipisci rerum aut animi");
      expect(response.body[2].email).to.eq("Nikita@garfield.biz");
    });
  });
});
