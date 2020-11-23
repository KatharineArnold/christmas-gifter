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
        <div className='reveal container'>
          <h1 className='welcome'> Welcome {this.props.gifter.name}!</h1>

          <button className='revealBtn btn btn-lg' onClick={this.handleSubmit}>
            <h1 className='gift-box'>
              <h1>🎁</h1>
              <h2>click me</h2>
            </h1>
          </button>
        </div>
      );
    }
    return content;
  }
}

export default RandomSelector;
