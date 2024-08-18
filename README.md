
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/M4deN/Testes-End-to-End-Cypress/ci.yml?label=Test%20Workflows&logo=Cypress&style=for-the-badge)



# Automação de Testes com Cypress e Page Object

## Descrição

Este projeto demonstra a criação de uma automação de testes para um formulário web usando Cypress e o padrão Page Object. A automação é estruturada seguindo boas práticas de organização de código e encapsulamento, visando garantir uma manutenção eficiente e a qualidade dos testes.

## Pré requisitos

Para clonar e executar este projeto:

- [git](https://git-scm.com/downloads) (Versão `2.34.1`)
- [Node.js](https://nodejs.org/en/) (Versão `v18.15.0`)
- npm (Versão `9.5.0`)
- [Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) - Plugin para suporte ao formato Gherkin.
- [ESLint](https://eslint.org/) - Ferramenta para análise de código JavaScript e aplicação de padrões de codificação.
- [Faker](https://fakerjs.dev/) - Biblioteca para geração de dados fictícios.


**Observação:** Ao instalar o Node.js, o npm é instalado automaticamente. 🚀

## Estrutura do Projeto

- **`cypress/e2e`**: Contém os arquivos de especificações de teste que descrevem os cenários de teste.
- **`cypress/e2e/step_definitions`**: Contém os arquivos onde são definidos os passos dos testes, implementando a lógica necessária para os cenários descritos.
- **`cypress/pages`**: Contém as classes que representam as páginas do site e métodos para interagir com os elementos dessas páginas.
- **`cypress/support`**: Contém arquivos de suporte e comandos personalizados que podem ser usados em toda a automação.

## Requisitos

Para rodar este projeto, você precisará das seguintes ferramentas:

- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript.
- [Cypress](https://www.cypress.io/) - Ferramenta para execução dos testes.

## Passo a Passo da Automação

A automação realiza as seguintes etapas no site [http://sampleapp.tricentis.com/101/app.php](http://sampleapp.tricentis.com/101/app.php):

1. **Entrar no site**

   Navegue até a URL especificada.

2. **Preencher o formulário - Aba "Enter Vehicle Data"**

   Complete os campos do formulário na aba "Enter Vehicle Data" e avance para a próxima aba.

3. **Preencher o formulário - Aba "Enter Insurant Data"**

   Complete os campos do formulário na aba "Enter Insurant Data" e avance para a próxima aba.

4. **Preencher o formulário - Aba "Enter Product Data"**

   Complete os campos do formulário na aba "Enter Product Data" e avance para a próxima aba.

5. **Preencher o formulário - Aba "Select Price Option"**

   Complete os campos do formulário na aba "Select Price Option" e avance para a próxima aba.

6. **Preencher o formulário - Aba "Send Quote"**

   Complete os campos do formulário na aba "Send Quote" e envie o formulário.

7. **Verificar mensagem de sucesso**

   Verifique se a mensagem "Sending e-mail success!" aparece na tela para confirmar que a automação foi bem-sucedida.

## Estrutura do Código

### Pages

As classes de páginas estão localizadas em `cypress/pages/`. Elas representam as diferentes páginas do site e encapsulam a lógica para interagir com os elementos dessas páginas.

### Step Definitions

Os arquivos de definições de passos estão localizados em `cypress/e2e/step_definitions/`. Eles contêm a implementação da lógica dos passos descritos nos cenários de teste. Esses arquivos traduzem as etapas descritas nas especificações para ações concretas no navegador.

### Integration

Os arquivos de especificações de teste estão localizados em `cypress/e2e/`. Eles descrevem os cenários de teste e utilizam as classes de páginas e definições de passos para realizar as ações necessárias e validar os resultados.

## Configuração do Ambiente

1. **Instale as dependências**

   Execute o comando para instalar todas as dependências necessárias:

   ```bash
   npm install

Projeto de exemplo para demonstrar testes end-to-end (e2e) escritos com [Cypress](https://cypress.io) em execução no GitHub Actions.



___

Made with by [Thiago.B Almeida](https://github.com/thgbonfim).

