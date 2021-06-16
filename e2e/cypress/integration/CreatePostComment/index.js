import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'

let commentContent

Given('I am on the post page', () => {
  cy.insert('post', {}).then((postEntry) => {
    cy.insertList('post', 20, { reply_id: postEntry.id }).then(() => {
      cy.toGlobalId('Post', postEntry.id).then((globalId) => {
        cy.visit(`/post/${globalId}`)
      })
    })
  })
})

When('I submit the comment {string}', (content) => {
  commentContent = content
  cy.the('createCommentBox').find('input').should('be.visible').type(content)
  cy.the('submitCommentButton').click()
})

Then('I see the comment at the bottom', () => {
  cy.the('postCommentContent').last().contains(commentContent)
})
