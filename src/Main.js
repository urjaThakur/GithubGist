import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Main extends Component {
  clickHandler = () => {
    this.props.history.replace({ pathname: "/inside" });
  };

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
              LogIn
            </NavLink>
          </nav>
        </header>
        <section className="section-a bg-dark">
          <div className="card1 mx-auto text-white text-center">
            <h1>Build for developers</h1>
            <p>
              GitHub is a development platform inspired by the way you work.
              From open source to business, you can host and review code, manage
              projects, and build software alongside 50 million developers.
            </p>
            <button onClick={this.clickHandler}>Sign In</button>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
