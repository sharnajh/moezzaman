import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";

class HomeSVG extends Component {
  reveal = () => {
    anime({
      targets: "#homecirque",
      strokeDashoffset: [anime.setDashoffset, 0],
      stroke: "#00d5ff",
      easing: "easeOutExpo",
      duration: 1000
    });
  };
  hide = () => {
    anime({
      targets: "#homecirque",
      strokeDashoffset: [1, anime.setDashoffset],
      stroke: "none",
      easing: "easeOutExpo",
      duration: 1000
    });
  };
 
  directHome = () => {
    const tl = anime.timeline({
      easing: "easeOutExpo"
    });
    tl.add(
      {
        targets: "#bio",
        opacity: [1, 0],
        easing: "easeOutExpo",
        duration: 1000
      },
      0
    ).add(
      {
        targets: ".polymorph",
        points: [{ value: "215,110 0,110 0,0 215,0" }],
        duration: 1500
      },
      0
    );
  };
  render() {
    return (
      <div
        className="home"
        onMouseEnter={() => this.reveal()}
        onMouseLeave={() => this.hide()}
      >
        <svg
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-10 -10 46 46"
          id="house"
        >
          <path d="M 16 2.59375 L 15.28125 3.28125 L 2.28125 16.28125 L 3.71875 17.71875 L 5 16.4375 L 5 28 L 14 28 L 14 18 L 18 18 L 18 28 L 27 28 L 27 16.4375 L 28.28125 17.71875 L 29.71875 16.28125 L 16.71875 3.28125 Z M 16 5.4375 L 25 14.4375 L 25 26 L 20 26 L 20 16 L 12 16 L 12 26 L 7 26 L 7 14.4375 Z" />
          <circle
            id="homecirque"
            cx="16"
            cy="17"
            r="18"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    );
  }
}
export default HomeSVG;
