import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";
import HomeSVG from "./HomeSVG";
import SnakeSVG from "./SnakeSVG";

class Message extends Component {
  setAnimation = x => {
    if (x === "email") {
      anime({
        targets: "path",
        strokeDashoffset: {
          value: 0,
          duration: 700,
          easing: "easeOutQuart"
        },
        strokeDasharray: {
          value: "240 1386",
          duration: 700,
          easing: "easeOutQuart"
        }
      });
    } else if (x === "text") {
      anime({
        targets: "path",
        strokeDashoffset: {
          value: -336,
          duration: 700,
          easing: "easeOutQuart"
        },
        strokeDasharray: {
          value: "240 1386",
          duration: 700,
          easing: "easeOutQuart"
        }
      });
    } else if (x === "submit") {
      anime({
        targets: "path",
        strokeDashoffset: {
          value: -730,
          duration: 700,
          easing: "easeOutQuart"
        },
        strokeDasharray: {
          value: "530 1386",
          duration: 700,
          easing: "easeOutQuart"
        }
      });
    }
  };

  render() {
    return (
      <div className="section">
        <HomeSVG handlePage={this.props.handlePage} color={"#fff"} />
        <h1
          style={{
            zIndex: 90,
            color: "#fff",
            margin: "0",
            marginTop: "100px",
            padding: "0"
          }}
        >
          Contact Moe
        </h1>
        <div id="formcontainer">
          <SnakeSVG />
          <div className="form">
            <label>Email</label>
            <input
              onFocus={() => this.setAnimation("email")}
              id="email"
              placeholder="Enter your email address"
            />
            <label for="message">Message</label>
            <input
              onFocus={() => this.setAnimation("text")}
              placeholder="Enter your message"
              id="text"
            />
            <input
              onFocus={() => this.setAnimation("submit")}
              type="submit"
              id="submit"
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
