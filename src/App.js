import React, { Component } from "react";
import logo from "./logo.svg";
import NavBar from "./components/Navbar.js";
import "./App.css";

class App extends Component {

  state = {
    characters: characters,
    score: 0,
    maxScore: 12,
    topScore: 0
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
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
