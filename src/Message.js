import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";

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

  reveal = () => {
    anime({
      targets: "#cirque",
      strokeDashoffset: [anime.setDashoffset, 0],
      stroke: "#fff",
      easing: "easeOutExpo",
      duration: 1000
    });
  };
  hide = () => {
    anime({
      targets: "#cirque",
      strokeDashoffset: [1, anime.setDashoffset],
      stroke: "none",
      easing: "easeOutExpo",
      duration: 1000
    });
  };

  render() {
    return (
      <div className="section">
        <div
          className="home"
          onClick={() => this.props.handlePage("")}
          onMouseEnter={() => this.reveal()}
          onMouseLeave={() => this.hide()}
        >
          <svg
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-10 -10 46 46"
            width="45px"
            height="45px"
          >
            <path d="M 16 2.59375 L 15.28125 3.28125 L 2.28125 16.28125 L 3.71875 17.71875 L 5 16.4375 L 5 28 L 14 28 L 14 18 L 18 18 L 18 28 L 27 28 L 27 16.4375 L 28.28125 17.71875 L 29.71875 16.28125 L 16.71875 3.28125 Z M 16 5.4375 L 25 14.4375 L 25 26 L 20 26 L 20 16 L 12 16 L 12 26 L 7 26 L 7 14.4375 Z" />
            <circle
              id="cirque"
              cx="16"
              cy="17"
              r="18"
              stroke-width="2"
              fill="none"
            />
          </svg>
        </div>
        <h1 style={{ zIndex: 90, color: "#fff", margin: "0", marginTop:"100px", padding: "0" }}>Contact Moe</h1>
        <div id="right">
          <svg
            viewBox="0 0 320 300"
            style={{ position: "absolute", width: "320px" }}
          >
            <path
              fill="none"
              stroke="#00d5ff"
              stroke-width="4"
              stroke-dasharray="240 1386"
              d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143"
            />
          </svg>
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
