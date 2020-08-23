import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from './Search'
import Saved from './Saved';

class App extends Component {
  render () {
    return (
      <div className="App">
       
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Search} />
            <Route path="/saved" component={Saved} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
