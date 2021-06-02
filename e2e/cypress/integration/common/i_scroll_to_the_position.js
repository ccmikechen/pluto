import { When } from 'cypress-cucumber-preprocessor/steps'

When('I scroll to the {string}', (position) => {
  cy.scrollTo(position)
})
