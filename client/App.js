import React, { Component } from 'react';
import HomePage from './containers/HomePage';
import Parts from './containers/Parts';
import './App.css';
import 'tachyons';
class App extends Component {
  render() {
    return (
      <div>
        <Parts />
        <HomePage />
      </div>
    );
  }
}

export default App;
