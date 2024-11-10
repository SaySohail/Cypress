describe("Handling data via web driver uni", () => {
    beforeEach(() => {
        // Start each test with a fresh visit if required for isolation
        cy.visit("https://www.webdriveruniversity.com/Data-Table/index.html");

    });

    it("Calculate and assert the total age of all users", () => {
        var userDetails = [];
        let numb = 0;
        cy.get('#thumbnail-1 td').each(($element, index, $list)=>{
           userDetails[index] = $element.text();

        }).then(() => {
            var i;
            for(i = 0; i< userDetails.length; i++){
                if(Number(userDetails[i])) {
                    numb += Number(userDetails[i]);
                }
                
                //cy.log(userDetails[i]);
                

            }
            cy.log("Found total age: " + numb);
            expect(numb).to.equal(322);
        })
    });

    it("Calculate and assert the age of a given user based on a lastname ", () => {
        var userDetails = [];

        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($element, index, $list) => {
            const text = $element.text();
            if(text.includes("Woods")){
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age) {
                    const userAfe = age.text();
                    expect(userAfe).to.equal('80');
                })
        }});

    });
});
