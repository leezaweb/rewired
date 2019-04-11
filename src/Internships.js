import React, { Component } from "react";
import { Link } from "react-router";
import App from "./App";

class Internships extends Component {
  render() {
    return (
      <App>
        <div className="Internships">
          <div className="Internships-header">
            <h2>Internships page</h2>
          </div>
          <p>
            <a href="/">Home</a>
          </p>
        </div>
      </App>
    );
  }
}

export default Internships;
