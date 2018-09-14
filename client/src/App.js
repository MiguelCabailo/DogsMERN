import React, { Component } from 'react';
import './App.css';

/*
  BrowserRouter: use of client side routing to aviod page reloads
  Route: specifies a route that redirects to a component
  Switch: Makes sure only one route is used, the first one. For /:item
*/
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/shared/AppNavbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Workout from './components/Workout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            {/* exact path to avoid stacking components*/}
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/:id' component={Workout} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
