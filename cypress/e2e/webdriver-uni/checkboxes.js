/// <reference types="cypress" />
describe("Verifying checkboxes via web driver uni", ()=> {

    beforeEach(function(){
        cy.navigateTowebDriverUni_CheckBoxPage();
    })
    it("Check and validate checkbox", ()=>{
       
        // cy.get('#checkboxes > :nth-child(1) > input').check();
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('not.be.checked');
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1');
        cy.get('@option-1').check().should('be.checked');
        cy.get('#checkboxes > :nth-child(5) > input').as('option-3');
        cy.get('@option-3').uncheck().should('not.be.checked');

    });

    it("Check multiple checkboxes", ()=>{
        // cy.get('#checkboxes > :nth-child(1) > input').check();
        // cy.get('#checkboxes > :nth-child(1) > input').check().should('not.be.checked');
        cy.get("input[type='checkbox']").check(["option-1","option-2","option-3","option-4"]).should('be.checked');


    });



}) 