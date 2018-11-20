import React, { Component } from 'react';
import "./WishList.css";

class WishList extends Component {
    render() {
        return (
            // need to loop through array of saved wish list this.user.Wishlist.map??
            <ul class="list-group">
                <li class="list-group-item active">{this.props.user.name}</li>
                <li class="list-group-item">item</li>
            </ul>
        )
    }
}

export default WishList;

