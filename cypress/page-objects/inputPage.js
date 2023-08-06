const input = 'input[type="number"]'

class InputPage {

    typeNumbersIntoField() {
        cy.get(input).clear()
        cy.get(input).type('666').should('have.value','666')
    }

    typeLettersIntoField() {
        cy.get(input).clear()
        cy.get(input).type('abCDefGH').should('not.have.value','abCDefGH')
    }
}

export default InputPage