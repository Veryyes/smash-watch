import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';

//import TourneyView from './TourneyView.js';
import Home from './Home.js';
import ReadyGames from './ReadyGames.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/ready" component={ReadyGames}/>
          </Switch>
        </BrowserRouter>  
      </div>
    )
  }
}

export default App;
