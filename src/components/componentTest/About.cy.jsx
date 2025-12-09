import About from '../About'

describe('About Component Test', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<About />)
    cy.get('[data-cy="about-heading"]').should('be.visible')

    // Open Species
    cy.get('[data-cy="accordion-toggle-floraFauna"]').click()
    cy.get('[data-cy="accordion-content-floraFauna"]').should('be.visible')
    cy.get('[data-cy="flora-section"]').should('exist')
    cy.get('[data-cy="fauna-section"]').should('exist')
    cy.get('[data-cy="fungi-section"]').should('exist')

    // Close Species
    cy.get('[data-cy="accordion-toggle-floraFauna"]').click()

    // Heritage
    cy.get('[data-cy="accordion-toggle-heritageLegacy"]').click()
    cy.get('[data-cy="accordion-content-heritageLegacy"]').should('be.visible')

    // Mission
    cy.get('[data-cy="accordion-toggle-mission"]').click()
    cy.get('[data-cy="accordion-content-mission"]').should('be.visible')

    // Vision
    cy.get('[data-cy="accordion-toggle-vision"]').click()
    cy.get('[data-cy="accordion-content-vision"]').should('be.visible')
  })
})