// Define the initial state for the Redux store
const initialState = {
  data: {},
  loading: false,
  error: null,
};

// Reducer function to handle state changes based on dispatched actions
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      // Set loading to true and clear any previous errors
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_DATA_SUCCESS':
      // Update state with the received data, set loading to false, and clear any errors
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_DATA_FAILURE':
      // Set loading to false and update the error state with the provided error message
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      // If no matching action type is found, return the current state
      return state;
  }
};

// Export the reducer function
export default reducer;
