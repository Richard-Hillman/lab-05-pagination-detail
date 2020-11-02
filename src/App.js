import React from 'react';
import './App.css';
import Navigation from './Navigation'
import Home from './Pokedex.js';
import Credits from './Credits.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Pokedex from './Pokedex.js';
import Details from './Details.js'
// import FetchPage from './FetchPage.js'


  export default class App extends React.Component { 
    render() {
      return (
        <>
          <div className="main">
            <Router>
            <Navigation />
              <Switch>

                <Route
                  path="/"
                  exact
                  render={(routerProps) => <Home {...routerProps} />}
                  />

                <Route
                  path="/pokedex"
                  exact
                  render={(routerProps) => <Pokedex {...routerProps} />}
                  />

                <Route
                  path="/credits"
                  exact
                  render={(routerProps) => <Credits {...routerProps} />}
                  />

                <Route        
                  path="/details/:pokemon"
                  exact
                  render={(routerProps) => <Details {...routerProps} />}
                  />
                  
              </Switch>
            </Router>

        </div>
      </>
    );
  }
}
