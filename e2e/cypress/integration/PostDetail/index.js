import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

let post

Given('a post as below', (table) => {
  const content = table.rawTable[1][0]
  cy.insert('post', { content }).then((entry) => {
    post = entry
  })
})

When('I choose the first post', () => {
  cy.the('postCard').first().click()
})

Then('I see the post detail', () => {
  cy.the('postContent').contains(post.content)
})
