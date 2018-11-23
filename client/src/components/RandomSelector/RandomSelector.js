

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./RandomSelector.css";
import ShowSelected from '../ShowSelected/ShowSelected';
import axios from 'axios';


class RandomSelector extends Component {

    state = {
        match: "",
    }


    // getRandom = () => {

    // }


    handleSubmit = () => {
        axios.get('/api/gifters').then((res) => {
            // let family = ["Gina", "Keith", "Angela", "Matt", "Katharine"];
            let family = res.data;

            let removeAll = []
            for (let i = 0; i < family.length; i++) {
                if (family[i].match) {
                    let remove = family[i].match
                    removeAll.push(remove)
                }
            }

            for (let i = 0; i < this.props.gifter.doNotMatchWith.length; i++) {
                let doNotMatch = this.props.gifter.doNotMatchWith[i];
                removeAll.push(doNotMatch)
            }

            for (let i = 0; i < removeAll.length; i++) {
                let matchedName = removeAll[i];
                family = family.filter(function (value, index, arr) {

                    return value.name !== matchedName;

                });
            }



            console.log(family)
            let yourMatch;

            // if (this.props.gifter.name === "Gina") {
            //     yourMatch = "Alex"
            // }
            // if (this.props.gifter.name === "Matt") {
            //     // family = ["Gina", "Keith", "Angela"]
            // }
            // if (this.props.gifter.name === "Katharine") {
            //     // family = ["Gina", "Keith", "Angela"]
            // }
            // if (this.props.gifter.name === "Keith") {
            //     // family = ["Angela", "Matt", "Katharine"]
            // }
            // if (this.props.gifter.name === "Alex") {
            //     // family = ["Gina", "Keith", "Matt", "Katharine"]
            // }

            yourMatch = family[Math.floor(Math.random() * family.length)].name;


            // let newFamily = family.filter(e => e !== yourMatch);





            this.setState({ match: yourMatch })

            // what is this?? need to change function on page ??
            this.props.updateGifter({
                match: yourMatch,
                matched: true
            });
        });

    }

    render() {


        let content = (
            <ShowSelected match={this.props.gifter.match}></ShowSelected>
        )

        if (!this.props.gifter.matched) {
            content = (
                <div className="reveal">
                    <button className="revealBtn btn btn-lg" onClick={this.handleSubmit}>Click to reveal your random match</button>
                </div>
            )
        }
        return (
            content
        )
    }

}


export default RandomSelector;





