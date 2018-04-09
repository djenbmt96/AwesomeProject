import {combineReducers} from 'redux';
import countReducer from './countReducer.js';
import profileReducer from './profileReducer.js';
const allReducers= combineReducers({
  count: countReducer,
  form: profileReducer,
});
export default allReducers;