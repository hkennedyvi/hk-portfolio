import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

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
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
         <Contact />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
