import React, { Component } from "react";
import "./App.css";
import Main from "./Main";
import Bio from "./Bio";
import BgSVG from "./BgSVG"
import Message from "./Message"

class App extends Component {
  state = {
    selectedPage: "message"
  }
  handlePage = (e) => {
    this.setState({ selectedPage: e })
    console.log(e)
  }
  render() {
    const { selectedPage } = this.state
    console.log(selectedPage)
    return (
      <div>
        <BgSVG />
        {selectedPage === "" && <Main handlePage={this.handlePage} />}
        {selectedPage === "message" && <Message handlePage={this.handlePage} />}
        {selectedPage === "bio" && <Bio handlePage={this.handlePage} />}
      </div>
    );
  }
}

export default App;
