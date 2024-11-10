/// <reference types="cypress" />
describe("Test contact us page From Automation Test store", ()=> {
    before(function(){
        cy.viewport(550, 750);
        cy.fixture('userDetails.json').as("user");
    })
    it("Should be able to submit a successful submission via contact us form", ()=>{
        cy.visit("https://automationteststore.com/ ");
        cy.get('.info_links_footer > :nth-child(5) > a').click().then(function(contactusText){
            console.log("Selected Item: " + contactusText.text());

        });
        cy.get("@user").then((user)=>{
        cy.get('#ContactUsFrm_first_name').type(user.first_name);
        cy.get('#ContactUsFrm_email').type(user.email);
        })
        
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("Enquiring about new products");
        cy.get('.col-md-6 > .btn').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', "Your enquiry has been successfully sent to the store owner!")
    })
    //negative test case
})