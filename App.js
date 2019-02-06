import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './Profile.js';
import Board from './Board.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Profile name='Derelle Kirksey' role='CLT 2'/>

        <Board />
        </header>
      </div>
    );
  }
}

export default App;
