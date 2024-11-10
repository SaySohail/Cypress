/// <reference types="cypress" />
describe("Test file upload", ()=> {
    it("Upload a file", ()=>{
        cy.visit("https://www.webdriveruniversity.com");
        cy.get("#file-upload").invoke('removeAttr', 'target').click({force:true});
        cy.get("#myFile").selectFile("/Users/sayedsohail/Desktop/Projects/Cypress/001 laptop.png");
        cy.get("#submit-button").click();
  

});

it("Not Upload a file", ()=>{
    cy.visit("https://www.webdriveruniversity.com");
    cy.get("#file-upload").invoke('removeAttr', 'target').click({force:true});
    cy.get("#submit-button").click();
    

    


});
});