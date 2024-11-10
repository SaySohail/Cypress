/// <reference types="cypress" />
describe("Validate webdriver uni home page link", ()=> {
    it("Confirm links redirect to the correct pages", ()=>{
        // cypress code goes here
        // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("https://www.webdriveruniversity.com");
        cy.get("#contact-us").invoke('removeAttr', 'target').click({force:true});
        cy.url().should('include', 'contactus');
        // cy.go enables us to perform browser actions
        cy.go('back');
        cy.reload();
        //cy.reload(true); // reloads the page without using the cache
       cy.go('forward');
       cy.url().should('include', 'contactus');  
       cy.go('back');
       cy.get("#login-portal").invoke('removeAttr', 'target').click({force:true});
       cy.url().should('include', 'Login-Portal');
       cy.go('back');
    })

})