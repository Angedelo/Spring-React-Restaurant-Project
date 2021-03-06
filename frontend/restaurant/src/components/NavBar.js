import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (
  <div className="navbar">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/customers">Customers</Link>
      </li>
      <li>
        <Link to="/bookings">Bookings</Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
