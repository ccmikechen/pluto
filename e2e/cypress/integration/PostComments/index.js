import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

let commentRows
let postNodeId
let commentNodeIds = []
let clickedCommentContent

Given('a post with comments as below', (table) => {
  commentRows = table.rawTable.slice(1)
  cy.insert('post', {}).then((postEntry) => {
    cy.toGlobalId('Post', postEntry.id).then((globalId) => {
      postNodeId = globalId
    })

    commentRows.forEach((row, i) => {
      cy.insert('post', { reply_id: postEntry.id, content: row[0], inserted_at: row[1] }).then(
        (commentEntry) => {
          cy.toGlobalId('Post', commentEntry.id).then((commentGlobalId) => {
            commentNodeIds[i] = commentGlobalId
          })
        }
      )
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

When('I click the comment of {string}', (content) => {
  clickedCommentContent = content
  cy.the('postCommentContent').contains(content).click()
})

Then('I go to the detail page of the comment', () => {
  const commentIndex = commentRows.findIndex((row) => row[0] === clickedCommentContent)
  cy.url().should('include', `/post/${commentNodeIds[commentIndex]}`)
})
