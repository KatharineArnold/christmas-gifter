import React, { Component } from 'react';
import './WishList.css';

class WishList extends Component {
  render() {
    return (
      // need to loop through array of saved wish list this.user.Wishlist.map
      <div>
        <ul className='list-group'>
          {/* <li class="list-group-item active">{this.props.user.name}</li> */}
          <li className='list-group-item'>item</li>
        </ul>
      </div>
    );
  }
}

export default WishList;
