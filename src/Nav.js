import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";

class Nav extends Component {
  handleHandlePage = e => {
    //this.props.handlePage(e)
    console.log(e);
  };
  render() {
    return (
      <div id="nav" onClick={() => this.props.handlePage("bio")}>
        
        bio
      </div>
    );
  }
}

export default Nav;
