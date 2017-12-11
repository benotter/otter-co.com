import React, { Component } from 'react';

import './App.css';

import TopBar from './widgets/topbar/topbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar></TopBar>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
