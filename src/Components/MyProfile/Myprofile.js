import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

export default function Myprofile() {
  const rockets = useSelector((state) => state.rocketsReducer);
  const rocketsReserved = rockets.filter((rocket) => rocket.reserved === true);
  const missions = useSelector((state) => state.missionsReducer);
  const missionsJoined = missions.filter((mission) => mission.joined === true);
  return (
    <div className="container my-5" data-testid="myprofile-list">
      <div className="row">
        <div className="col-6">
          <h5 className="col-12 py-3">My Missions</h5>
          <table className="col-12 row">
            <tbody className="col-12">
              <tr className="col-12 row">
                {missionsJoined.map((mission) => (
                  (
                    <td key={mission.mission_id} className="col-12 py-3">{mission.mission_name}</td>
                  )
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-6">
          <h5 className="col-12 py-3">My Rockets</h5>
          <table className="col-12">
            <tbody className="col-12">
              <tr className="col-12 row">
                {rocketsReserved.map((i) => (
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
