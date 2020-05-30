import React, { Component } from "react";
import homelogo from '../photo/home.png';
import Nav from "../component/nav";

import { Redirect, Link } from "react-router-dom";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bool: false,
    };

    
  }


  render() {
    return (
      <div>
        <Nav />
        <div className="home-page">
          <img className="homelogo" src={homelogo} alt="website logo" />
          <Link to="/enquiry"><button type="button" class="btn btn-outline-success btn-lg btn-to">
            Take Inquiry
          </button></Link>
        </div>
      </div>
    );
  }
}

export default Main;
