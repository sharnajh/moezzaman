import React, { Component } from "react";
import HomeSVG from "./HomeSVG";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="leftnav">{""}</div>
        <div className="midnav">
          <Link to="/about">
            <div className="navItem" id="about">
              About
            </div>
          </Link>
          <Link to="/">
            <div className="navItem" id="hommes">
              <HomeSVG />
            </div>
          </Link>
          <Link to="/contact">
            <div className="navItem" id="contact">
              Contact
            </div>
          </Link>
        </div>
        <a href="https://www.linkedin.com/in/mohammed-asaduzzaman/">
        <div className="rightnav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#fff"
            id="linkedin"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </div>
        </a>
      </div>
    );
  }
}

export default NavBar;
