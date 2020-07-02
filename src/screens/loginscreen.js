import React, { Component } from "react";
import Nav from "../component/nav";
import { Link, Redirect } from "react-router-dom";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedin = true;
    if (token === null) {
      loggedin = false;
    }
    this.state = {
      loggedin,
      data: JSON.parse(localStorage.getItem("data")) || [],
    };
  }

  sendFeedback(templateId, variables) {
    window.emailjs
      .send("service id", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err) =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  render() {
    if (this.state.loggedin === false) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <Nav />
        <div className="loginheading">
          <h3 className="">All Enquiries</h3>
          <hr />
          {this.state.data.map((item, i) => {
            return (
              <div class="card" key={i}>
                <div class="card-body">
                  <h5 class="card-title">{item.name}</h5>
                  <p class="card-text">{item.message}</p>
                  <h4
                    className="btn btn-primary"
                    onClick={() => {
                      const templateId = "template_id";

                      this.sendFeedback(templateId, {
                        message_html:
                          "Thanks for reaching us, allow us 48 hours to get back to you.",
                        from_name: "Serve India Consultancy",
                        to_email: item.email,
<<<<<<< HEAD
                        to_name: item.name,
                        
=======
                        to_name: item.name
                    
>>>>>>> 534a735e3f105156eb814402a9f4396006c2c8f4
                      });
                    }}
                  >
                    {item.email}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/login">
          {" "}
          <button
            type="button"
            class="btn btn-primary btn-lg logbtn"
            onClick={() => {
              localStorage.removeItem("token");
            }}
          >
            Logout
          </button>
        </Link>
      </div>
    );
  }
}
