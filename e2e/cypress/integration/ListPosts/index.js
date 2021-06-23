import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

let lastPostId

Given('{int} posts in the system', (n) => {
  cy.insertList('post', n).then((posts) => {
    lastPostId = posts[posts.length - 1].id
  })
})

Given('a post replying to the latest post', () => {
  cy.insert('post', { content: 'comment', reply_id: lastPostId })
})

When('I click the {string} button on the post', (button) => {
  cy.the('postCard').contains(button).click()
})

Then('I see {int} posts', (n) => {
  cy.the('postCard').should('have.length', n)
})

Then('I am in the detail page of the replied post', () => {
  cy.toGlobalId('Post', lastPostId).then((globalId) => {
    cy.url().should('include', `/post/${globalId}`)
  })
})
