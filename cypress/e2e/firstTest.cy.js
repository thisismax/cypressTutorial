/// <reference types="cypress" />


describe('This is a Test... test', () => {

    // the tests go in here

    it('first test',()=>{

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()


        // get by Tag Name
        cy.get('input')

        // get by Id - use hash
        cy.get('#inputEmail1')

        // by Class name - use .
        cy.get('.input-full-width')

        // by attribute name - square brackets around name
        cy.get('[placeholder]')

        // by attribute name and value
        cy.get('[placeholder="Email"]')

        // by Class value - only matches exact full class value
        // (including other classes)
        cy.get('[class="input-full-width"]')

        // by Tag name and Attribute with value
        cy.get('input[placeholder="Email"]')

        // by two different attributes
        cy.get('[placeholder="Email"][fullwidth][type="email"]')

        // by tag name, Attribute with value, ID and Class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        // Cypress recommended method:
        cy.get('[data-cy="inputEmail1"]')
    })

    it('second test',()=>{
        
    })

    it('third test',()=>{
        
    })

})

describe('This is a Test... test - 2nd suite', () => {

    // the test goes in here

    it('first test',()=>{

    })

    it('second test',()=>{
        
    })

    it('third test',()=>{
        
    })

})