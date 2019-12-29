import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";
import HomeSVG from "./HomeSVG";
import SnakeSVG from "./SnakeSVG";
import MoPic from "./MoPic.png";

class Message extends Component {
  state = {
    email: "",
    message: ""
  };
  setEmail = e => {
    e.preventDefault();
    const text = e.target.value.trim();
    this.setState({ email: text });
  };
  setMessage = e => {
    e.preventDefault();
    this.setState({ message: e.target.value });
  };
  submitForm = e => {
    e.preventDefault();
    const { email, message } = this.state;
    if (email.includes("@") === false || email === "") {
      alert("Please include a valid email address.");
    } else if (message === "") {
      alert("Please include a message");
    } else {
      alert("Your message has been sent.");
    }
  };
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
    
        <h3
          style={{
            zIndex: "1",
            display: "block",
            color: "#fff",
            margin: "0",
            padding: "0",
            textAlign: "center"
          }}
        >
          Contact Moe at
          <br />
          moezzaman3@gmail.com
        </h3>
        <div id="formcontainer">
          <SnakeSVG />
          <div className="form">
            <label>Email</label>
            <input
              onFocus={() => this.setAnimation("email")}
              onChange={e => this.setEmail(e)}
              value={this.state.email}
              id="email"
              placeholder="Enter your email address"
            />
            <label for="message">Message</label>
            <input
              onFocus={() => this.setAnimation("text")}
              onChange={e => this.setMessage(e)}
              value={this.state.message}
              placeholder="Enter your message"
              id="text"
            />
            <input
              onFocus={() => this.setAnimation("submit")}
              onClick={e => this.submitForm(e)}
              type="submit"
              id="submit"
            ></input>
          </div>
        </div>
        <h3
          style={{
            zIndex: 90,
            color: "#fff",
            margin: "0",
            padding: "0",
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          or connect with him
          <br /> on{" "}
          <a
            href="https://www.linkedin.com/in/mohammed-asaduzzaman/"
            target="_blank"
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
