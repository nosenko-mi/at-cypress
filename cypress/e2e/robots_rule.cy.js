describe('Robots rule', () => {
    it('Robots should be able to pass the task', () => {

        cy.visit('http://suninjuly.github.io/math.html')
        cy.get('#input_value').then(($input) => {
            const x = $input.text()
            const y = Math.log(Math.abs(12 * Math.sin(x)))

            cy.get('#answer').type(y)


            cy.get('#robotCheckbox').click()
            cy.get('#robotsRule').click()
            

            const stub = cy.stub()  
            cy.on ('window:alert', stub)
            cy.get('.btn').click()
            .then(() => {
              expect(stub.getCall(0)).to.be.calledWithMatch(/Congrats/gm)      
            }) 
        })
    })
})