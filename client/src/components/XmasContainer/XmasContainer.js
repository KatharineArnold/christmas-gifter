import React from 'react'
import { Link } from 'react-router-dom';
import "./XmasContainer.css";

const XmasContainer = () => (
    <div className="container xmasContainer">
        <div className="window">
            <div className="santa">
                <div className="head">
                    <div className="face">
                        <div className="redhat">
                            <div className="whitepart"></div>
                            <div className="redpart"></div>
                            <div className="hatball"></div>
                        </div>
                        <div className="eyes"></div>
                        <div className="beard">
                            <div className="nouse"></div>
                            <div className="mouth"></div>
                        </div>
                    </div>
                    <div className="ears"></div>
                </div>
                <div className="body"></div>
            </div>
        </div>
        <div className="message">
            <h1>Merry Christmas!</h1>
        </div>
    </div>
)


export default XmasContainer;
