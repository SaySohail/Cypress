class HomePage_PO {

    visitHomePage(){
        cy.visit(Cypress.env("webdriveruni_homepage"));

    }
    click_ContactUs_Button(){
        cy.get("#contact-us").invoke('removeAttr', 'target').click({force: true});
    }
}
export default HomePage_PO;