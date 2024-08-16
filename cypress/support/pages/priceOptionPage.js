class PriceOptionPage {
  constructor() {
    // Seletores armazenados em variáveis para fácil manutenção
    this.selectors = {
      priceOptionRadio: ':nth-child(4) > .ideal-radio', // Verificar se este seletor é o mais específico possível
      nextButton: '#nextsendquote'
    }
  }

  /**
   * Método para selecionar a opção de preço e clicar em "Next"
   */
  selectPriceOption() {
    this.selectRadioOption(this.selectors.priceOptionRadio)
    this.clickNextButton(this.selectors.nextButton)
  }

  /**
   * Método para selecionar uma opção de rádio
   * @param {string} selector - Seletor do elemento de opção de rádio
   */
  selectRadioOption(selector) {
    cy.get(selector).click() // Use 'click()' se não houver um comando customizado 'selectRadioOption'
  }

  /**
   * Método para clicar no botão "Next"
   * @param {string} selector - Seletor do botão "Next"
   */
  clickNextButton(selector) {
    cy.get(selector).click() // Use 'click()' se não houver um comando customizado 'clickButton'
  }
}

export default PriceOptionPage
