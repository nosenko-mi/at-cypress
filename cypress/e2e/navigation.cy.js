describe('Madison Island - navigation', function () {

    beforeEach(() => {
        cy.visit('http://demo-store.seleniumacademy.com/')
    })

    it('Navigating using Women button should redirect to /women', function () {
        cy.get('.nav-1').click({ timeout: 10000 })
        cy.url().should('include', '/women.html')
    })

    it('Navigating using Men button should redirect to /men', function () {
        cy.get('.nav-2').click()
        cy.url().should('include', '/men.html')
    })

    it('Navigating using Accessories button should redirect to /men', function () {
        cy.get('.nav-3').click()
        cy.url().should('include', '/accessories.html')
    })

    it('Navigating using Home & Decor button should redirect to /men', function () {
        cy.get('.nav-4').click()
        cy.url().should('include', '/home-decor.html')
    })
    it('Navigating using Sale button should redirect to /men', function () {
        cy.get('.nav-5').click()
        cy.url().should('include', '/sale.html')
    })
    it('Navigating using VIP button should redirect to /men', function () {
        cy.get('.nav-6').click()
        cy.url().should('include', '/vip.html')
    })


})