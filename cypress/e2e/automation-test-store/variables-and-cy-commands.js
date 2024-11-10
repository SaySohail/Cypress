/// <reference types="cypress" />
describe("Verifying variables, cypress commands and jquery commands", ()=> {
    it("Navigating to specific product pages", ()=>{
        cy.visit("https://automationteststore.com/ ");
        // // The following will fail
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup');
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare');
        // makeupLink.click();
        // skincareLink.click();
        // // The following will work
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains('Makeup');
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains('Skincare');
        // makeupLink.click();
        // skincareLink.click();

        //Recommended Approach
        cy.get("a[href*='product/category&path=']").contains('Makeup').click();
        cy.get("a[href*='product/category&path=']").contains('Skincare').click();
    });

    it("Navigating to make up link", ()=>{
        cy.visit("https://automationteststore.com/ ");
        cy.get("a[href*='product/category&path=']").contains('Makeup').click();

    cy.get("h1 .maintext").then(($headerText) => {
        const headerText = $headerText.text();
        cy.log("Found header Text: " + headerText)
        expect(headerText).is.eq('Makeup')
    });

    });

    it("Validate properties of Contact us page ", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")
        // Uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should("contain" ,"First name:");

        // Uses Jquery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text=>{
            const firstNameText = text.find('#field_11').text();
            expect(firstNameText).to.contain('First name:')

             // Embedded commands (Clousers)
             cy.get('#field_11').then(fnText => {
                cy.log(fnText.text());
                cy.log(fnText);
             })
        })
       
    })

})