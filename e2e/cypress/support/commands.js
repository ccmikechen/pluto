const API_URL = Cypress.env('API_URL') || 'http://localhost:4000'

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

Cypress.Commands.add('exec', (code) => {
  cy.request('POST', `${API_URL}/e2e/eval`, { code })
    .as('exec')
    .then((r) => r.body.result)
})

Cypress.Commands.add('toGlobalId', (schema, id) => {
  cy.exec(`Absinthe.Relay.Node.to_global_id("${schema}", ${id})`)
})

Cypress.Commands.add('the', (id) => {
  cy.get(`[data-testid=${id}`)
})
