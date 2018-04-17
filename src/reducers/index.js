import {combineReducers} from 'redux';
import countReducer from './countReducer.js';
import profileReducers from './profileReducer.js';
import comments from './commentReducer.js';
const allReducers= combineReducers({
  count: countReducer,
  profileReducers,
  comments
});
export default allReducers;