import { createStore } from 'redux';

const reducerfu = (state = { counter: 0 }, action) => {
  if (action.type === 'INC') {
    return { counter: state.counter + 1 };
  } if (action.type === 'DEC') {
    return { counter: state.counter - 1 };
  }

  return state;
};

const store = createStore(reducerfu);
export default store;
