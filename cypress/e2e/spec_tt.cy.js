describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://antoniotrindade.com.br/treinoautomacao/')
    cy.title().should('eq', 'Treino Automação de Testes')
  })
})