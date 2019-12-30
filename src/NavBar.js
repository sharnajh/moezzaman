import React, { Component } from "react";
import HomeSVG from "./HomeSVG";
import AboutSVG from "./AboutSVG";
import ContactSVG from "./ContactSVG";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
          <p onClick={() => this.props.handlePage("bio")}>About</p>
        <HomeSVG
          selectedPage={this.props.selectedPage}
          handlePage={this.props.handlePage}
          color="#fff"
        />
        <p onClick={() => this.props.handlePage("message")}>Contact</p>
      </div>
    );
  }
}

export default NavBar;
