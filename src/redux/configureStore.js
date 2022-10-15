import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { rocketsReducer } from './rockets/rocketsRedux';
import { missionsReducer } from './missions/missionsRedux';

const rootReducer = combineReducers({
  rocketsReducer,
  missionsReducer,
});

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
