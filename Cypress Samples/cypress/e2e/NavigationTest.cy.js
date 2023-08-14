describe('Navigation Tests', () => {

    it('Navigation Tests', () => {
        cy.visit("https://demo.opencart.com/");
        cy.title().should('eq','Your Store'); // Home page
       
        cy.wait(2000);
        cy.get(':nth-child(7) > .nav-link').click(); // Cameras page
        cy.get('h2').should('have.text','Cameras'); // Validation

        cy.wait(2000);
        cy.go('back'); // back to Home page
        cy.title().should('eq','Your Store'); // Validation

        cy.wait(2000);
        cy.go('forward'); // to Cameras page
        cy.get('h2').should('have.text','Cameras'); // Validation

        cy.wait(2000);
        cy.go(-1); // back to Home page
        cy.title().should('eq','Your Store'); // Validation

        cy.wait(2000);
        cy.go(1); // to Cameras page
        cy.get('h2').should('have.text','Cameras'); // Validation

        cy.wait(2000);
        cy.reload();
    })
})
