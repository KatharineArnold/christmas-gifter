import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ShowSelected.css";

class ShowSelected extends Component {
  render() {
    return (
      <div className="showSelected">
        <h2 className="match">Your Match:</h2>
        <h1 className="match">{this.props.match}</h1>
      </div>
    );
  }
}

export default ShowSelected;
