import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import fetchMissions from '../../redux/missions/missionsRedux';
import Mission from './Mission';
import './Mission.css';

export default function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionsReducer);
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions.length]);
  // console.log(missions);
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
          {missions.map((mission) => (
            <Mission
              key={mission.mission_id}
              id={mission.mission_id}
              name={mission.mission_name}
              description={mission.description}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
