import React from 'react'
import Ecosystem from '../Ecosystem'

describe('ecosystem test ', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Ecosystem />)
    cy.get('[data-cy="head"]').should('be.visible')
    cy.get('[data-cy="searchBar"]').should('be.visible')
    cy.get('[data-cy="images"]').should('be.visible')
  })
})