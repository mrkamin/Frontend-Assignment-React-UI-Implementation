// Import necessary functions and libraries from Redux
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Import the reducer function from a separate file
import reducer from './data/reducer';

// Create the Redux store with the reducer and apply the thunk middleware
const store = createStore(reducer, applyMiddleware(thunk));

// Export the configured Redux store
export default store;
