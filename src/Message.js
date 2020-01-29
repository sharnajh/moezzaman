import React, { Component } from "react";
import Loading from "./loading";
import Mail from "./mail";
import anime from "animejs/lib/anime.es.js";

class Message extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    focused: "",
    isLoading: false
  };
  formValidate = () => {
    const { name, email, message, isLoading } = this.state;
    return name === "" ||
      email === "" ||
      message === "" ||
      isLoading === true ||
      email.includes("@") === false
      ? true
      : false;
  };

  setName = e => {
    this.setState({ name: e.target.value });
  };

  setEmail = e => {
    const email = e.target.value.trim();
    this.setState({ email });
  };

  setMessage = e => {
    this.setState({ message: e.target.value });
  };

  handleFocus = e => {
    console.log(e);
    this.setState({ focused: e.target.name });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.formValidate() === false) {
      this.setState({ isLoading: true });
      const template_id = "moe_zzaman";
      this.sendFeedback(template_id, {
        message: this.state.message,
        user_name: this.state.name,
        user_email: this.state.email
      });
    }
  };

  sendFeedback(template_id, variables) {
    window.emailjs
      .send("gmail", template_id, variables)
      .then(res => {
        this.setState({
          name: "",
          email: "",
          message: "",
          isLoading: false
        });
        console.log("Email successfully sent!");
      })
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
    return (
      <div>
        {this.state.isLoading && (
          <div className="loadingscreen">
            <div className="loadingmodal">
              {this.state.isLoading && <Loading />}
              {this.state.isLoading && "Sending..."}
            </div>
          </div>
        )}
        <div
          className="section"
          id="msg-section"
          style={{ justifyContent: "flex-start" }}
        >
          <div className="header">
            <div className="picwrapper">
              <div className="contactpic" />
            </div>
            <div className="contactdetails">
              <div className="hed1">Send Moe a message</div>
              <div className="email">
                <div className="mailiconwrapper">
                  <Mail />
                </div>
                <div className="hed2">moezzaman3@gmail.com</div>
              </div>
            </div>
          </div>
          <form className="message-form">
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
                required
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
                placeholder="Type your email address here"
                value={this.state.email}
                onChange={this.setEmail}
                onFocus={this.handleFocus}
                required
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
                required
              ></textarea>
            </div>
            <button
              className="submit-button"
              id={
                this.formValidate()
                  ? "submit-button-disabled"
                  : "submit-button-enabled"
              }
              onSubmit={this.handleSubmit}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Message;
