import { Given, When, Then }from 'cypress-cucumber-preprocessor/steps'

Given('I\'m on the login page', () => {
  cy.visit('http://sampleapp.tricentis.com/101/app.php')
})



When('Eu preencho os dados do veículo corretamente', () => {
  cy.get('#make').select('Honda')
  cy.get('#model').select('Scooter')
  cy.get('#cylindercapacity').type('150')
  cy.get('#engineperformance').type('50')

  // Supondo que você tenha um comando personalizado para seleção de datas
  cy.selectDate('2024', 'August', '11')

  cy.get('#numberofseats').select('4')
  cy.get('.ideal-radiocheck-label').contains('Yes').click() // Clica no rótulo que contém o texto "Yes"
  cy.get('#numberofseatsmotorcycle').select('2')
  cy.get('#fuel').select('Petrol')
  cy.get('#payload').type('200')
  cy.get('#totalweight').type('500')
  cy.get('#listprice').type('25000')
  cy.get('#licenseplatenumber').type('ABC1234')
  cy.get('#annualmileage').type('12000')

})


Then('Eu navego para o próximo formulário', () => {
  cy.get('#nextenterinsurantdata').click()
})