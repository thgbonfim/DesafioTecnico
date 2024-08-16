Feature: Complete Form and Send Quote

  Scenario: Complete the form and receive success message
    Given Eu visito a página inicial
    When Eu preencho os dados do veículo e pressiono Next
    And Eu preencho os dados do segurado e pressiono Next
    And Eu preencho os dados do produto e pressiono Next
    And Eu seleciono a opção de preço e pressiono Next
    And Eu envio o orçamento
    Then Eu vejo a mensagem de sucesso