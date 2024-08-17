import { faker } from '@faker-js/faker'

class SendQuotePage {
  constructor() {
    // Seletores armazenados em variáveis para fácil manutenção
    this.selectors = {
      email: '#email',
      phone: '#phone',
      username: '#username',
      password: '#password',
      confirmPassword: '#confirmpassword',
      comments: '#Comments',
      sendEmailButton: '#sendemail',
      successMessage: 'Sending e-mail success!'
    }
  }

  /**
   * Preenche e envia o formulário com dados fictícios gerados pelo faker
   */
  submitQuote() {
    const email = faker.internet.email()
    const phone = faker.phone.number('##########')
    const username = faker.internet.userName()
    const password = faker.internet.password()
    const comments = faker.lorem.sentence()

    this.fillInput(this.selectors.email, email)
    this.fillInput(this.selectors.phone, phone)
    this.fillInput(this.selectors.username, username)
    this.fillInput(this.selectors.password, password)
    this.fillInput(this.selectors.confirmPassword, password) // Confirmar com a mesma senha
    this.fillInput(this.selectors.comments, comments)

    this.clickButton(this.selectors.sendEmailButton)
  }

  /**
   * Verifica se a mensagem de sucesso está visível
   */
  verifySuccessMessage() {
    cy.contains(this.selectors.successMessage, { timeout: 10000 })
      .should('be.visible')
      .invoke('text')
      .should('equal', this.selectors.successMessage)
  }

  /**
   * Preenche um campo de entrada
   * @param {string} selector - Seletor do campo de entrada
   * @param {string} text - Texto a ser inserido
   */
  fillInput(selector, text) {
    cy.get(selector)
      .should('be.visible')
      .then(($input) => {
        cy.wrap($input)
          .clear()
          .type(text)
      })
  }

  /**
   * Clica em um botão
   * @param {string} selector - Seletor do botão
   */
  clickButton(selector) {
    cy.get(selector)
      .should('be.visible')
      .and('not.be.disabled')
      .click()
  }
}

export default SendQuotePage
