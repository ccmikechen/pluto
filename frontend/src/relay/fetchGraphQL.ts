import { Variables } from 'relay-runtime'

const API_URL = process.env.REACT_APP_API_URL

async function fetchGraphQL(text: string | null | undefined, variables: Variables) {
  const response = await fetch(`${API_URL}/api`, {
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
