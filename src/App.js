import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Communities</h1>
        </div>
        <p className="App-intro">
          Bienvenido a Communities
        </p>
      </div>
    );
  }
}



export default App;
