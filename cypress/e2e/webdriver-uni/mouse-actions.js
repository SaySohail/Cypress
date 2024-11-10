/// <reference types="cypress" />
describe("Mouse Actions", ()=> {
    it("Scroll element into a view", ()=>{
        cy.visit("https://www.webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({force:true});
        
  


    });

    it("I should be able to drag ab=nd drop a dragable item", ()=>{
        cy.visit("https://www.webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({force:true});
        cy.get('#draggable').trigger('mousedown',{which: 1});
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true});
        cy.get('#droppable').contains('Dropped!');


    });

    it("I should be able to double mouse click", ()=>{
        cy.visit("https://www.webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({force:true});
        cy.get('#double-click').dblclick();

    });
    it("I should be able to hold the left mouse click", ()=>{
        cy.visit("https://www.webdriveruniversity.com");
        cy.get("#actions").scrollIntoView().invoke('removeAttr', 'target').click({force:true});
        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element)=> {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)');
        })

    });


}) 