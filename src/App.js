import React, { Component } from "react";
import "./App.css";
import Main from "./Main";
import Bio from "./Bio";
import BgSVG from "./BgSVG";
import Message from "./Message";
import NavBar from "./NavBar";

class App extends Component {
  state = {
    selectedPage: ""
  };
  handlePage = e => {
    this.setState({ selectedPage: e });
    console.log(e);
  };
  render() {
    const { selectedPage } = this.state;
    console.log(selectedPage);
    return (
      <div>
        <NavBar selectedPage={this.state.selectedPage} handlePage={this.handlePage} />
        <BgSVG />
        {selectedPage === "" && <Main handlePage={this.handlePage} />}
        {selectedPage === "message" && <Message handlePage={this.handlePage} />}
        {selectedPage === "bio" && <Bio handlePage={this.handlePage} />}
      </div>
    );
  }
}

export default App;
