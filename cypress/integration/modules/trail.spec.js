/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })

  it('should show navbar', () => {
    cy.get('.mat-toolbar').should('be.visible')
  })
})
