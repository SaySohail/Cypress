/// <reference types="cypress" />
describe("Interact dropdown lists via web driver uni", ()=> {
    it("Select specific values via select dropdown lists", ()=>{
        cy.visit("https://www.webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons ").invoke('removeAttr', 'target').click({force:true});
        //Selecting dropdown using values
        cy.get("#dropdowm-menu-1").select('c#');
        cy.get("#dropdowm-menu-2").select('testng').should('have.value', 'testng');
        cy.get("#dropdowm-menu-3").select('jquery');

        //Selecting drop down using text
        // cy.get("#dropdowm-menu-3").select('JQuery').contains('JQuery');


        cy.get("#dropdowm-menu-2").select('maven').should('have.value', 'maven');


    });



}) 