import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { rocketsReducer } from './rockets/rocketsRedux';

const rootReducer = combineReducers({
  rocketsReducer,
});

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
