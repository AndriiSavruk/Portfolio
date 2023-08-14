export class Login {
    navigate() {
        cy.visit('https://www.edu.goit.global/account/login')
    }
    insertEmail(email) {
        cy.get("#user_email").type(email);
    }
    insertPassword(password) {
        cy.get('#user_password').type(password)
    }
    clickButton() {
        cy.get('.eckniwg2').click()
    }
}
