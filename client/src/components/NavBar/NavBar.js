import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"


class NavBar extends Component {


    render() {


        let content = (
            <li className="nav-item">
                <button className="btn btn-danger btn-lg"><a className="loginBtn nav-link" href="/auth/google">Login To Enter Gifter 2018!</a></button>
            </li>
        );
        if (this.props.user) {
            content = [
                <li className="nav-item" key="1">
                    <span className="navbar-text "> view your matches wish list</span>

                </li>,
                <li className="nav-item" key="2">
                    <span className="navbar-text ">add/ view your  wish list</span>
                </li>,
                <li className="nav-item" key="3">
                    <span className="navbar-text ">Hello, {this.props.user.givenName}</span>
                </li>,
                <li className="nav-item googleImg" key="4">
                    <img className="profileImg"
                        src={this.props.user.imageURL}
                        alt="User profile"
                    />
                </li>,
                <li className="nav-item" key="5">
                    <a className="nav-link" href="/auth/logout">Logout</a>
                </li>,

            ];
        }
        return (

            <nav className="navbar navbar-expand-lg  sticky-top">
                <Link className="navbar-brand" to="/">Christmas Gifter</Link>
                <button className="navbar-toggler "
                    type="button" data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="nav justify-content-end">{content}</ul>
                </div>
            </nav>
        );
    };
}




export default NavBar;
