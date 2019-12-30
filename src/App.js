import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Main from "./Main";
import Bio from "./Bio";
import BgSVG from "./BgSVG";
import Message from "./Message";
import NavBar from "./NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <BgSVG />
        <Route exact path="/" component={Main} />
        <Route path="/about" component={Bio} />
        <Route path="/contact" component={Message} />
      </div>
    );
  }
}

export default App;
