import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  // sort hand property name
  courses,
  authors
});

export default rootReducer;