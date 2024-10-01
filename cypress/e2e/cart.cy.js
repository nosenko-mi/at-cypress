describe('Madison Island - Cart', function () {

    it('Adding item to a cart should redirect user to Cart page', function () {
        cy.visit('http://demo-store.seleniumacademy.com/women/new-arrivals/elizabeth-knit-top-484.html')
        cy.get('#swatch21').click()
        cy.get('#swatch79').click()
        cy.get('.add-to-cart-buttons > .button').click()

        cy.get('.product-cart-sku').then(($item) => {
            expect($item.text().trim()).to.be.equal('SKU: wbk012c-Pink-M')
        })
    })

    it('Changing quantity should update total sum', function () {
        cy.visit('http://demo-store.seleniumacademy.com/women/new-arrivals/elizabeth-knit-top-484.html')

        cy.get('#swatch21').click()
        cy.get('#swatch79').click()
        cy.get('.add-to-cart-buttons > .button').click()

        let itemPrice
        cy.get('.product-cart-price > .cart-price > .price').then(($item)=>{
            itemPrice = $item.text()
            itemPrice = itemPrice.replace('$', '')
        })
        cy.get('.product-cart-actions > .input-text').clear().type('2{enter}')
        cy.get('#shopping-cart-totals-table > tbody > :nth-child(1) > :nth-child(2) > .price').then(($item) => {

            const expectedPrice = itemPrice * 2
            let actualPrice = $item.text().replace('$', '')
            assert(actualPrice == expectedPrice, `Price before tax is not updated. Expected: ${expectedPrice}, actual: ${actualPrice}.`)
        })
    })

    it('Clicking on "Empty cart" should remove all items from cart', async function () {
        // await driver.get('http://demo-store.seleniumacademy.com/women/new-arrivals/elizabeth-knit-top-484.html')
        cy.visit('http://demo-store.seleniumacademy.com/women/new-arrivals/elizabeth-knit-top-484.html')

        cy.get('#swatch21').click()
        cy.get('#swatch79').click()
        cy.get('.add-to-cart-buttons > .button').click()
        cy.get('#empty_cart_button > :nth-child(1) > span').click()
        cy.get('h1').then(($item)=>{
            expect($item.text().trim()).to.be.equal('Shopping Cart is Empty')
        })

    })

})
