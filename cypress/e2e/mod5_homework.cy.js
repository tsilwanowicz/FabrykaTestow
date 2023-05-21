describe('Mod 5 Homework', () => {

    it('visit homepage', function(){
        cy.visit('https://fabrykatestow.pl')
        cy.get('.elementor-button-text').contains('POKAŻ CZEGO SIĘ NAUCZĘ').click()
        cy.url().should('eq', 'https://fabrykatestow.pl/cypress/')
        cy.get('[data-id="2d7d28f4"]').scrollTo('center', {ensureScrollable: false}).screenshot('screenshot_testowy', {overwrite: true})
    
    })
})