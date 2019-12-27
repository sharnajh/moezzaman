import React, { Component } from "react";
import "./App.css";
import Main from "./Main";
import Bio from "./Bio";
import BgSVG from "./BgSVG"

class App extends Component {
  state = {
    selectedPage: ""
  }
  handlePage = (e) => {
    this.setState({ selectedPage: e })
  }
  render() {
    const { selectedPage } = this.state
    console.log(selectedPage)
    return (
      <div>
        <BgSVG />
        {selectedPage === "" && <Main handlePage={this.handlePage} />}
        {selectedPage === "bio" && <Bio handlePage={this.handlePage} />}
      </div>
    );
  }
}

export default App;
