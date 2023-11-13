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
    .get('https://mocki.io/v1/2c247a3c-8b49-4853-8a0c-a025af57fb99')
    .then((response) => {
      dispatch(fetchDataSuccess(response.data.data));
    })
    .catch((error) => {
      dispatch(fetchDataFailure(error.message));
    });
};
