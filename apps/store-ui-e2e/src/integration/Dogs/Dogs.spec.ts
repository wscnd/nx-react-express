describe('store-ui: Dogs component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dogs--primary&knob-query'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to store-ui!');
    });
});
