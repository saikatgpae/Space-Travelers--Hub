import React from 'react';
import './MyProfile.css';

export default function Myprofile() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-6">
          <h5 className="col-12 py-3">My Missions</h5>
          <table className="col-12 row">
            <tbody className="col-12">
              <tr className="col-12 row">
                <td className="col-12 py-3">Mission Name</td>
                <td className="col-12 py-3">Mission Name</td>
                <td className="col-12 py-3">Mission Name</td>
                <td className="col-12 py-3">Mission Name</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-6">
          <h5 className="col-12 py-3">My Rockets</h5>
          <table className="col-12">
            <tbody className="col-12">
              <tr className="col-12 row">
                <td className="col-12 py-3">Rocket Name</td>
                <td className="col-12 py-3">Rocket Name</td>
                <td className="col-12 py-3">Rocket Name</td>
                <td className="col-12 py-3">Rocket Name</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
