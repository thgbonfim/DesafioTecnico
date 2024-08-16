import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import VehiclePage from '../../support/pages/vehiclePage'
import InsurantPage from '../../support/pages/insurantPage'
import ProductPage from '../../support/pages/productPage'
import PriceOptionPage from '../../support/pages/priceOptionPage'
import SendQuotePage from '../../support/pages/sendQuotePage'

// Classe para encapsular o fluxo de navegação e preenchimento de formulários
class QuoteProcess {
  constructor() {
    this.vehiclePage = new VehiclePage()
    this.insurantPage = new InsurantPage()
    this.productPage = new ProductPage()
    this.priceOptionPage = new PriceOptionPage()
    this.sendQuotePage = new SendQuotePage()
  }

  visitHomePage() {
    cy.visit('http://sampleapp.tricentis.com/101/app.php')
  }

  fillVehicleForm() {
    this.vehiclePage.fillForm()
  }

  fillInsurantForm() {
    this.insurantPage.fillForm()
  }

  fillProductForm() {
    this.productPage.fillForm()
  }

  selectPriceOption() {
    this.priceOptionPage.selectPriceOption()
  }

  submitQuote() {
    this.sendQuotePage.submitQuote()
  }

  verifySuccessMessage() {
    this.sendQuotePage.verifySuccessMessage()
  }
}

const quoteProcess = new QuoteProcess()

Given('Eu visito a página inicial', () => {
  quoteProcess.visitHomePage()
})

When('Eu preencho os dados do veículo e pressiono Next', () => {
  quoteProcess.fillVehicleForm()
})

When('Eu preencho os dados do segurado e pressiono Next', () => {
  quoteProcess.fillInsurantForm()
})

When('Eu preencho os dados do produto e pressiono Next', () => {
  quoteProcess.fillProductForm()
})

When('Eu seleciono a opção de preço e pressiono Next', () => {
  quoteProcess.selectPriceOption()
})

When('Eu envio o orçamento', () => {
  quoteProcess.submitQuote()
})

Then('Eu vejo a mensagem de sucesso', () => {
  quoteProcess.verifySuccessMessage()
})