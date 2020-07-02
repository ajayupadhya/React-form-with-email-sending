import React, { Component } from "react";
import Nav from "./nav";
import Logo from "../photo/signin.png";
import { Redirect } from "react-router-dom";

const validEmailRegex = RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
);
export default class Employ extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      errors: {
        email: "",
        password: "",
      },
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  };

  handleSubmit = () => {
    let email = this.state.email;
    let password = this.state.password;
    console.log(email);
    console.log(password);
    if (email === "ajay@gmail.com" && password === "123456789") {
      this.setState({ looggedin: true });
    } else return console.log("failed");
  };

  render() {
    const { errors } = this.state;
    if (this.state.looggedin) {
      localStorage.setItem("token", "ajaykumarupadhyay");
      return <Redirect to="/employ" />;
    }
    return (
      <div>
        <Nav />
        <img className="logo" src={Logo} alt="website logo" />
        <div className="signin">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                onChange={this.handleChange}
                noValidate
              />
              {errors.email.length > 0 && (
                <span className="error">{errors.email}</span>
              )}
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                name="password"
                onChange={this.handleChange}
                noValidate
              />
              {errors.password.length > 0 && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div className="info">
              <small>Password must be eight characters in length.</small>
            </div>

            <button
              type="button"
              onClick={this.handleSubmit}
              class="btn btn-primary btn-to"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
