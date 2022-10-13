import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

export default function Myprofile() {
  const rockets = useSelector((state) => state.rocketsReducer);
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
                {rockets.map((i) => (
                  <td
                    className="col-12 py-3"
                    key={i.rocket_id}
                  >
                    {i.rocket_name}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
