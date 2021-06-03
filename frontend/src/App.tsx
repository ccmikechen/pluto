import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Home></Home>
        </Route>
        <Route exact={true} path="/post/:id">
          <Post></Post>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
