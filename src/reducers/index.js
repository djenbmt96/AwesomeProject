import {combineReducers} from 'redux';
import countReducer from './countReducer.js';
import profileReducers from './profileReducer.js';
const allReducers= combineReducers({
  count: countReducer,
  profileReducers,
});
export default allReducers;