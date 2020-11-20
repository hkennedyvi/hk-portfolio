import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/portfolio">
         <Portfolio />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
