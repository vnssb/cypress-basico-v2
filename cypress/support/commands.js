Cypress.Commands.add('fillMandatoryFieldsAndSubmit', ()=>{
  cy.get('#firstName').type('Jane')
  cy.get('#lastName').type('Doe')
  cy.get('#email').type('jane@doe.com')
  cy.get('#open-text-area').type('Teste')
  cy.contains('button', 'Enviar').click()
})