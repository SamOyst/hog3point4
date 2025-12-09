import React from 'react'
import Contact from '../Contact'

describe('Contact Component Test', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Contact />)
    cy.get('[data-cy="title"]').should('be.visible')
    cy.get('[data-cy="contactForm"]').should('be.visible')
    cy.get('[data-cy="submitButton"]').should('be.visible')
  })
})