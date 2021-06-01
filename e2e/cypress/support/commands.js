const API_URL = 'http://localhost:4002'

Cypress.Commands.add('checkoutdb', () => {
  cy.request('POST', `${API_URL}/e2e/db/checkout`).as('checkoutDb')
})

Cypress.Commands.add('checkindb', () => {
  cy.request('POST', `${API_URL}/e2e/db/checkin`).as('checkinDb')
})

Cypress.Commands.add('insert', (schema, attributes) => {
  cy.log(`Creating a ${schema}`)
  cy.request('POST', `${API_URL}/e2e/db/insert_list`, {
    schema,
    attributes,
  })
    .as('insert')
    .then((r) => r.body[0])
})

Cypress.Commands.add('insertList', (schema, number, attributes) => {
  cy.log(`Creating a ${schema} list`)
  cy.request('POST', `${API_URL}/e2e/db/insert_list`, {
    schema,
    number,
    attributes,
  })
    .as('insertList')
    .then((r) => r.body)
})
