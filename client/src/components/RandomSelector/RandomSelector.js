import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './RandomSelector.css';
import ShowSelected from '../ShowSelected/ShowSelected';
import axios from 'axios';

class RandomSelector extends Component {
  state = {
    revealed: false,
  };

  handleSubmit = () => {
    this.setState({ revealed: true });
  };

  render() {
    let content = <ShowSelected match={this.props.gifter.match}></ShowSelected>;

    if (!this.state.revealed) {
      content = (
        <div className="reveal">
          <button className="revealBtn btn btn-lg" onClick={this.handleSubmit}>
            {this.props.gifter.name} click to reveal your random match
          </button>
        </div>
      );
    }
    return content;
  }
}

export default RandomSelector;
