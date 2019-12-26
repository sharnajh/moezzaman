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
        easing: "easeOutExpo",
        duration: 3000,
        delay: (el, i) => 600 + 90 * i
      },
      100
    )
      .add(
        {
          targets: ".section",
          backgroundColor: "#000",
          easing: "easeOutExpo",
          duration: 2000
        },
        3500
      )
      .add(
        {
          targets: [".title"],
          color: "#fff",
          easing: "easeOutExpo",
          duration: 2000
        },
        3400
      )
      .add(
        {
          targets: ".subtitle .letter",
          translateX: [100, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 3000,
          delay: (el, i) => 600 + 90 * i
        },
        3500
      );
  }
  render() {
    // Name Strings
    const mo = "MOE".split("");
    const zzaman = "ZZAMAN".split("");
    const mohammed = "MOHAMMED".split("");
    const asaduzzaman = "ASADUZZAMAN".split("");
    return (
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
        </h2>
        
      </div>
    );
  }
}

export default Main;
