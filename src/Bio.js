import React, { Component } from "react";
import MoeSVG from "./MoeSVG";
import HomeSVG from "./HomeSVG";
import anime from "animejs/lib/anime.es.js";
import nwm from "./companylogos/nwm.jpg"
import citi from "./companylogos/citi.png"
import ilww from "./companylogos/ilww.jpg"

class Bio extends Component {
  state = {
    pathLength: null
  };
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
      ).add({ targets: ".logo", opacity: [0,1]})

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
      )
  }
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
    this.props.handlePage("");
  };

 

  render() {
    console.log(this.state.pathLength);
    return (
      <div className="section" id="bio">
        <HomeSVG directHome={this.directHome} color="#000" />
        <div className="moetivation">
          <h1 className="moetitle">#</h1>
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
        <div id="experience-container">
          <div id="linecontainer">
            <svg
              id="svglinetop"
              viewBox="0 0 100 60"
              width="1px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path id="fulllinepath" d="M 0,0 v100" />
            </svg>
          </div>

          <div id="timeline">
            <div className="job-left">
              <div className="info-left">
                <h2>Financial Representative</h2>
                <img src={nwm} class="logo" />
                {/* Summary of description. */}
              </div>
              <div className="date-right">
                <h5>Nov 2016 - May 2017</h5>
              </div>
            </div>

            <div className="job-right">
              <div className="date-left">
                <h5>Jun 2017 - Feb 2018</h5>
              </div>
              <div className="info-right">
                {" "}
                <h2>Bank Teller II</h2>
                <img src={citi} class="logo" style={{width: "60px"}} />
              </div>
            </div>

            <div className="job-left">
              <div className="info-left">
                <h2>Cofounder & Executive Director of Marketing</h2>
                
              </div>
              <div className="date-right">
                <h5>Jan 2017 – May 2018</h5>
              </div>
            </div>

            <div className="job-left">
              <div className="info-left">
                <h2>Cofounder & Treasurer</h2>
              </div>
              <div className="date-right">
                <h5>Jan 2018 – May 2018</h5>
              </div>
            </div>

            <div className="job-right">
              <div className="date-left">
                <h5>May 2018 - Dec 2018</h5>
              </div>
              <div className="info-right">
                {" "}
                <h2>Account Manager</h2>
                <img src={ilww} class="logo" style={{width: "150px"}} />
              </div>
            </div>

            <div className="job-left">
              <div className="info-left">
                <h2>Personal Banker</h2>
                <img src={citi} class="logo" style={{width: "60px"}} />
              </div>
              <div className="date-right">
                <h5>Dec 2018 - Present</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
