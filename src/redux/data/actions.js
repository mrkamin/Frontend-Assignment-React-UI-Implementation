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
    .get('https://mocki.io/v1/e5fca2f5-aaeb-4669-aa83-d173cc14b840')
    .then((response) => {
      dispatch(fetchDataSuccess(response.data.data));
    })
    .catch((error) => {
      dispatch(fetchDataFailure(error.message));
    });
};
