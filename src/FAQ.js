import React, { Component } from "react";
import { Link } from "react-router";
import App from "./App";

class FAQ extends Component {
  render() {
    return (
      <App>
        <div className="FAQ">
          <div className="FAQ-header">
            <h2>FAQ page</h2>
          </div>
          <p>
            <a href="/">Home</a>
          </p>
        </div>
      </App>
    );
  }
}

export default FAQ;
