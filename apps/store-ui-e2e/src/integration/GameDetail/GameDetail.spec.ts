describe('store-ui: GameDetail component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=gamedetail--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to store-ui!');
    });
});
