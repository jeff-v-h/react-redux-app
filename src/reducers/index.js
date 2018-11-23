import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  // sort hand property name
  courses
});

export default rootReducer;