import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import logo from './logo.png';

export default function NavBar() {
  return (
    <div className="header p-2">
      <img className="logo" src={logo} alt="logo" />
      <nav className="nav-bar">
        <h1>Space Travelers&apos; Hub</h1>
        <ul className="nav-menu">
          <li><NavLink className="rockets" activeclassname="active" to="/rockets">Rockets</NavLink></li>
          <li><NavLink className="mission" activeclassname="active" to="/missions">Missions</NavLink></li>
          <li><NavLink className="my-profile" activeclassname="active" to="/myprofile">My Profile</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}
