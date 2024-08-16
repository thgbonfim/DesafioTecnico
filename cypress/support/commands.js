// cypress/support/commands.js


Cypress.Commands.add('selectDate', (targetYear, targetMonth, targetDay) => {
  // Abrir o calendário
  cy.get('#opendateofmanufacturecalender', { timeout: 10000 }).should('be.visible').click()

  // Esperar o calendário aparecer
  cy.get('#ui-datepicker-div', { timeout: 10000 }).should('be.visible')

  // Função para navegar até o ano e mês desejados
  const navigateToMonthAndYear = () => {
    cy.get('.ui-datepicker-title').then($title => {
      const displayedMonth = $title.find('.ui-datepicker-month').text().trim()
      const displayedYear = $title.find('.ui-datepicker-year').text().trim()

      if (displayedMonth !== targetMonth || displayedYear !== targetYear) {
        // Se o mês ou ano não são os desejados, navegue
        if (displayedYear < targetYear || (displayedYear === targetYear && displayedMonth !== targetMonth)) {
          cy.get('.ui-datepicker-next').click() // Navegar para o próximo mês
        } else {
          cy.get('.ui-datepicker-prev').click() // Navegar para o mês anterior
        }
        cy.get('selector').should('be.visible') // Esperar o calendário atualizar
        navigateToMonthAndYear() // Verificar novamente
      } else {
        // Selecionar o dia desejado
        cy.get('.ui-datepicker-calendar a.ui-state-default')
          .contains(targetDay)
          .click()
      }
    })
  }

  navigateToMonthAndYear() // Iniciar a navegação para o mês e ano corretos
})




Cypress.Commands.add('fillInput', { prevSubject: 'element' }, (subject, text) => {
  cy.wrap(subject)
    .should('be.visible')
    .type(text)
})

Cypress.Commands.add('clickButton', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject)
    .should('be.visible')
    .and('not.be.disabled')
    .click()
})


// Comando personalizado para preencher um campo de seleção
Cypress.Commands.add('selectDropdown', { prevSubject: 'element' }, (subject, value) => {
  cy.wrap(subject)
    .should('be.visible')
    .select(value)
})

// Comando personalizado para clicar em um rótulo
Cypress.Commands.add('clickLabel', { prevSubject: 'element' }, (subject, labelText) => {
  cy.wrap(subject)
    .contains(labelText)
    .should('be.visible')
    .click()
})

// Comando personalizado para clicar em uma opção de rádio
Cypress.Commands.add('selectRadioOption', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject)
    .should('be.visible')
    .and('not.be.disabled')
    .click()
})

// Comando personalizado para clicar em um botão
Cypress.Commands.add('clickButton', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject)
    .should('be.visible')
    .and('not.be.disabled')
    .click()
})

// Comando personalizado para preencher texto
Cypress.Commands.add('enterText', { prevSubject: 'element' }, (subject, text) => {
  cy.wrap(subject)
    .should('be.visible') // Garantir que o elemento está visível
    .type(text)
})

// Comando personalizado para selecionar um valor em um dropdown
Cypress.Commands.add('selectFromDropdown', { prevSubject: 'element' }, (subject, value) => {
  cy.wrap(subject)
    .should('be.visible')
    .select(value)
})

// Comando personalizado para clicar em um rótulo com texto específico
Cypress.Commands.add('clickLabel', { prevSubject: 'element' }, (subject, labelText) => {
  cy.wrap(subject)
    .contains(labelText)
    .should('be.visible')
    .click()
})