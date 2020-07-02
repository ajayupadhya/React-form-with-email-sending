import React, { Component, Fragment } from "react";
import Nav from "./nav";
import Display from "./display";

const validEmailRegex = RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};
class Enquiry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: true,

      name: "",
      phone: "",
      email: "",
      message: "",
      errors: {
        email: "",
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
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
      let enquiry = {};
      enquiry.name = this.state.name;
      enquiry.email = this.state.email;
      enquiry.phone = this.state.phone;
      enquiry.message = this.state.message;

      this.props.data(enquiry);

      let bool = this.state.bool;
      this.setState({ bool: !bool });
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const { errors, bool, name, phone, email, message } = this.state;
    return (
      <Fragment>
        <Nav />
        {bool ? (
          <div className="f">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="name"
                  name="name"
                  onChange={this.handleChange}
                  noValidate
                ></input>
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter the Email"
                  name="email"
                  onChange={this.handleChange}
                  noValidate
                />
                {errors.email.length > 0 && (
                  <span className="error">{errors.email}</span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="number">Contact Number</label>
                <input
                  type="Number"
                  required
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Phone Number"
                  name="phone"
                  onChange={this.handleChange}
                  noValidate
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">
                  Enter the Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  onChange={this.handleChange}
                  noValidate
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              {validateForm(this.state.errors) !== true ? (
                <div>Please Enter All Field</div>
              ) : null}
            </form>
          </div>
        ) : (
          <Display name={name} email={email} phone={phone} message={message} />
        )}
      </Fragment>
    );
  }
}
export default Enquiry;
