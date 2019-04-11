import "./scss/main.scss";
import * as serviceWorker from "./serviceWorker";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Internships from "./Internships";
import FAQ from "./FAQ";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
};

/* add the navbar component */
const Navbar = () => (
  <div>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: "darkblue"
      }}
    >
      Home
    </NavLink>
    <NavLink
      to="/internships"
      exact
      style={link}
      activeStyle={{
        background: "darkblue"
      }}
    >
      Internships
    </NavLink>
    <NavLink
      to="/faq"
      exact
      style={link}
      activeStyle={{
        background: "darkblue"
      }}
    >
      FAQ
    </NavLink>
  </div>
);

ReactDOM.render(
  <Router>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/internships" component={Internships} />
    <Route exact path="/faq" component={FAQ} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
