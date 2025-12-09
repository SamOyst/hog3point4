/// <reference types="cypress" />

describe('About page E2E', () => {
  beforeEach(() => {
    // change this route if your app uses a different path
    cy.visit('/about/')
  })

  it('renders heading and image', () => {
    cy.get('[data-cy="about-heading"]').should('contain.text', "About St. Margaret")
    cy.get('[data-cy="about-image"]').should('be.visible')
  })

  it('toggles the Species accordion (flora/fauna/fungi)', () => {
    // initially closed
    cy.get('[data-cy="accordion-content-floraFauna"]').should('not.be.visible')

    // open
    cy.get('[data-cy="accordion-toggle-floraFauna"]').click()
    cy.get('[data-cy="accordion-content-floraFauna"]').should('be.visible')

    // check that lists exist (if data present)
    cy.get('[data-cy="fauna-section"]').should('exist')
    cy.get('[data-cy="flora-section"]').should('exist')
    cy.get('[data-cy="fungi-section"]').should('exist')

    // close
    cy.get('[data-cy="accordion-toggle-floraFauna"]').click()
    cy.get('[data-cy="accordion-content-floraFauna"]').should('not.be.visible')
  })

  it('toggles Heritage & Legacy, Mission, and Vision accordions', () => {
    const sections = [
      { toggle: 'accordion-toggle-heritageLegacy', content: 'accordion-content-heritageLegacy' },
      { toggle: 'accordion-toggle-mission', content: 'accordion-content-mission' },
      { toggle: 'accordion-toggle-vision', content: 'accordion-content-vision' }
    ]

    sections.forEach(({ toggle, content }) => {
      cy.get(`[data-cy="${content}"]`).should('not.be.visible')
      cy.get(`[data-cy="${toggle}"]`).click()
      cy.get(`[data-cy="${content}"]`).should('be.visible')
      cy.get(`[data-cy="${toggle}"]`).click()
      cy.get(`[data-cy="${content}"]`).should('not.be.visible')
    })
  })
})
