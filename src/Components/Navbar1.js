import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: true,
    };
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar">
            <a className="navbar-brand text-white">GitHub Gist</a>
            <ul className="nav mr-0">
              <li>
                <NavLink className="link-a text-white" to="/AllGist">
                  All Gists
                </NavLink>
              </li>
              <li>
                <NavLink className="link-a text-white" to="/">
                  Back To GitHub
                </NavLink>
              </li>
              <li>
                <NavLink className="link-a text-white" to="/">
                  Logout
                </NavLink>
              </li>
              <li className="mr-0">
                <img
                  alt=""
                  src="https://avatars2.githubusercontent.com/u/68221509?s=460"
                />
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;
