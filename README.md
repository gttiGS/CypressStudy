# Cypress Study Project

Este repositório é um espaço de estudo contínuo sobre testes automatizados usando o [Cypress](https://www.cypress.io/).

À medida que avanços são feitos nos aprendizados, novas especificações de teste (_specs_) são adicionadas para cobrir diferentes funcionalidades e cenários.

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/                  # Arquivos de teste (.cy.js ou .cy.ts)
├── fixtures/             # Dados estáticos usados nos testes
├── support/              # Comandos customizados e configurações globais
cypress.config.js         # Arquivo de configuração do Cypress
```

## 🚀 Como executar os testes

### 1. Instale as dependências

```bash
npm install
```

### 2. Abra o Cypress em modo interativo

```bash
npm run cy:open
```

### 3. Execute os testes em modo headless

```bash
npm run cy:run
```

### Scripts disponíveis

```json
"scripts": {
  "cy:open": "cypress open --e2e",
  "cy:run": "cypress run --e2e",
  "cy:run:chrome": "cypress run --e2e --browser chrome",
  "cy:run:firefox": "cypress run --e2e --browser firefox",
  "cy:verify": "cypress verify"
}
```

## 📚 Objetivo

Este projeto tem como objetivo:

- Consolidar conhecimentos sobre automação de testes com Cypress
- Praticar conceitos como: comandos customizados, uso de fixtures, interceptação de requisições, etc.
- Evoluir a complexidade dos testes progressivamente

## 👨‍💻 Autor

[Gustavo Supranzetti - gttiGS](https://github.com/gttiGS)

---
