/// <reference types="cypress" />
import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import ContactUs_PO from "../../support/pageObjects/webdriver-uni/ContactUs_PO";
describe("Test contact us page via web Driver uni", ()=> {
    Cypress.config('defaultCommandTimeout', 20000)
    const homepage_PO = new HomePage_PO();
    const contactUsPO = new ContactUs_PO();


    before(function(){
        cy.fixture('example.json').then(function(data){
            globalThis.data = data;

        })
 

    });
    beforeEach(function(){
        // cy.visit(Cypress.env("webdriveruni_homepage")+"/Contact-Us/contactus.html");
        homepage_PO.visitHomePage();
        homepage_PO.click_ContactUs_Button();
    })
    it("Should be able to submit a successful submission via contact us form", ()=>{
        // cypress code goes here
        // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
        
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', "/contactus.html");
        // cy.get('[name="first_name"]').type(data.first_name);
        // cy.get('[name="last_name"]').type(data.last_name);
        // cy.get('[name="email"]').type(data.email);
        // cy.get('textarea.feedback-input').type(data.body);
        // cy.get('[type="submit"]').click();
        // cy.get('h1').should('have.text', "Thank You for your Message!");
        // cy.webDriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, data.body, 'h1', 'Thank You for your Message!');
        contactUsPO.contactFormSubmission(Cypress.env("first_name"), data.last_name, data.email, data.body, 'h1', 'Thank You for your Message!');

    })
    //negative test case
    it("Should not be able to submit a successful submission via contact us form as all fields are required", ()=>{
        // cypress code goes here

        // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
        // cy.get('[name="first_name"]').type(data.first_name);
        // cy.get('[name="last_name"]').type(data.last_name);
        // cy.get('textarea.feedback-input').type("Some valid comments");
        // cy.get('[type="submit"]').click();
        // cy.get('body').contains("Error: all fields are required");
        // cy.webDriverUni_ContactForm_Submission(data.first_name, data.last_name, 0, data.body, 'body', 'Error: all fields are required');
        contactUsPO.contactFormSubmission(data.first_name, data.last_name, 0, data.body, 'body', 'Error: all fields are required');

    })
})