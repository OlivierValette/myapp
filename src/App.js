import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent.js';
import Clock from "./Clock";
import Form from "./Form";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {userName: 'Pierre'}
  }

  updateUserName(userName) {
    console.log(userName);
    this.setState({userName: userName});
  }

  render() {
    const data = ["DC1", "DC2", "DC3"];
    const items = data.map( (classe, index) => <li key={index}>{classe}</li> );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Edit <code>src/App.js</code> and save to reload.</p>
          <p>Bonjour {this.state.userName}</p>
          <ul>{items}</ul>
          <Form updateUserName={userName => this.updateUserName(userName)}/>
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
