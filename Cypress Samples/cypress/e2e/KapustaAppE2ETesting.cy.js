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

    it("Add 100 USD test", () => {
        cy.get('.Balance_input__5zeug').should('have.value','100.00');
    })
})