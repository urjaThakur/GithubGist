import React, { Component } from "react";
import "../App.css";
import axios from "axios";
class CreateGist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: "",
      filename: "",
      content: "",
    };
  }

  onChangedesc = (e) => {
    this.setState({ description: e.target.value });

    //console.log(e.target.value);
  };
  onChangeHandler = (e) => {
    this.setState({ filename: e.target.value });

    //console.log(e.target.value);
  };

  onChangeText = (e) => {
    this.setState({ content: e.target.value });
    //console.log(e.target.value);
  };
  onSubmitHandler = (e) => {
    const data = {
      description: this.state.description,
      public: true,
      files: {
        [this.state.filename]: {
          content: this.state.content,
        },
      },
    };

    //console.log(`token ${this.state.accessToken}`);
    axios
      .post(
        "https://api.github.com/gists?access_token=e145b2fbfe805eb4a8971caac8e71bb73cd4cd41",
        data
      )
      .then((response) => {
        console.log(response);
        alert("Gist Created !!");
        window.location.reload();
      });
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <input
          onChange={this.onChangedesc}
          className=" form-control mb-2 w-75 mx-auto"
          placeholder="Gist description..."
        />
        <div className="card w-75 mx-auto">
          <div className="card-header p-0 p-1  ">
            <input
              onChange={this.onChangeHandler}
              className=" form-control w-75 mr-auto"
              placeholder="Filename including extension"
            />
          </div>
          <div className="card-body p-0">
            <textarea
              onChange={this.onChangeText}
              className="form-control"
            ></textarea>
          </div>
        </div>
        <button onClick={this.onSubmitHandler} className="mt-2">
          Create Gist
        </button>
      </div>
    );
  }
}

export default CreateGist;
