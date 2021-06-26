describe('store-ui: Counter component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=counter--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to store-ui!');
    });
});
