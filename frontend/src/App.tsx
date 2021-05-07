import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>Home</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
