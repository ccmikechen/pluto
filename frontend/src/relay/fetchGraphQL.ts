import { Variables } from 'relay-runtime'

async function fetchGraphQL(text: string | null | undefined, variables: Variables) {
  const response = await fetch('http://localhost:4000/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  })

  return await response.json()
}

export default fetchGraphQL
