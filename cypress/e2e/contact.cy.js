describe('Contact page E2E', () => {
  beforeEach(() => {
    // change this route if your app uses a different path
    cy.visit('/contact/')
  })

  it('renders core UI elements', () => {
    cy.get('[data-cy="title"]').should('exist').and('be.visible');
    cy.get('[data-cy="contactForm"]').should('exist').and('be.visible');
    cy.get('[data-cy="submitButton"]').should('exist').and('be.visible');
  });

  it('allows typing into name, email, and message fields and submits', () => {
    cy.get('#name').should('exist').type('Test User').should('have.value', 'Test User');
    cy.get('#email').should('exist').type('test@example.com').should('have.value', 'test@example.com');
    cy.get('#message').should('exist').type('Hello — this is a test message').should('have.value', 'Hello — this is a test message');

    cy.get('[data-cy="submitButton"]').click();
  });

  it('shows contact info and social links with correct hrefs/targets', () => {
    // Contact info
    cy.contains('+1 (123) 456-7890').should('be.visible');
    cy.contains('info@woodlandconservation.ca').should('be.visible');
    cy.contains('Halifax, Nova Scotia').should('be.visible');

    // Social links: check hrefs and target attributes
    cy.get('a[href*="facebook.com"]').should('have.attr', 'target', '_blank');
    cy.get('a[href*="instagram.com"]').should('have.attr', 'target', '_blank');
    cy.get('a[href*="twitter.com"]').should('have.attr', 'target', '_blank');
  });
});