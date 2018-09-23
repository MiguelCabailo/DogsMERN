import React, { Component } from 'react'


import './App.css';

/*
  Import Redux Store
*/
import { Provider } from 'react-redux'
import store from './store'

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
import Post from './components/Post';


/* Font Awesome*/
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

//library.add(faStroopwafel)


class App extends Component {

  state = {
    id: ''
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <NavBar />
            <Switch>
              {/* exact path to avoid stacking components*/}
              <Route exact path='/' component={(props) => <Home {...props} />} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/:id' component={(props) => <Post {...props} />} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
