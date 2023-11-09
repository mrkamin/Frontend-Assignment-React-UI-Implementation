import axios from 'axios';

const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get('https://mocki.io/v1/65451222-407a-47a1-a565-6352b85bd0ec');
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data.data });
  } catch (error) {
    dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
  }
};
export default fetchData;
