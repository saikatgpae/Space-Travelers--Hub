import React from 'react';
// Import styles
import styles from './ProfilePage.module.css';

const ProfilePage = () => (
  <div className={styles['page-container']}>
    <ul className={styles.list}>
      <span className={styles['list-title']}>My Missions</span>
      <li className={styles['list-item']}>
        <span className={styles['list-item-title']}>Mission Name</span>
      </li>
      <li className={styles['list-item']}>
        <span className={styles['list-item-title']}>Mission Name</span>
      </li>
      <li className={styles['list-item']}>
        <span className={styles['list-item-title']}>Mission Name</span>
      </li>
      <li className={styles['list-item']}>
        <span className={styles['list-item-title']}>Mission Name</span>
      </li>
    </ul>
    <ul className={styles.list}>
      <span className={styles['list-title']}>My Rockets</span>
      <li className={styles['list-item']}>
        <span className={styles['list-item-title']}>Rocket Name</span>
      </li>
      <li className={styles['list-item']}>
        <span className={styles['list-item-title']}>Rocket Name</span>
      </li>
      <li className={styles['list-item']}>
        <span className={styles['list-item-title']}>Rocket Name</span>
      </li>
      <li className={styles['list-item']}>
        <span className={styles['list-item-title']}>Rocket Name</span>
      </li>
    </ul>
  </div>
);

export default ProfilePage;
