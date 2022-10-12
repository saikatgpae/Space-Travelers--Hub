import axios from 'axios';

const Api = 'https://api.spacexdata.com/v3/rockets';

const GET_ROCKETS = 'GET_ROCKETS';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const CANCEL_ROCKET = 'CANCEL_ROCKET';

const fetchRockets = () => (dispatch) => {
  axios.get(Api).then((res) => {
    const rockets = res.data;
    dispatch({
      type: GET_ROCKETS,
      rockets,
    });
  });
};

const reserveRocket = (id) => (dispatch) => {
  dispatch({ type: RESERVE_ROCKET, id });
};

const cancelRocket = (id) => (dispatch) => {
  dispatch({ type: CANCEL_ROCKET, id });
};

const initialState = [];

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [
        ...action.rockets,
      ];
    case RESERVE_ROCKET:
      return [
        ...state.map((rocket) => {
          if (rocket.rocket_id !== action.id) {
            return rocket;
          }
          return { ...rocket, reserved: true };
        }),
      ];
    case CANCEL_ROCKET:
      return [
        ...state.map((rocket) => {
          if (rocket.rocket_id !== action.id) {
            return rocket;
          }
          return { ...rocket, reserved: false };
        }),
      ];
    default:
      return state;
  }
};

export default fetchRockets;
export {
  rocketsReducer, reserveRocket, cancelRocket,
};
