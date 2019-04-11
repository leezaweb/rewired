import React, { Component } from "react";
import logo from "./logo.svg";
import "./scss/main.scss";

class App extends Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        {this.props.children}
      </div>
    );
  }
}

export default App;
