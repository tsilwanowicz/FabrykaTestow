import HomePage from '../page-objects/homePage'
import CheckboxPage from '../page-objects/checkboxPage'
import DatePickerPage from '../page-objects/datePickerPage'
import HoversPage from '../page-objects/hoversPage'
import InputPage from '../page-objects/inputPage'
import BasicAuthPage from '../page-objects/basicAuthPage'
import FormPage from '../page-objects/formPage'
import DropdownListPage from '../page-objects/dropdownListPage'
import KeyPressPage from '../page-objects/keypressPage'
import AddRemoveElementsPage from '../page-objects/addRemoveElementsPage'
import StatusCodesPage from '../page-objects/statusCodesPage'
import IframesPage from '../page-objects/iframesPage'

describe('mod 7 homework', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('test checkboxes', function () {

        const homePage = new HomePage();
        homePage.clickCheckboxTab()

        const checkboxPage = new CheckboxPage();
        checkboxPage.checkFirstCheckbox()
        checkboxPage.uncheckSecondCheckbox()
        
    })

    it('test hovers page', function() {

        const homePage = new HomePage();
        homePage.clickHoversTab()

        const hoversPage = new HoversPage();
        hoversPage.hoverOverElement()
    })

    it('test inputs', function () {

        const homePage = new HomePage();
        homePage.clickInputsTab()
        
        const inputPage = new InputPage();
        inputPage.typeNumbersIntoField()
        inputPage.typeLettersIntoField()

    })

    it('basic auth test', function () {

        const homePage = new HomePage();
        homePage.clickBasicAuthTab()
        const basicAuthPage = new BasicAuthPage();
        basicAuthPage.loginValid()
        basicAuthPage.returnToMain()
        homePage.clickBasicAuthTab()
        basicAuthPage.loginInvalid()
 
    })

    it('form test', function () {

        const homePage = new HomePage();
        const formPage = new FormPage();
        homePage.clickFormTab()
        formPage.fillOutForm()
    })

    it('test dropdown list', function () {

        const homePage = new HomePage();
        homePage.clickDropdownListTab()

        const dropdownListPage = new DropdownListPage();
        dropdownListPage.chooseDropdownListFirstOption()

    })

    it('test key presses', function() {

        const homePage = new HomePage();
        homePage.clickKeyPressesTab()

        const keypressPage = new KeyPressPage();
        keypressPage.checkPressedKey()

    })

    it('test add/remove elements', function() {

        const homePage = new HomePage();
        homePage.clickElementsTab()

        const addRemoveElementsPage = new AddRemoveElementsPage();
        addRemoveElementsPage.addElement()
        addRemoveElementsPage.removeElement()

    })

    it('test status codes', function() {

        const homePage = new HomePage();
        homePage.clickStatusCodesTab()

        const statusCodesPage = new StatusCodesPage();
        statusCodesPage.checkStatusCode200()
        statusCodesPage.checkStatusCode305()
        statusCodesPage.checkStatusCode404()
        statusCodesPage.checkStatusCode500()
        
    })

    it('test iframes', function() {

        const homePage = new HomePage();
        homePage.clickIFrameTab()

        const iframesPage = new IframesPage();
        iframesPage.pressFirstButton()
        iframesPage.pressSecondButton()

    })

})