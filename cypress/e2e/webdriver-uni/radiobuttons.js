/// <reference types="cypress" />
describe("Verifying radio buttons via web driver uni", ()=> {
    beforeEach(function(){
        cy.visit("https://www.webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons ").invoke('removeAttr', 'target').click({force:true});
    })

    it("Check and validate checkbox", ()=>{
       
        cy.get('#radio-buttons').find("[type='radio']").first().check();
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check();


    });

    it("validate the states of the specific radio buttons", ()=>{
       
        cy.get("[value='lettuce']").should('not.be.checked');
        cy.get("[value='pumpkin']").should('be.checked');
        
        cy.get("[value='lettuce']").check();
        cy.get("[value='lettuce']").should('be.checked');
        cy.get("[value='pumpkin']").should('not.be.checked');
        cy.get("[value='cabbage']").should('be.disabled');

        
        
        
       


    });




}) 