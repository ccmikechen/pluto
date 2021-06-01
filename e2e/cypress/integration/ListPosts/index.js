import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('{int} posts in the system', (n) => {
  cy.insertList('post', n)
})

Given('I am on the home page', () => {
  cy.visit('/')
})

Then('I see {int} posts', (n) => {
  cy.get('[data-testid=postCard]').should('have.length', n)
})
