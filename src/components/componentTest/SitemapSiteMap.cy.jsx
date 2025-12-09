import React from 'react'
import SiteMap from '../Sitemap'

describe('SiteMap Component Test', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SiteMap />)
    cy.get('[data-cy="header"]').should('be.visible')
    cy.get('[data-cy="buttonLocation"]').should('be.visible')
  })
})