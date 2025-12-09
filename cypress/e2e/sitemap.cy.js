describe('sitemap e2e', () => {
  beforeEach(() => {
    cy.visit('/sitemap')
  });
  it('renders the header section', () => {
    cy.get('[data-cy="header"]').should('be.visible').then(($header) => {
      const text = $header.text().trim();
      expect(text.length).to.be.greaterThan(0);
      expect(text).to.match(/Site Map/i);
    });
  });

  it('renders the "Use my location" button', () => {
    cy.get('[data-cy="buttonLocation"]')
      .should('be.visible').and('contain.text', 'Use my location');
  });
})