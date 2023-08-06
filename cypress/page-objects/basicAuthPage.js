const username = '#ba_username'
const password = '#ba_password'
const button = '#content > button'
const warning = '#loginFormMessage'
const loginMessage = '#loggedInMessage'
const returnButton = 'button'

class BasicAuthPage {
    loginValid() {
        cy.get(username).type('admin')
        cy.get(password).type('admin')
        cy.get(button).click()
        cy.url().should('contain', '/basicauth.html')
        cy.get(loginMessage).should('contain', 'You are logged in!')
    }

    returnToMain() {
        cy.get(returnButton).click()
    }

    loginInvalid() {
        cy.get(username).type('admin')
        cy.get(password).type('password')
        cy.get(button).click()
        cy.get(warning).should('contain', 'Invalid credentials')
    }

}
export default BasicAuthPage;