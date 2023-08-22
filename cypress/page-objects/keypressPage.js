const keypress = '#target'
const result = '#keyPressResult'

class KeyPressPage {

    checkPressedKey() {
        cy.get(keypress).clear()
        cy.get(result).should('contain','DELETE')
        cy.get(keypress).type('{enter}')
        cy.get(result).should('contain','ENTER')

    }
}

export default KeyPressPage;