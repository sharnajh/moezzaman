import React, { Component } from "react";
import MoeSVG from "./MoeSVG";
import anime from "animejs/lib/anime.es.js";
import Timeline from "./Timeline";

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
          points: [{ value: "215,110 0,110 215,110 215,0" }],
          easing: "easeOutQuad",
          duration: 900,
          loop: false
        },
        200
      )
      .add({
        targets: ".timeline",
        opacity: [0, 1],
        translateY: [150, 0],
        translateX: 0,
        duration: 2000,
        delay: (el, i) => 1000 + 100 * i
      }, 250)

      .add(
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

  render() {
    return (
      <div id="bio">
        <div className="moetivation">
          <div id="svgcontainer">
            <MoeSVG />
          </div>
          <h1 className="moetitle">TIVATE</h1>
        </div>
        <p className="description">
          Mohammed "Moe" Asaduzzaman was born in Sylhet, Bangladesh in '96, and
          shortly thereafter he and his family repotted their roots in New York
          City. His life maxim is to manifest motivation and motivate others to
          pursue what brings them happiness.
        </p>
        <Timeline />
      </div>
    );
  }
}

export default Bio;
