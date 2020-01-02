import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";

class Message extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    focused: ""
  };

  setName = e => {
    e.preventDefault();
    this.setState({ name: e.target.value });
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

  handleFocus = e => {
    console.log(e);
    this.setState({ focused: e.target.name });
  };

  handleBlur = e => {
    e.preventDefault();
  };

  handleSubmit = e => {
    e.preventDefault();
    const template_id = "moe_zzaman";
    this.sendFeedback(template_id, {
      message: this.state.message,
      user_name: this.state.name,
      user_email: this.state.email
    });
  };

  sendFeedback(template_id, variables) {
    window.emailjs
      .send("gmail", template_id, variables)
      .then(res => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  componentDidMount() {
    anime(
      {
        targets: ".polymorph",
        points: [{ value: "215,110 0,110 0,0 215,0" }],
        duration: 1500,
        easing: "easeOutExpo"
      },
      0
    );
    anime(
      {
        targets: ".section",
        opacity: [0, 1],
        duration: 5000
      },
      1500
    );
  }

  render() {
    console.log(this.state.focused);
    return (
      <div className="section" style={{ alignItems: "center" }}>
        <form className="message-form" onSubmit={this.handleSubmit}>
        <div className="header">
          <div className="picwrapper">
          <div className="contactpic" />
          </div>
          <div className="contactdetails">
            <h3>Contact Moe Zzaman</h3>
            <h4>E: moezzaman3@gmail.com</h4>
          </div>
        </div>
          <div
            className="message-input"
            id={this.state.focused === "name" ? "selected-input" : ""}
          >
            <input
              name="name"
              type="text"
              placeholder="Type your name here"
              value={this.state.name}
              onChange={this.setName}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            ></input>
          </div>
          <div
            className="message-input"
            id={this.state.focused === "email" ? "selected-input" : ""}
          >
            <input
              className="message-input"
              name="email"
              type="email"
              placeholder="Type your email here"
              value={this.state.email}
              onChange={this.setEmail}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            ></input>
          </div>
          <div
            className="message-input"
            id={this.state.focused === "message" ? "selected-input" : ""}
          >
            <textarea
              className="message-input"
              name="message"
              rows="2"
              placeholder="Type your message here"
              value={this.state.message}
              onChange={this.setMessage}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            ></textarea>
          </div>
          <div id="submit-button" onClick={this.handleSubmit}>
            Send Message
          </div>
        </form>
      </div>
    );
  }
}

export default Message;
