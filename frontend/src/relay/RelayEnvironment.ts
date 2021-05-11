import {
  Environment,
  Network,
  RecordSource,
  Store,
  RequestParameters,
  Variables,
} from 'relay-runtime'
import fetchGraphQL from './fetchGraphQL'

async function fetchRelay(params: RequestParameters, variables: Variables) {
  return fetchGraphQL(params.text, variables)
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
})
