describe('Ecosystem e2e', () => {
  beforeEach(() => {
    cy.visit('/ecosystem/')
  });

  it('has the header section visible', () => {
    cy.get('[data-cy="head"]').should('be.visible')
  });

  it('has a search bar container visible', () => {
    cy.get('[data-cy="searchBar"]').should('be.visible')
  });

  it('renders the images grid container and it has zero or more items', () => {
    cy.get('[data-cy="images"]').should('exist').and('be.visible').then(($grid) => {
      const childCount = $grid[0].children.length;
      expect(childCount).to.be.at.least(0);
    });
  });
});