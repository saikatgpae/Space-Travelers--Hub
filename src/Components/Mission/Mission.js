import React from 'react';
import './Mission.css';

export default function Mission() {
  return (
    <div>
      <table className="mission-table">
        <tbody>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
          <tr>
            <td className="mission-name p-1">Thaicom</td>
            <td className="mission-info p-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum dolores obcaecati
              esse,laborum possimus totam repellendus! Placeat impedit.
            </td>
            <td className="p-2 text-center"><small className="mission-status active-member p-1">Active Member</small></td>
            <td className="mission-join p-3"><button className="join-button inactive" type="submit">Join Mission</button></td>
          </tr>
          <tr>
            <td className="mission-name p-1">Telstar</td>
            <td className="mission-info p-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum dolores obcaecati
              esse,laborum possimus totam repellendus! Placeat impedit
              vitae fugiat itaque culpa animi natus ad tempore voluptate
              quo totam explicabo blanditiis provident vero, delectus sit sapiente facere magnam.
              Pariatur, tempore.
            </td>
            <td className="p-2 text-center"><small className="mission-status inactive-member p-1">NOT A MEMBER</small></td>
            <td className="mission-join p-3"><button className="join-button" type="submit">Join Mission</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
