describe('Home page', () => {
    it('should display Hello', () => {
        cy.visit('/')
        cy.contains('Hello')
    })
});