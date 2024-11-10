/// <reference types="cypress" />
describe("Alias and Invoke", ()=> {
    it("Validate a specific haircare product", ()=>{
        cy.visit("https://automationteststore.com/ ");
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productTumbnail');
        cy.get('@productTumbnail').its('length').should('be.gt', 5);
        cy.get('@productTumbnail').should('include', 'Seaweed Conditioner');
    });



    it("Validate the thubmnail", ()=>{
        cy.visit("https://automationteststore.com/ ");
        // cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
        cy.get(".thumbnail").as('productTumbnail');
        cy.get('@productTumbnail').should('length', 16);
        cy.get('@productTumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart');
    });

    it.only("Calculate total of normal and sale products", ()=>{
        cy.visit("https://automationteststore.com/ ");
        // cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
        cy.get(".thumbnail").as('productTumbnail');
        // cy.get("@productTumbnail").find('.oneprice').each(($el, index, $list)=>{
        //     cy.log($el.text());

        // })
        cy.get(".thumbnail").find(".oneprice").invoke('text').as('itemPrice');
        cy.get(".thumbnail").find(".pricenew").invoke('text').as('saleItemPrice');
        var itemsTotal = 0;
        cy.get("@itemPrice").then($linkText => {
            var itemsPriceTotal = 0
            var itemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i]);
                itemsPriceTotal += Number(itemPrice[i]);
            }
            itemsTotal += itemsPriceTotal;
            cy.log("Non sale price items total: " + itemsPriceTotal);
        })

        cy.get("@saleItemPrice").then($linkText => {
            var saleItemsPriceTotal = 0
            var saleitemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < saleitemPrice.length; i++) {
                cy.log(saleitemPrice[i]);
                saleItemsPriceTotal += Number(saleitemPrice[i]);
            }
            itemsTotal += saleItemsPriceTotal;
            cy.log("sale price items total: " + saleItemsPriceTotal);
        })
        .then(() =>{
            cy.log("total price: " + itemsTotal);
            expect(itemsTotal).to.equal(585.5)
        })
      
    });
 
})