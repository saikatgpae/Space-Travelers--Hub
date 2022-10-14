import axios from 'axios';

const API = 'https://api.spacexdata.com/v3/missions';

const GET_MISSIONS = 'GET_MISSIONS';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

const joinMission = (id) => (dispatch) => {
  dispatch({ type: JOIN_MISSION, id });
};

const leaveMission = (id) => (dispatch) => {
  dispatch({ type: LEAVE_MISSION, id });
};

const fetchMissions = () => (dispatch) => {
  axios.get(API).then((res) => {
    const missions = res.data;
    dispatch({
      type: GET_MISSIONS,
      missions,
    });
  });
};

const initialState = [];

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return [
        ...action.missions,
      ];
    case JOIN_MISSION:
      return [
        ...state.map((mission) => {
          if (mission.mission_id !== action.id) {
            return mission;
          }
          return { ...mission, joined: true };
        }),
      ];
    case LEAVE_MISSION:
      return [
        ...state.map((mission) => {
          if (mission.mission_id !== action.id) {
            return mission;
          }
          return { ...mission, joined: false };
        }),
      ];
    default:
      return state;
  }
};

export default fetchMissions;
export {
  missionsReducer, leaveMission, joinMission,
};
