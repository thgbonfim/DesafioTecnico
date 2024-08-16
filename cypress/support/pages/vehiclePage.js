class VehiclePage {
  constructor() {
    // Seletores armazenados em variáveis para fácil manutenção
    this.selectors = {
      make: '#make',
      model: '#model',
      cylinderCapacity: '#cylindercapacity',
      enginePerformance: '#engineperformance',
      seats: '#numberofseats',
      seatsMotorcycle: '#numberofseatsmotorcycle',
      fuel: '#fuel',
      payload: '#payload',
      totalWeight: '#totalweight',
      listPrice: '#listprice',
      licensePlate: '#licenseplatenumber',
      annualMileage: '#annualmileage',
      nextButton: '#nextenterinsurantdata'
    }
  }

  fillForm() {
    cy.get(this.selectors.make).select('Honda')
    cy.get(this.selectors.model).select('Scooter')
    cy.get(this.selectors.cylinderCapacity).type('150')
    cy.get(this.selectors.enginePerformance).type('50')
    cy.selectDate('2024', 'August', '11')
    cy.get(this.selectors.seats).select('4')
    cy.get('.ideal-radiocheck-label').contains('Yes').click() // Assumindo que há apenas uma opção "Yes"
    cy.get(this.selectors.seatsMotorcycle).select('2')
    cy.get(this.selectors.fuel).select('Petrol')
    cy.get(this.selectors.payload).type('200')
    cy.get(this.selectors.totalWeight).type('500')
    cy.get(this.selectors.listPrice).type('25000')
    cy.get(this.selectors.licensePlate).type('ABC1234')
    cy.get(this.selectors.annualMileage).type('12000')
    cy.get(this.selectors.nextButton).click()
  }
}

export default VehiclePage
