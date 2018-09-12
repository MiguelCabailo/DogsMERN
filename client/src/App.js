import React, { Component } from 'react';
import './App.css';

import NavBar from './components/shared/AppNavbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Goals App</h1>
        <NavBar/>
      </div>
    );
  }
}

export default App;
