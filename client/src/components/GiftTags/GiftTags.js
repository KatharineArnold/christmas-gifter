import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./GiftTags.css";
import RandomSelector from "../RandomSelector/RandomSelector";
import Countdown from "react-countdown-now";

class GiftTags extends Component {
  state = {
    gifter: null
  };

  componentDidMount() {
    const { name } = this.props.match.params;
    axios.get(`/api/gifters?name=${name}`).then(res => {
      this.setState({ gifter: res.data[0] });
    });
  }

  updateGifter = updatedGifter => {
    axios
      .put("/api/gifters/" + this.state.gifter._id, updatedGifter)
      .then(({ data }) => {
        this.setState({ gifter: data });
      });
  };

  render() {
    let content = <div className="container"></div>;

    if (this.state.gifter) {
      content = [
        <div className="container">
          <RandomSelector
            getRandom={this.props.getRandom}
            matched={this.props.matched}
            updateUser={this.props.updateUser}
            user={this.props.user}
            gifter={this.state.gifter}
            updateGifter={this.updateGifter}
          ></RandomSelector>

          <h3 className="days-until">Days Until Christmas!</h3>
          <Countdown date={"2019-12-25T01:02:03"} />
        </div>
      ];
    }

    return content;
  }
}

export default GiftTags;
