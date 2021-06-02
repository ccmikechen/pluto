import { And, Then, When } from 'cypress-cucumber-preprocessor/steps'

When('I write post content of {string}', (content) => {
  cy.the('createPostBox').find('textarea').should('be.visible').type(content)
})

And('I submit the post content', () => {
  cy.the('submitPostButton').click()
})

Then('I see the post is created with post content of {string}', (content) => {
  cy.the('postCard').contains(content)
})
