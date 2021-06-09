import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

let postNodeId
let commentContents

Given('a post with comments as below', (table) => {
  commentContents = table.rawTable.slice(1).map((column) => column[0])

  cy.insert('post', {}).then((postEntry) => {
    cy.toGlobalId('Post', postEntry.id).then((globalId) => {
      postNodeId = globalId
    })

    commentContents.forEach((content) => {
      cy.insert('post', { reply_id: postEntry.id, content })
    })
  })
})

Given('I am on the post page', () => {
  cy.visit(`/post/${postNodeId}`)
})

Then('I see comments of the post', () => {
  cy.the('postCommentContent')
    .should('have.length', commentContents.length)
    .each((comment, i) => {
      expect(comment[0].innerText).equal(commentContents[i])
    })
})
