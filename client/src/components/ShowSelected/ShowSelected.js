import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./ShowSelected.css";

class ShowSelected extends Component {

    render() {
        return (<div>
            <h2>You will be helping Santa shop for {this.props.match}</h2>
        </div>)
    }



}


export default ShowSelected;
