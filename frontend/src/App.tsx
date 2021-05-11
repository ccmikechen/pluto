import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
