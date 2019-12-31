import React, { Component } from "react";
import MessageForm from "./MessageForm";
import anime from "animejs/lib/anime.es.js";

class Message extends Component {
  componentDidMount() {
    anime(
      {
        targets: ".polymorph",
        points: [{ value: "215,110 0,110 0,0 215,0" }],
        duration: 1500,
        easing: "easeOutExpo"
      },
      0
    )
  }
  render() {
    return (
      <div className="section" style={{ alignItems: "space-between" }}>
        <h3
          style={{
            zIndex: "1",
            display: "block",
            color: "#fff",
            margin: "0",
            marginTop: "50px",
            padding: "0",
            textAlign: "center"
          }}
        >
          Contact Moe at
          <br />
          moezzaman3@gmail.com
        </h3>
        <MessageForm />
        <h3
          style={{
            zIndex: 90,
            color: "#fff",
            margin: "0",
            marginBottom: "50px",
            padding: "0",
            textAlign: "center"
          }}
        >
          or connect with him
          <br /> on{" "}
          <a
            href="https://www.linkedin.com/in/mohammed-asaduzzaman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </h3>
      </div>
    );
  }
}

export default Message;
