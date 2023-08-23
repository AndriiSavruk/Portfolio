
describe('E2E Testing Kapusta App', () => {
    beforeEach("Log in", () => {
        cy.fixture("kapustaUser").then( (data) => {
            cy.visit("https://kapusta-qa.netlify.app/");
            cy.get('#email').type(data.email);
            cy.get('#password').type(data.password);
            cy.get('[data-action="login"]').click();
            cy.get('.UserLogOut_userName__Qsemk').should('have.text',data.email);
        })
    })

    it("Buy smth for 50 USD and get 50 USD", () => {
        // cy.get('.FormTransaction_input__Jbj3O').type('Bought some fruits').should('have.text','Bought some fruits');
        // cy.get('.css-ackcql').select('Products').should('have.value','Products');
        // cy.get('.FormTransaction_calcInput__cByYk').type('50').should('have.value','50');
        // cy.get('.FormTransaction_buttonInput__Fqdxq').click();

        // cy.wait(2000);
        // cy.get('.HomeNavigation_link__qGIjl').click();
        // cy.get('.FormTransaction_input__Jbj3O').type('Bank interests').should('have.text','Bank interests');
        // cy.get('.FormTransaction_input__Jbj3O').select('Add. income').should('have.value','Add. income');
        // cy.get('.FormTransaction_calcInput__cByYk').type('50').should('have.value','50');
        // cy.get('.FormTransaction_buttonInput__Fqdxq').click();
        
        cy.get('.Balance_input__5zeug').should('have.value','100.00');
    })
})