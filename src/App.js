import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent.js';
import Clock from "./Clock";


class App extends Component {
  render() {

    const userName = 'Pierre';
    const data = ["DC1", "DC2", "DC3"];

    const items = data.map( (classe, index) => <li key={index}>{classe}</li> );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Bonjour {userName}</p>
          <ul>{items}</ul>
          <Clock/>
          <MyComponent content='Test Component' color='black'/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
