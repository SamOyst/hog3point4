import React from 'react'
import NaturalBurial from '../NaturalBurial'

describe('NaturalBurial Component Test', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NaturalBurial />)
    cy.get('[data-cy="header"]').should('be.visible')
    cy.get('[data-cy="desc"]').should('be.visible')
    cy.get('[data-cy="mainDiv"]').should('be.visible')
  })
})