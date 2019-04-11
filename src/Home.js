import React, { Component } from "react";
//
//
import App from "./App";
import ReactMarkdown from "react-markdown";

let input = "# This is a header\n\nAnd this is a paragraph";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      input: input
    });
  }

  render() {
    return (
      <App>
        <div className="Home">
          <div className="Home-header" />
          <ReactMarkdown className="Home-intro" source={this.state.input} />

          <p>
            <a href="faq">FAQ</a>
            <a href="internships">Internships</a>
          </p>
        </div>
      </App>
    );
  }
}

export default Home;
