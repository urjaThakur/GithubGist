import React, { Component } from "react";
import "../App.css";
import Gist from "super-react-gist";
import Navbar1 from "./Navbar1";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: `https://gist.github.com/${this.props.match.params.id}`,
    };
  }

  render() {
    return (
      <div>
        <Navbar1 />
        <div className="m-5">
          <Gist url={this.state.url} />
        </div>
      </div>
    );
  }
}

export default App;
