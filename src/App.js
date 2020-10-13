import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Inside from "./Components/Inside";
import Main from "./Main";
import AllList from "./Components/AllList";
import AllGist from "./Components/AllGist";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/inside" exact component={Inside} />
            <Route path="/AllGist" exact component={AllGist} />
            <Route path="/:id" exact component={AllList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
