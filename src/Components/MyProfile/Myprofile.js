import React from 'react';
import './MyProfile.css';

export default function Myprofile() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-6">
          <h5 className="col-12 py-3">My Missions</h5>
          <table className="col-12 row">
            <tr className="col-12 row">
              <td className="col-12 py-3">Mission Name</td>
              <td className="col-12 py-3">Mission Name</td>
              <td className="col-12 py-3">Mission Name</td>
              <td className="col-12 py-3">Mission Name</td>
            </tr>
          </table>
        </div>
        <table className="col-6">
          <h5 className="col-12 py-3">My Rockets</h5>
          <tr className="col-12 row">
            <td className="col-12 py-3">Rocket Name</td>
            <td className="col-12 py-3">Rocket Name</td>
            <td className="col-12 py-3">Rocket Name</td>
            <td className="col-12 py-3">Rocket Name</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
