import React, { Component } from "react";
import anime from "animejs/lib/anime.es.js";

class Message extends Component {
  state = {
    name: "",
    email: "",
    message: ""
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
    console.log(this.state.name, this.state.email, this.state.message);
    return (
      <div className="section" style={{ alignItems: "space-between" }}>
        <h3 id="mail">Contact Moe</h3>
        <form className="message-form" onSubmit={this.handleSubmit}>
          <input
            className="message-input"
            id="name"
            type="text"
            placeholder="Type your name here"
            value={this.state.name}
            onChange={this.setName}
          ></input>

          <input
            className="message-input"
            id="email"
            type="email"
            placeholder="Type your email here"
            value={this.state.email}
            onChange={this.setEmail}
          ></input>

          <textarea
            className="message-input"
            id="message"
            rows="5"
            placeholder="Type your message here"
            value={this.state.message}
            onChange={this.setMessage}
            
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  }
}

export default Message;
