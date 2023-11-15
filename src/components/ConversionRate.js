// Import necessary dependencies and components
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/data/actions';
import {
  SvgConverrsionRate,
  SvgConverrsionRate1,
  SvgConverrsionRate2,
  SvgConverrsionRate3,
} from './SvgConversionRate';
import '../css/conversion.css';

// Define the ConversionRate component
const ConversionRate = () => {
  // Initialize Redux dispatch function
  const dispatch = useDispatch();
  // Use Redux useSelector to get state variables
  const { data, loading, error } = useSelector((state) => state);
  // useEffect hook to dispatch an action to fetch data when the component mounts
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // Conditional rendering based on loading and error states
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

  // Destructure data object for easier access to its properties
  const {
    userVisit, userSignUp, userSubscribed, label,
  } = data;

  // Render the ConversionRate component JSX structure
  return (
    <div className="hero-container-right-side d-flex flex-column position-relative">
      <div className="right-side-uper-head d-flex">
        <div className="uper-head-right-side">
          <h4>Conversion Rate</h4>
        </div>
      </div>
      <div className="right-side-body grid2">
        {/* Render SvgConverrsionRate component with data as props */}
        <SvgConverrsionRate
          userVisit={userVisit}
          userSignUp={userSignUp}
          userSubscribed={userSubscribed}
          label={label}
        />
        <div className="d-flex flex-column gap-4">
          {/* Render information about Total User Visit */}
          <div className="d-flex gap-3">
            <SvgConverrsionRate1 />
            <div className="conversion-user-visit d-flex flex-column">
              <h6>Total User Visit</h6>
              <h5>
                {data.userVisit}
                {' '}
                users
              </h5>
            </div>
          </div>
          {/* Render information about User Sign Up */}
          <div className="d-flex gap-3">
            <SvgConverrsionRate2 />
            <div className="conversion-user-visit d-flex flex-column">
              <h6>User Sign Up</h6>
              <h5>
                {data.userSignUp}
                {' '}
                users
              </h5>
            </div>
          </div>
          {/* Render information about User Subscribed */}
          <div className="d-flex gap-3">
            <SvgConverrsionRate3 />
            <div className="conversion-user-visit d-flex flex-column">
              <h6>User Subscribed</h6>
              <h5>
                {data.userSubscribed}
                {' '}
                users
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the ConversionRate component
export default ConversionRate;
