/// <reference types="cypress"/>

describe("File Upload", () => {
  /*
    https://www.npmjs.com/package/cypress-file-upload

    npm install --save-dev cypress-file-upload
    */

  it("Single File Upload", () => {
    //cy.get('locate for upload').attachFile('path for upload from fixtures')
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.wait(3000);
    cy.get("#filesToUpload").attachFile("binary1.jpg");
  });
  it("Multiple File Upload 1", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.wait(3000);
    cy.get("#filesToUpload")
      .attachFile("binary1.jpg")
      .wait(2000)
      .attachFile("binary2.jpg");
  });

  it("Multiple File Upload 2", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.wait(3000);
    cy.get("#filesToUpload").attachFile(["binary1.jpg", "binary2.jpg"]);
  });

  it.only("OverWrite File Name", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.wait(3000);
    cy.get("#filesToUpload").attachFile({
      filePath: "binary1.jpg",
      fileName: "image1.jpg",
    });
  });
});
