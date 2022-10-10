import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';

export default function Header() {
  return (
    <div className="header p-4">
      <img className="logo" src={logo} alt="logo" />
      <nav className="nav-bar">
        <h1>Space Travelers&apos; Hub</h1>
        <ul className="nav-menu">
          <li>Rockets</li>
          <li className="mission">Missions</li>
          <li>My Profile</li>
        </ul>
      </nav>
    </div>
  );
}
