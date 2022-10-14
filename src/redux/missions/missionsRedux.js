import axios from 'axios';

const API = 'https://api.spacexdata.com/v3/missions';

const GET_MISSIONS = 'GET_MISSIONS';

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
    default:
      return state;
  }
};

export default fetchMissions;
export {
  missionsReducer,
};
