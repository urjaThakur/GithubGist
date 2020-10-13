import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar">
            <a className="navbar-brand text-white">
              GitHub Gist
              <i className="fa fa-github  ml-2"></i>
            </a>
            <NavLink className="link-a text-white" to="/inside">
              Login
            </NavLink>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;
