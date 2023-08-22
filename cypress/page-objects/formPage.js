const firstName = '#fname'
const lastName = '#lname'
const button = '#formSubmitButton'

class FormPage {

    fillOutForm() {
        cy.get(firstName).type('tomek')
        cy.get(lastName).type('testowy')
        cy.get(button).click()
        cy.on('window:alert', (t) => {
            expect(t).to.contain('success')
        })
        
    }

}
export default FormPage;