import { combineReducers } from 'redux';
import dataReducer from './DataReducer';

const reducers = combineReducers({
  allData: dataReducer,
});

export default reducers;
