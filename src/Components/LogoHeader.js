import React, { Component } from "react";
import logo from "./logo1.png";
export default class LogoHeader extends Component {
  render() {
    return (
      <div className="row">
        <div className="logo">
          <img src={logo} width="120" height="50" />
        </div>
      </div>
    );
  }
}
