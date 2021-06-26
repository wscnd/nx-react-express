describe('store-ui: Games component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=games--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to store-ui!');
    });
});
