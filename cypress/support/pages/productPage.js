class ProductPage {
  // Seletores armazenados em variáveis para fácil manutenção
  selectors = {
    startDateCalendar: '#openstartdatecalender',
    insuranceSum: '#insurancesum',
    meritRating: '#meritrating',
    damageInsurance: '#damageinsurance',
    euroProtectionLabel: 'label.ideal-radiocheck-label',
    courtesyCar: '#courtesycar',
    nextButton: '#nextselectpriceoption'
  };

  /**
   * Preenche o formulário de dados do produto
   */
  fillForm() {
    this.enterStartDate('12/02/2024');
    this.selectInsuranceSum('3.000.000,00');
    this.selectMeritRating('Super Bonus');
    this.selectDamageInsurance('No Coverage');
    this.selectEuroProtection('Euro Protection');
    this.selectCourtesyCar('Yes');
    this.clickNextButton();
  }

  /**
   * Preenche o campo da data de início
   * @param {string} date - Data no formato DD/MM/YYYY
   */
  enterStartDate(date) {
    cy.get(this.selectors.startDateCalendar)
      .should('be.visible')
      .type(date);
  }

  /**
   * Seleciona um valor de um dropdown
   * @param {string} value - Valor a ser selecionado
   */
  selectDropdown(selector, value) {
    cy.get(selector)
      .should('be.visible')
      .select(value);
  }

  /**
   * Seleciona o valor do seguro
   * @param {string} value - Valor a ser selecionado
   */
  selectInsuranceSum(value) {
    this.selectDropdown(this.selectors.insuranceSum, value);
  }

  /**
   * Seleciona a classificação de mérito
   * @param {string} value - Classificação a ser selecionada
   */
  selectMeritRating(value) {
    this.selectDropdown(this.selectors.meritRating, value);
  }

  /**
   * Seleciona o seguro contra danos
   * @param {string} value - Opção de seguro contra danos
   */
  selectDamageInsurance(value) {
    this.selectDropdown(this.selectors.damageInsurance, value);
  }

  /**
   * Seleciona a proteção Euro
   * @param {string} protectionText - Texto da proteção Euro
   */
  selectEuroProtection(protectionText) {
    cy.get(this.selectors.euroProtectionLabel)
      .contains(protectionText) // Garante que o texto está visível
      .click();
  }

  /**
   * Seleciona o carro de cortesia
   * @param {string} value - Opção de carro de cortesia
   */
  selectCourtesyCar(value) {
    this.selectDropdown(this.selectors.courtesyCar, value);
  }

  /**
   * Clica no botão "Next"
   */
  clickNextButton() {
    cy.get(this.selectors.nextButton)
      .should('be.visible')
      .click();
  }
}

export default ProductPage;
