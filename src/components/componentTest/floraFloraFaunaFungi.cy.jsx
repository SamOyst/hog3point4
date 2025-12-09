import React from 'react'
import FloraFaunaFungi from '../flora'

describe('FloraFaunaFungi Component Test', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FloraFaunaFungi />)
    cy.get('[data-cy="title"]').should('be.visible')
    cy.get('[data-cy="searchBar"]').should('be.visible')
    cy.get('[data-cy="eco"]').should('be.visible')
    cy.get('[data-cy="images"]').should('be.visible')
  })
})