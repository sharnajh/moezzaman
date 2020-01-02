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
              <div className="email">
                <div className="mailiconwrapper">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="511.626px"
                    height="511.626px"
                    viewBox="0 0 511.626 511.626"
                  >
                    <path
                      d="M49.106,178.729c6.472,4.567,25.981,18.131,58.528,40.685c32.548,22.554,57.482,39.92,74.803,52.099
			c1.903,1.335,5.946,4.237,12.131,8.71c6.186,4.476,11.326,8.093,15.416,10.852c4.093,2.758,9.041,5.852,14.849,9.277
			c5.806,3.422,11.279,5.996,16.418,7.7c5.14,1.718,9.898,2.569,14.275,2.569h0.287h0.288c4.377,0,9.137-0.852,14.277-2.569
			c5.137-1.704,10.615-4.281,16.416-7.7c5.804-3.429,10.752-6.52,14.845-9.277c4.093-2.759,9.229-6.376,15.417-10.852
			c6.184-4.477,10.232-7.375,12.135-8.71c17.508-12.179,62.051-43.11,133.615-92.79c13.894-9.703,25.502-21.411,34.827-35.116
			c9.332-13.699,13.993-28.07,13.993-43.105c0-12.564-4.523-23.319-13.565-32.264c-9.041-8.947-19.749-13.418-32.117-13.418H45.679
			c-14.655,0-25.933,4.948-33.832,14.844C3.949,79.562,0,91.934,0,106.779c0,11.991,5.236,24.985,15.703,38.974
			C26.169,159.743,37.307,170.736,49.106,178.729z"
                    />
                    <path
                      d="M483.072,209.275c-62.424,42.251-109.824,75.087-142.177,98.501c-10.849,7.991-19.65,14.229-26.409,18.699
			c-6.759,4.473-15.748,9.041-26.98,13.702c-11.228,4.668-21.692,6.995-31.401,6.995h-0.291h-0.287
			c-9.707,0-20.177-2.327-31.405-6.995c-11.228-4.661-20.223-9.229-26.98-13.702c-6.755-4.47-15.559-10.708-26.407-18.699
			c-25.697-18.842-72.995-51.68-141.896-98.501C17.987,202.047,8.375,193.762,0,184.437v226.685c0,12.57,4.471,23.319,13.418,32.265
			c8.945,8.949,19.701,13.422,32.264,13.422h420.266c12.56,0,23.315-4.473,32.261-13.422c8.949-8.949,13.418-19.694,13.418-32.265
			V184.437C503.441,193.569,493.927,201.854,483.072,209.275z"
                    />
                  </svg>
                </div>
                <h4>moezzaman3@gmail.com</h4>
              </div>
              <a href="https://www.linkedin.com/in/mohammed-asaduzzaman/">
              <div className="linked">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                  id="linkedin"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
               
              </div>
             
              </a>
             
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
