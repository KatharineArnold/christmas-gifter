

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./RandomSelector.css";
import ShowSelected from '../ShowSelected/ShowSelected';

class RandomSelector extends Component {

    state = {
        match: ""
    }


    handleSubmit = () => {
        let yourMatch = this.props.getRandom();
        this.setState({ match: yourMatch })
        this.props.updateUser({
            match: yourMatch,
            matched: true
        });
    }

    render() {


        let content = (
            <ShowSelected match={this.props.user.match}></ShowSelected>

        )

        if (!this.props.user.matched) {
            content = (
                <div>
                    <button onClick={this.handleSubmit}>Click to reveal your random match</button>
                    <p>here is your match {this.state.match}</p>
                </div>
            )
        }
        return (
            content
        )
    }

}


export default RandomSelector;






// const family = [Alex, Mom, Keith, Angela, Matt, Katharine, Rid]




// let randomPerson = family[Math.floor(Math.random()*family.length)];

