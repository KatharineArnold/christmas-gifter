import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./GiftTags.css"
import RandomSelector from '../RandomSelector/RandomSelector';


class GiftTags extends Component {


    render() {

        let content = (

            <div className="container">
                {/* <div className="tags">

                    <div className="tag-container tag-container1">
                        <div className="tag">

                            <div className="tag-side tag-1-side">
                                <div className="tag-1-top"></div>
                                <div className="tag-text tag-1-text">
                                    Seasons<br />Greetings
                    <div className="rule-shape rule-red">&#x02605;</div>
                                </div>
                            </div>

                            <div className="tag-side tag-1-side is-back">
                                <div className="tag-1-top"></div>
                                <div className="tag-text tag-1-text">
                                    And a happy New Year
                    <div className="rule-shape">&#x02605;</div>
                                </div>
                            </div>

                        </div>
                    </div>



                    <div className="tag-container tag-container2">
                        <div className="tag">

                            <div className="tag-side tag-2-side">
                                <div className="tag-text tag-2-text">
                                    Happy<br />Holidays
                    <div className="rule-diagonal"></div>
                                </div>
                            </div>

                            <div className="tag-side tag-2-side is-back">
                                <div className="tag-text tag-2-text">
                                    May your ev'ry wish come true
                    <div className="rule-diagonal"></div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div> */}
            </div>
        )

        if (this.props.user) {
            content = [
                <RandomSelector getRandom={this.props.getRandom} matched={this.props.matched} updateUser={this.props.updateUser} user={this.props.user}></RandomSelector>

            ]

        }

        return (
            content
        );
    };
}




export default GiftTags;
