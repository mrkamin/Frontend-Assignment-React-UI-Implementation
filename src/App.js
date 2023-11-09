import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchData from './redux/action/action';

const App = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      {/* Render your components using the data from the Redux store */}
      {/* Example: */}
      <h1>
        Total Visits:
        {data.totalVisits}
      </h1>
    </div>
  );
};

export default App;
