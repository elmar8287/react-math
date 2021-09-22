/* eslint-disable */

import React from 'react';
import Calculator from './components/Calculator';
import Home from './pages/home';
import Quotes from './pages/quotes';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/quotes">
            <Quotes />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
