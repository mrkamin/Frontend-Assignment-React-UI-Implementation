import ActionTypes from "../actionTypes/dataActionTypes";

export const setDataRequest = (data) => {
  return {
    type: ActionTypes.FETCH_DATA_REQUEST,
    payload: data,
  };
};

export const setDataSucces = (data) => {
  return {
    type: ActionTypes.FETCH_DATA_SUCCESS,
    payload: data,
  };
};
