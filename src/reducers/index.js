import {combineReducers} from 'redux';
import countReducer from './countReducer.js';
import profileReducers from './profileReducer.js';
import people from './peopleReducer.js';
import comments from './commentReducer.js';
const allReducers= combineReducers({
  count: countReducer,
  profileReducers,
  comments,
  people
});
export default allReducers;