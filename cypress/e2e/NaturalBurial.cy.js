describe('nb e2e', () => {
  beforeEach(() => {
    cy.visit('/naturalburial/')
  });

  it('renders the main header', () => {
    cy.get('[data-cy="header"]').should('be.visible').then(($header) => {
      const text = $header.text().trim();
      expect(text.length).to.be.greaterThan(0); // Ensure header has content
      expect(text).to.match(/Natural Burial/i);
    });
  });

  it('renders the description section', () => {
    cy.get('[data-cy="desc"]').should('be.visible').then(($desc) => {
      const text = $desc.text().trim();
      expect(text.length).to.be.greaterThan(0);
      expect(text).to.match(/eco-friendly/i); // Sanity check for key description
    });
  });

  it('renders the main options section', () => {
    cy.get('[data-cy="mainDiv"]').should('exist').and('be.visible').then(($mainDiv) => {
      const text = $mainDiv.text().trim();
      expect(text.length).to.be.greaterThan(0);
      expect(text).to.match(/Options for Burial/i); // Sanity check
    });
  });
})