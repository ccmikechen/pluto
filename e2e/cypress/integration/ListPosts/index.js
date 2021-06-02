import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

Given('{int} posts in the system', (n) => {
  cy.insertList('post', n)
})

Then('I see {int} posts', (n) => {
  cy.the('postCard').should('have.length', n)
})
