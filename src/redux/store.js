import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './data/reducer';

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
