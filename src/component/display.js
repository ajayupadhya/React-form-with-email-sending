import React, { Component, Fragment } from "react";

export default class Display extends Component {
  render() {
    const { name, email, phone, message } = this.props;
    return (
        <Fragment>
            <h2 style = {{marginTop : 100 , marginLeft : 400}}>Your Details</h2>
            <hr />
      <div className = "display">
        <ul class="list-group">
          <li class="list-group-item active">Name :{name}</li>
          <li class="list-group-item">Email :{email}</li>
          <li class="list-group-item">Phone :{phone}</li>
          <li class="list-group-item"> Message :{message}</li>
        </ul>
      </div>
      </Fragment>
    );
  }
}
