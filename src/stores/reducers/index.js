import { combineReducers } from 'redux';
import exampleActions from './exampleActions';
import exampleActions2 from './exampleActions2';

import exampleAction from './exampleAction';

export default (history) =>
  combineReducers({
    exampleActions,
    exampleActions2,
    exampleAction,
  });
