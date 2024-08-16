Testes Desafio Tecnico com Cypress
Projeto de exemplo para demonstrar conhecimento escritos com Cypress em execução no GitHub Actions.

Pré-requisitos
Para clonar e executar este projeto, você precisará:

git (usei a versão 2.34.1ao escrever este documento)
Node.js (usei a versão v18.15.0enquanto escrevia este documento)
npm (usei a versão 9.5.0ao escrever este documento)
Observação: ao instalar o Node.js, o npm é instalado automaticamente. 🚀

Instalação
Para instalar as dependências de desenvolvimento, execute npm install(ou npm ipara abreviar.)

Configurando as variáveis ​​de ambiente
Antes de executar os testes, algumas variáveis ​​de ambiente precisam ser configuradas.

Faça uma cópia do cypress.env.example.jsonarquivo como cypress.env.jsone defina os valores apropriados para todas as variáveis.

Observação: o cypress.env.jsonarquivo não é rastreado pelo git, pois está listado no .gitignorearquivo.

Executando os testes
Neste projeto, você pode executar testes nos modos interativo e headless, tanto em viewports de desktop quanto de tablet.

Modo sem cabeça
Executar npm test(ou, npm tpara abreviar) executar todos os testes no modo headless usando uma viewport de desktop.

Execute npm run test:tabletpara executar os testes apropriados no modo headless usando uma viewport de tablet.

Modo interativo
Execute npm run cy:openpara abrir o aplicativo Cypress para executar testes no modo interativo usando uma janela de visualização de desktop.

Execute npm run cy:open:tabletpara abrir o aplicativo Cypress para executar testes no modo interativo usando uma janela de visualização do tablet.

