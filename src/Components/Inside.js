import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import Navbar1 from "./Navbar1";
import CreateGist from "./CreateGist";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      url: "",
    };
  }

  componentDidMount() {
    //console.log(this.props);
    axios
      .get("https://api.github.com/users/urjaThakur/gists")
      .then((response) => {
        //console.log(response.data);

        this.setState({ data: response.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    //console.log(this.state.data);
    const lists = this.state.data.map((list) => {
      //console.log(list);
      const name = Object.entries(list.files).map((key, value) => {
        //console.log(key[0]);
        return key[0];
      });
      // console.log(name);
      return (
        <Link to={`/${list.id}`} key={list.id} className="mr-3">
          {name}
        </Link>
      );
    });
    //console.log(lists);
    return (
      <div className="App">
        <Navbar1 />
        <section className="section-b p-4 ">
          {lists}
          <Link to="/AllGist" className="mr-3">
            View Your Gists
          </Link>
        </section>
        <section className="section-c p-3">
          <CreateGist />
        </section>
      </div>
    );
  }
}

export default App;
