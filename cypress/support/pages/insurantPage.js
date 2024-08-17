import { faker } from '@faker-js/faker'
class InsurantPage {
  constructor() {
    // Seletores armazenados em variáveis para fácil manutenção
    this.selectors = {
      firstName: '#firstname',
      lastName: '#lastname',
      dateOfBirth: '#opendateofbirthcalender',
      streetAddress: '#streetaddress',
      country: '#country',
      zipCode: '#zipcode',
      city: '#city',
      occupation: '#occupation',
      hobby: 'label.ideal-radiocheck-label',
      nextButton: '#nextenterproductdata'
    }
  }

  /**
   * Preenche o formulário de segurado
   */
  fillForm() {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    this.enterFirstName(firstName)
    this.enterLastName(lastName)
    this.enterDateOfBirth('01/02/1988')
    this.enterStreetAddress('123 Main St')
    this.selectCountry('United States')
    this.enterZipCode('12345')
    this.enterCity('Sample City')
    this.selectOccupation('Employee')
    this.selectHobby('Bungee Jumping')
    this.clickNextButton()
  }

  /**
   * Preenche o campo do primeiro nome
   * @param {string} text - Texto para o campo
   */
  enterFirstName(text) {
    this.enterText(this.selectors.firstName, text)
  }

  /**
   * Preenche o campo do sobrenome
   * @param {string} text - Texto para o campo
   */
  enterLastName(text) {
    this.enterText(this.selectors.lastName, text)
  }

  /**
   * Preenche o campo da data de nascimento
   * @param {string} date - Data no formato DD/MM/YYYY
   */
  enterDateOfBirth(date) {
    this.enterText(this.selectors.dateOfBirth, date)
  }

  /**
   * Preenche o campo do endereço
   * @param {string} text - Texto para o campo
   */
  enterStreetAddress(text) {
    this.enterText(this.selectors.streetAddress, text)
  }

  /**
   * Seleciona o país no dropdown
   * @param {string} value - País a ser selecionado
   */
  selectCountry(value) {
    this.selectFromDropdown(this.selectors.country, value)
  }

  /**
   * Preenche o campo do código postal
   * @param {string} text - Texto para o campo
   */
  enterZipCode(text) {
    this.enterText(this.selectors.zipCode, text)
  }

  /**
   * Preenche o campo da cidade
   * @param {string} text - Texto para o campo
   */
  enterCity(text) {
    this.enterText(this.selectors.city, text)
  }

  /**
   * Seleciona a ocupação no dropdown
   * @param {string} value - Ocupação a ser selecionada
   */
  selectOccupation(value) {
    this.selectFromDropdown(this.selectors.occupation, value)
  }

  /**
   * Seleciona um hobby
   * @param {string} hobbyName - Nome do hobby
   */
  selectHobby(hobbyName) {
    cy.get(this.selectors.hobby).contains(hobbyName).click()
  }

  /**
   * Clica no botão "Next"
   */
  clickNextButton() {
    cy.get(this.selectors.nextButton).click()
  }

  /**
   * Preenche um campo de texto
   * @param {string} selector - Seletor do campo de texto
   * @param {string} text - Texto a ser preenchido
   */
  enterText(selector, text) {
    cy.get(selector).should('be.visible').type(text)
  }

  /**
   * Seleciona um valor de um dropdown
   * @param {string} selector - Seletor do dropdown
   * @param {string} value - Valor a ser selecionado
   */
  selectFromDropdown(selector, value) {
    cy.get(selector).should('be.visible').select(value)
  }
}

export default InsurantPage
