import ActionTypes from '../actionTypes/dataActionTypes';

const initialState = {
  data: [
    {
      id: 1,
      title: 'Rafi',
      category: 'programmer',
    },
  ],
};

const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_DATA_REQUEST:
      return state;
    default:
      return state;
  }
};
export default dataReducer;
