import React, { Component } from 'react';
import './App.css';

/*
  BrowserRouter: use of client side routing to aviod page reloads
  Route: specifies a route that redirects to a component
  Switch: Makes sure only one route is used, the first one. For /:item
*/
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/shared/AppNavbar';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';

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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
