// Import Axios for making HTTP requests
import axios from 'axios';

// Action creator for initiating a data fetch request
export const fetchDataReauest = () => ({ type: 'FETCH_DATA_REQUEST' });

// Action creator for successful data fetch
export const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data,
});

// Action creator for failed data fetch
export const fetchDataFailure = (error) => ({
  type: 'FETCH_DATA_FAILURE',
  payload: error,
});

// Async action creator using thunk middleware to handle asynchronous data fetching
export const fetchData = () => (dispatch) => {
  // Dispatch the request action to set loading to true
  dispatch(fetchDataReauest());

  // Make an HTTP GET request using Axios
  axios
    .get('https://mocki.io/v1/af874dff-07c1-498a-9b63-d455f8b62eda')
    .then((response) => {
      // Dispatch success action with the received data
      dispatch(fetchDataSuccess(response.data.data));
    })
    .catch((error) => {
      // Dispatch failure action with the error message
      dispatch(fetchDataFailure(error.message));
    });
};
