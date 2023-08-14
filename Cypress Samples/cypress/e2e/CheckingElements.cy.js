describe("Check UI Elements", () => {
    it("Checking Radio Buttons", () => {
        cy.visit("https://www.ironspider.ca/forms/checkradio.htm") // auto testing learning page
        cy.get(':nth-child(33) > form').scrollIntoView();
        cy.get('[checked=""]').should('be.visible') // visibility of radio button
        cy.get(':nth-child(33) > form > :nth-child(5)').should('be.visible') // visibility of radio button
        cy.get(':nth-child(33) > form > :nth-child(7)').should('be.visible') // visibility of radio button

        // // Selecting radio buttons
        cy.get(':nth-child(33) > form > :nth-child(5)').check().should('be.checked')
        cy.get(':nth-child(33) > form > :nth-child(3)').should('not.be.checked')
        cy.get(':nth-child(33) > form > :nth-child(7)').should('not.be.checked')

        cy.get(':nth-child(33) > form > :nth-child(7)').check().should('be.checked')
        cy.get(':nth-child(33) > form > :nth-child(3)').should('not.be.checked')
        cy.get(':nth-child(33) > form > :nth-child(5)').should('not.be.checked')

    })
})
