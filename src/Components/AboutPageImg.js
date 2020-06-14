import React, { Component } from "react";
import logo from "./aboutImg.JPG";
export default class AboutPageImg extends Component {
  render() {
    return (
      <div className="row">
        <div className="aboutImg">
          <img src={logo} width="300" height="300" />
        </div>
      </div>
    );
  }
}
