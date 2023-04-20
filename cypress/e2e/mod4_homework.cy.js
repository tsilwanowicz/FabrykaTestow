describe('mod 4 homework', () => {
    beforeEach(() => {
        cy.visit('https://fabrykatestow.pl')
    })

    it('searching after ID', () => {

        cy.get('#content')
        cy.get('#wp-block-library-css')
        cy.get('#swiper-css')
        cy.get('#menu-item-1871')
        cy.get('#header-menu-sidebar')
    })

    it('searching after class', () => {

        cy.get('.header')
        cy.get('.builder-item')
        cy.get('.nv-nav-wrap')
        cy.get('.icon-bar')
        cy.get('.search-field')
    })

    it('searching after attribute', () => {

        cy.get('input[type="search"]')
        cy.get('li[id="menu-item-1692"]')
        cy.get('input[class="search-field"]')
        cy.get('div[class="elementor-background-overlay"]')
        cy.get('span[class="elementor-button-text"]')
    })

    it('searching after text', () => {

        cy.get('span').contains('Wsparcie mentora')
        cy.get('span').contains('Kompletny Proces')
        cy.get('h2').contains('ZERO RYZYKA')
        cy.get('a').contains('Regulamin')
        cy.get('a').contains('WordPress')
    })
})