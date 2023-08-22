const firstButton = '#simpleButton1'
const secondButton = '#simpleButton2'
const resultMsg = '#whichButtonIsClickedMessage'
const iFrame = 'iframe'
const iframeTest = () => {
    return cy.get(iFrame)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)
}

class IframesPage {

    pressFirstButton() {

        iframeTest().find(firstButton).click()
        iframeTest().find(resultMsg).should('have.text', 'Button 1 was clicked!')

    }

    pressSecondButton() {

        iframeTest().find(secondButton).click()
        iframeTest().find(resultMsg).should('have.text', 'Button 2 was clicked!')

    }
}

export default IframesPage