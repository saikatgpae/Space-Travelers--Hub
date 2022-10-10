import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
// import the nav image
import NavLogo from './planet.png';

const Navbar = () => (
  <nav className={styles['nav-container']}>
    <div className={styles['nav-logo']}>
      <img className={styles['logo-img']} src={NavLogo} alt="planet" />
      <h1 className={styles['logo-title']}>`Space Travelers' Hub`</h1>
    </div>
    <ul className={styles['nav-list']}>
      <li className={styles['list-item']}>
        <NavLink className={styles['nav-link']} to="/" exact>
          Rockets
        </NavLink>
      </li>
      <li className={styles['list-item']}>
        <NavLink className={styles['nav-link']} to="/missions">
          Missions
        </NavLink>
      </li>
      <span> | </span>
      <li className={styles['list-item']}>
        <NavLink className={styles['nav-link']} to="/profile">
          My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
