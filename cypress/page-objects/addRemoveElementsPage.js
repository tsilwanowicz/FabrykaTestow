const add = '.example > button'
const remove = '.added-manually'

class AddRemoveElementsPage {

    addElement() {
        cy.get(add).click()
        cy.get(remove).should('be.visible')
    }

    removeElement() {
        cy.get(remove).click()
        cy.get(remove).should('not.exist')
    }
}

export default AddRemoveElementsPage;