import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default (props) => {
  return (
    <nav className='nav-wrapper'>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <Link className='nav-link' to='/gifterProfiles'>
            Gifter Profiles
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/gifterForm'>
            Complete Your Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};
