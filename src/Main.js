import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";

class Main extends Component {
  componentDidMount() {
    const tl = anime.timeline({
      easing: "easeOutExpo"
    });
    tl.add(
      {
        targets: ".title .letter",
        translateX: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        duration: 3000,
        delay: (el, i) => 600 + 90 * i
      },
      0
    )
    .add(
      {
        targets: ".polymorph",
        points: [{ value: "215,110 0,110 0,0 215,0" }],
        duration: 1500
      },
      0
    )
      .add(
        {
          targets: ".subtitle .letter",
          translateX: [100, 0],
          opacity: [0, 1],
          color: "#00d5ff",
          delay: (el, i) => 600 + 90 * i
        },
        1500
      )
  }
  render() {
    // Name Strings
    const mo = "MOE".split("");
    const zzaman = "ZZAMAN".split("");
    const mohammed = "MOHAMMED".split("");
    const asaduzzaman = "ASADUZZAMAN".split("");
    
    return (
      <div>
        <div className="section">
    
              <h1 className="title">
                {mo.map((letter, id) => (
                  <span className="letter" key={id}>
                    {letter}
                  </span>
                ))}{" "}
                {zzaman.map((letter, id) => (
                  <span className="letter" key={id}>
                    {letter}
                  </span>
                ))}
              </h1>
              <h2 className="subtitle">
                {mohammed.map((letter, id) => (
                  <span className="letter" key={id}>
                    {letter}
                  </span>
                ))}{" "}
                {asaduzzaman.map((letter, id) => (
                  <span className="letter" key={id}>
                    {letter}
                  </span>
                ))}
                <br />
              </h2>
                  {/* <p>Finance | New York City | moezzaman3@gmail.com</p> */}
            </div>
        </div>

    );
  }
}

export default Main;
