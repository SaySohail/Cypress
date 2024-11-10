class Autostore_HairCare_PO {

    addHairCareProductsToBasket(){
        globalThis.data.productName.forEach(function(element){
            cy.addProductsToaBasket(element).then(()=> {
                debugger
            });
        })
        cy.get('.dropdown-toggle > .fa').click();
    }
}
export default Autostore_HairCare_PO;