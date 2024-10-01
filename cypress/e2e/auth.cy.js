describe('Madison Island - Auth', function () {

    describe('Sign in', function () {
        it('User should be able to sign in', function () {
            cy.visit('http://demo-store.seleniumacademy.com/customer/account/login/')
            cy.get('#email').type("jd@email.com")
            cy.get('#pass').type("password")
            cy.get('#send2').click()
            cy.get('.hello > strong').then(($item) => {
                expect($item.text()).to.equal('Hello, John Doe!')
            })
        })

        it('If user enters wrong credentials error should be displayed', function () {
            cy.visit('http://demo-store.seleniumacademy.com/customer/account/login/')
            cy.get('#email').type("jd@email.com")
            cy.get('#pass').type("wrongpassword")
            cy.get('#send2').click()
            cy.get('.error-msg > ul > li').should('be.visible')
        })
    })

    describe('Sign up', function () {
        it('If required field is empty error should be displayed', function () {
            cy.visit('http://demo-store.seleniumacademy.com/customer/account/create/')

            cy.get('.buttons-set > .button').click()
            cy.get('.validation-advice').then(($items) => {
                assert($items.length == 5)
            })
        })

        it('Required field should not display an error if is filled', function () {
            cy.visit('http://demo-store.seleniumacademy.com/customer/account/create/')

            cy.get('#firstname').type('John')
            cy.get('#lastname')
            cy.get('#email_address')
            cy.get('#password')
            cy.get('#confirmation')

            cy.get('.buttons-set > .button').click()
            cy.get('.validation-advice').then(($items) => {
                assert($items.length == 4)
            })
        })

    })

})
