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
   * Preenche e envia o formulário
   */
  submitQuote() {
    this.fillInput(this.selectors.email, 'user@example.com')
    this.fillInput(this.selectors.phone, '1234567890')
    this.fillInput(this.selectors.username, 'username123')
    this.fillInput(this.selectors.password, 'P@ssw0rd125')
    this.fillInput(this.selectors.confirmPassword, 'P@ssw0rd125')
    this.fillInput(this.selectors.comments, 'isto e um teste para o comentario.')

    this.clickButton(this.selectors.sendEmailButton)
  }

  /**
   * Verifica se a mensagem de sucesso está visível
   */
  verifySuccessMessage() {
    // Verifica se o elemento com a mensagem de sucesso está visível e tem o texto correto
    cy.contains(this.selectors.successMessage)
      .should('be.visible')
      .invoke('text') // Obtém o texto do elemento
      .should('equal', this.selectors.successMessage) // Compara o texto com o valor esperado
  }

  /**
   * Preenche um campo de entrada
   * @param {string} selector - Seletor do campo de entrada
   * @param {string} text - Texto a ser inserido
   */
  fillInput(selector, text) {
    cy.get(selector)
      .should('be.visible') // Garante que o campo está visível
      .clear()              // Limpa o campo antes de digitar
      .type(text)          // Digita o texto
  }

  /**
   * Clica em um botão
   * @param {string} selector - Seletor do botão
   */
  clickButton(selector) {
    cy.get(selector)
      .should('be.visible') // Garante que o botão está visível
      .and('not.be.disabled') // Garante que o botão não está desabilitado
      .click()              // Clica no botão
  }
}

export default SendQuotePage
