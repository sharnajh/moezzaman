import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";
import Nav from "./Nav";
import Message from "./Message";

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
          targets: ".subtitle .letter",
          translateX: [100, 0],
          opacity: [0, 1],
          color: "#fff",
          delay: (el, i) => 600 + 90 * i
        },
        1500
      )
      .add(
        {
          targets: "#nav .wop",
          opacity: [0, 1],
          translateY: [150, 0],
          translateX: 0,
          color: "#fff",
          duration: 4000,
          delay: (el, i) => 1000 + 100 * i
        },
        2000
      );
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
              <Nav  handlePage={this.props.handlePage} />
            </div>
        </div>

    );
  }
}

export default Main;
