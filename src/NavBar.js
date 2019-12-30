import React, { Component } from "react";
import HomeSVG from "./HomeSVG";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/about">
          <div className="navItem" id="about">
            About
          </div>
        </Link>
        <Link to="/">
          <div className="navItem">
            <HomeSVG color="#fff" />
          </div>
        </Link>
        <Link to="/contact">
          <div className="navItem" id="contact">
            Contact
          </div>
        </Link>
      </div>
    );
  }
}

export default NavBar;
