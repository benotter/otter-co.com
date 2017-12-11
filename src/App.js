import React, { Component } from 'react';

import TopBar from './widgets/topbar/topbar';
import AppLIst from './widgets/app_list/app_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar></TopBar>
        
      </div>
    );
  }
}

export default App;
