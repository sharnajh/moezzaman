import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div id="nav" onClick={() => this.props.handlePage("bio")}>
        
        Bio
      </div>
    );
  }
}

export default Nav;