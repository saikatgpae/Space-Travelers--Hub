import React from 'react';
import './Mission.css';

export default function Mission(props) {
  // eslint-disable-next-line react/prop-types
  const { id, name, description } = props;
  return (
    <>
      <tr id={id}>
        <td className="mission-name p-1">{name}</td>
        <td className="mission-info p-3">
          {description}
        </td>
        <td className="p-2 text-center"><small className="mission-status inactive-member p-1">NOT A MEMBER</small></td>
        <td className="mission-join p-3"><button className="join-button" type="submit">Join Mission</button></td>
      </tr>
    </>
  );
}
