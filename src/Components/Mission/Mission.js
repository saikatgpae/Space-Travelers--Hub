import React from 'react';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missionsRedux';
import './Mission.css';

export default function Mission(props) {
  const dispatch = useDispatch();
  const {
    // eslint-disable-next-line react/prop-types
    id, name, description, joined,
  } = props;
  const handelClick = (id, e) => {
    if (e.target.textContent === 'Join Mission') {
      dispatch(joinMission(id));
    } else {
      dispatch(leaveMission(id));
    }
  };
  return (
    <>
      <tr id={id}>
        <td className="mission-name p-1">{name}</td>
        <td className="mission-info p-3">
          {description}
        </td>
        <td className="p-2 text-center">
          <small className={joined ? 'mission-status active-member p-1' : 'mission-status inactive-member p-1'}>
            {joined ? 'Active Member' : 'NOT A MEMBER'}
          </small>
        </td>
        <td className="mission-join p-3">
          <button className={joined ? 'join-button inactive' : 'join-button'} onClick={(event) => handelClick(id, event)} type="button">
            {joined ? 'Leave Mission' : 'Join Mission'}
          </button>
        </td>
      </tr>
    </>
  );
}
