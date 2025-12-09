describe('homepage e2e', () => {
  beforeEach(() => {
    cy.visit('')
  });

  it('renders the main header', () => {
    cy.get('[data-cy="header"]').should('exist').and('be.visible').then(($header) => {
      const text = $header.text().trim();
      expect(text.length).to.be.greaterThan(0);
      expect(text).to.match(/Woodland Conservation Area/i);
    });
  });

  it('renders the interactive cards container', () => {
    cy.get('[data-cy="iCards"]').should('exist').and('be.visible').then(($cards) => {
      expect($cards[0].children.length).to.be.greaterThan(0); 
    });
  });

  it('renders the Quick Facts section (data-cy="facts")', () => {
    cy.get('[data-cy="facts"]').should('be.visible')
  });

  it('renders the Visitor Reviews section (data-cy="reviews")', () => {
    cy.get('[data-cy="reviews"]').should('be.visible')
  })
})