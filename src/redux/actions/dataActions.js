import ActionTypes from '../actionTypes/dataActionTypes';

export const setDataRequest = (data) => ({
  type: ActionTypes.FETCH_DATA_REQUEST,
  payload: data,
});

export const setDataSucces = (data) => ({
  type: ActionTypes.FETCH_DATA_SUCCESS,
  payload: data,
});
