import Urls from '../page-objects/urls'

const checkboxesTab = '#checkbox-header'
const datePickerTab = '#datepicker-header'
const hoversTab = '#hovers-header'
const inputsTab = '#inputs-header'
const basicAuthTab = '#basicauth-header'
const formTab = '#form-header'
const dropdownListTab = '#dropdownlist-header'
const keyPressesTab = '#keypresses-header'
const dragDropTab = '#draganddrop-header'
const elementsTab = '#addremoveelements-header'
const statusCodesTab = '#statuscodes-header'
const iFrameTab = '#iframe-header'

class HomePage {

    clickCheckboxTab() {
        cy.get(checkboxesTab).click()
    }

    clickDatePickerTab() {
        cy.get(datePickerTab).click()
    }

    clickHoversTab() {
        cy.get(hoversTab).click()
    }

    clickInputsTab() {
        cy.get(inputsTab).click()
    }

    clickBasicAuthTab() {
        cy.get(basicAuthTab).click()
    }

    clickFormTab() {
        cy.get(formTab).click()
    }

    clickDropdownListTab() {
        cy.get(dropdownListTab).click()
    }

    clickKeyPressesTab() {
        cy.get(keyPressesTab).click()
    }

    clickDragDropTab() {
        cy.get(dragDropTab).click()
    }

    clickElementsTab() {
        cy.get(elementsTab).click()
    }

    clickStatusCodesTab() {
        cy.get(statusCodesTab).click()
    }

    clickIFrameTab() {
        cy.get(iFrameTab).click()
    }

    visitPage() {
        const url = new Urls()
        url.visitHomePage()
    }

}

export default HomePage;