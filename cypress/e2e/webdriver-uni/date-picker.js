/// <reference types="cypress" />
describe("Test Date Picker via Web Driver Uni", ()=> {
    it("Select date from date picker", ()=>{
        cy.visit("https://www.webdriveruniversity.com");
        cy.get("#datepicker").invoke('removeAttr', 'target').click({force:true});
        cy.get("#datepicker").click();
        let date = new Date();
        date.setDate(date.getDate() + 365); //get current day i.e. 22
        
        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", {month: "long"});
        var futureDay = date.getDate();

        cy.log("Future year to select: " +futureYear);
        cy.log("Future month to select: " +futureMonth);
        cy.log("Future day to select: " +futureDay);

        function selectMonthAndYear(){
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if(!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            }).then(()=>{
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }
                })
            })
        }
        selectMonthAndYear();

        function selectFutureDay(){
            cy.get('[class="day"]').contains(futureDay).click();
        }
        selectFutureDay();
    });


}) 