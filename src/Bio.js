import React, { Component } from "react";
import MoeSVG from "./MoeSVG";
import anime from "animejs/lib/anime.es.js";

class Bio extends Component {
  componentDidMount() {
    const tl = anime.timeline({
      easing: "easeOutExpo"
    });
    tl.add({
      targets: ".polymorph",
      fill: "#000",
      duration: 500
    })
    .add(
      {
        targets: ".polymorph",
        fill: "#000",
        points: [{ value: "215,110 0,110 190,90 215,0" }],
        easing: "easeOutQuad",
        duration: 900,
        loop: false
      },
      200
    ).add(
      {
        targets: ".cls-1",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "cubicBezier(.5, .05, .1, .3)",
        duration: 1000,
        delay: function(el, i) {
          return i * 14;
        }
      },
      220
    );
  }
  directHome = () => {
    const tl = anime.timeline({
      easing: "easeOutExpo"
    });
    tl.add({
      targets: "#bio",
      opacity: [1,0],
      easing: "easeOutExpo",
      duration: 1000
    }, 0)
    .add({
      targets: ".polymorph",
      points: [{ value: "215,110 0,110 0,0 215,0" }],
      duration: 1000
    }, 0)
    .add({
      targets: ".polymorph",
      easing: "easeOutQuad",
      fill: "#fff",
      duration: 300
    },900).finished.then(() =>  this.props.handlePage(""))
  };
  render() {
    return (
      <div className="section" id="bio">
        <div className="home" onClick={this.directHome}>
          <svg
            fill="#000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="32px"
            height="32px"
          >
            <path d="M 16 2.59375 L 15.28125 3.28125 L 2.28125 16.28125 L 3.71875 17.71875 L 5 16.4375 L 5 28 L 14 28 L 14 18 L 18 18 L 18 28 L 27 28 L 27 16.4375 L 28.28125 17.71875 L 29.71875 16.28125 L 16.71875 3.28125 Z M 16 5.4375 L 25 14.4375 L 25 26 L 20 26 L 20 16 L 12 16 L 12 26 L 7 26 L 7 14.4375 Z" />
          </svg>
        </div>
        <div className="moetivation">
          <h1 className="moetitle">#</h1>
          <div id="svgcontainer">
            <MoeSVG />
          </div>
          <h1 className="moetitle">TIVATE</h1>
        </div>
        <p className="description">
          Mohammed was born in Sylhet, Bangladesh in '96, and shortly thereafter
          he and his family replanted their roots in New York City. In 2018, he
          graduated from Baruch College's Zicklin School of Business with a BBA
          in Finance.
        </p>
      </div>
    );
  }
}

export default Bio;
