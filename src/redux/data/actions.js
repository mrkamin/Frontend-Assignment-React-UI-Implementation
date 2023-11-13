import axios from 'axios';

export const fetchDataReauest = () => ({ type: 'FETCH_DATA_REQUEST' });

export const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: 'FETCH_DATA_FAILURE',
  payload: error,
});

export const fetchData = () => (dispatch) => {
  dispatch(fetchDataReauest());
  axios
    .get('https://mocki.io/v1/cede9f13-e0a1-4618-a83e-61a1afef466a')
    .then((response) => {
      dispatch(fetchDataSuccess(response.data.data));
    })
    .catch((error) => {
      dispatch(fetchDataFailure(error.message));
    });
};
