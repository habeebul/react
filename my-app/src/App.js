import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
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
      <div class="container">
        <div class="jumbotron">
          <h1>Welcome</h1>
          <h2>React & Bootstrap Demo</h2>
        </div>
        <div class="panel panel-primary">
          <div class="panel-heading">Status</div>
          <div class="panel-body">
            <h3>React</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
