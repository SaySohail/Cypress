/// <reference types="cypress" />
import Autostore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";
import Autostore_HairCare_PO from "../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO";
describe("Add multiple items to basket", () => {
    const automationStoreHome_PO = new Autostore_Homepage_PO();
    const autoStoreHairCare_PO = new Autostore_HairCare_PO();
    before(function(){
        cy.fixture("products.json").then(function(data) {
            globalThis.data = data
        })
    })

    beforeEach(function () {
        cy.clearLocalStorage();
        cy.clearCookies();
        // cy.visit("https://automationteststore.com/ ");
        automationStoreHome_PO.visitHomePage();
        // cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
        automationStoreHome_PO.navigateToHairCare();
    })
    it("Add specific items to basket", () => {
        // globalThis.data.productName.forEach(function(element){
        //     cy.addProductsToaBasket(element);
        // })
        // cy.get('.dropdown-toggle > .fa').click();
        autoStoreHairCare_PO.addHairCareProductsToBasket();
    });

   

})