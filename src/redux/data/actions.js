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
    .get('https://mocki.io/v1/8e2347f3-bb28-4ca3-a145-bd963317b932')
    .then((response) => {
      dispatch(fetchDataSuccess(response.data.data));
    })
    .catch((error) => {
      dispatch(fetchDataFailure(error.message));
    });
};
