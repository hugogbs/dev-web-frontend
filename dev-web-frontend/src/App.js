import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Feed from "./feed/Feed";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Feed />
        </header>
      </div>
    );
  }
}

export default App;
