import { loadQuery, usePreloadedQuery } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import RelayEnvironment from './relay/RelayEnvironment'
import { AppQuery as AppQueryType } from './__generated__/AppQuery.graphql'

const AppQuery = graphql`
  query AppQuery {
    isHealthy
  }
`

const preloadedQuery = loadQuery<AppQueryType>(RelayEnvironment, AppQuery, {})

function App() {
  const data = usePreloadedQuery(AppQuery, preloadedQuery)

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          {data.isHealthy ? 'Healthy' : 'Unhealthy'}
          <div>Home</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
