import React, { Component } from "react";
import "./App.css";
import Main from "./Main";
import Bio from "./Bio";
import { Switch, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    selectedPage: "bio"
  };
  setPage = e => {
    e.preventDefault();
    this.setState({ selectedPage: e.target.value });
  };
  render() {
    const { selectedPage } = this.state;
    return (
      <div>
        <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/bio">Bio</Link>
        </div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/bio" component={Bio} />
        </Switch>
      </div>
    );
  }
}

export default App;
