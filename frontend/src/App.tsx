import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
