import React, { Component } from "react";
import "../App.css";
import Gist from "super-react-gist";
import Navbar1 from "./Navbar1";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/urjaThakur/gists")
      .then((response) => {
        //console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const lists = this.state.data.map((list) => {
      // console.log(list.files);
      const name = Object.entries(list.files).map((key, value) => {
        //console.log(key[0]);
        return key[0];
      });
      // console.log(name);
      return (
        <div className="ml-4 mb-5">
          <div className="d-flex ">
            <div className="d-flex">
              <img
                className="mr-2 img1"
                alt=""
                src="https://avatars2.githubusercontent.com/u/68221509?s=460"
              />
              <h6 className="mr-2 text">UrjaT /</h6>
              <h6 className="mr-2 text">{name}</h6>
            </div>
            <div className="d-flex ml-auto">
              <div>
                <i className="fa fa-code text-secondary mr-2 border"></i>
              </div>
              <div>
                <i className="fa fa-code-fork text-secondary mr-2"></i>
              </div>
              <div>
                <i className="fa fa-comment-o text-secondary mr-2"></i>
              </div>
              <div>
                <i className="fa fa-star text-secondary "></i>
              </div>
            </div>
          </div>
          <Gist url={list.html_url} />
        </div>
      );
    });

    //console.log(this.state.data);

    return (
      <div>
        <Navbar1 />
        <div className="m-5">
          <div className="row">
            <div className="col-3">
              <img
                className="img2"
                alt=""
                src="https://avatars2.githubusercontent.com/u/68221509?s=460"
              />
              <h3 className=" text1 mt-3 text-secondary">UrjaT</h3>
            </div>
            <div className="col-9 ">
              <div className="border-bottom mt-5 mb-3">
                <h6 className="text-left">
                  <span className="abc">All Gists</span>
                  <span className="ml-2 count">{this.state.data.length}</span>
                </h6>
              </div>
              {lists}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
