import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import Home from './Home.js';
import Games from './Games.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/games" component={Games}/>
          </Switch>
        </BrowserRouter>  
      </div>
    )
  }
}

export default App;
