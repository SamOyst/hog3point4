import React from 'react'
import Homepage from '../Homepage'

describe('<Homepage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Homepage />)
    cy.get('[data-cy="header"]').should('be.visible')
    cy.get('[data-cy="iCards"]').should('be.visible')
    cy.get('[data-cy="facts"]').should('be.visible')
    cy.get('[data-cy="reviews"]').should('be.visible')
  })
})