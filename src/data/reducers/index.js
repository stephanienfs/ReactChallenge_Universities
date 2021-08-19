import { combineReducers } from 'redux';

import universities from './universities';
import filter from './filter';

export default combineReducers({ universities, filter });