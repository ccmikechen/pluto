import { Given, Then } from 'cypress-cucumber-preprocessor/steps'

let postNodeId

Given('a post with comments as below', (table) => {
  const commentRows = table.rawTable.slice(1)
  cy.insert('post', {}).then((postEntry) => {
    cy.toGlobalId('Post', postEntry.id).then((globalId) => {
      postNodeId = globalId
    })

    commentRows.forEach((row) => {
      cy.insert('post', { reply_id: postEntry.id, content: row[0], inserted_at: row[1] })
    })
  })
})

Given('I am on the post page', () => {
  cy.visit(`/post/${postNodeId}`)
})

Then('I see comments of the post', (table) => {
  const commentContents = table.rawTable.slice(1).map((row) => row[0])
  cy.the('postCommentContent')
    .should('have.length', commentContents.length)
    .each((comment, i) => {
      expect(comment[0].innerText).equal(commentContents[i])
    })
})
