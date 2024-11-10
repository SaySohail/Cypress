class Autostore_Homepage_PO {

    visitHomePage(){
        cy.visit(Cypress.env("autoStore_homepage"), {timeout: 60000});

    }
    navigateToHairCare(){
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
    }
}
export default Autostore_Homepage_PO;