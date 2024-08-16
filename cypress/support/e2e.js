// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
// cypress/support/e2e.js (ou cypress/support/index.js para Cypress 9)
console.log('Cypress on uncaught:exception handler loaded')

Cypress.on('uncaught:exception', (err) => {
  console.log('Caught an uncaught exception:', err.message)
  if (err.message.includes('e is not defined')) {
    return false // Ignora o erro específico
  }
  return true // Permite outros erros não tratados
})
