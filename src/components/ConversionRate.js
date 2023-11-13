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

const ConversionRate = () => {
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
  const {
    userVisit, userSignUp, userSubscribed, label,
  } = data;
  return (
    <div className="hero-container-right-side d-flex flex-column position-relative">
      <div className="right-side-uper-head d-flex">
        <div className="uper-head-right-side">
          <h4>Conversion Rate</h4>
        </div>
      </div>
      <div className="right-side-body grid2">
        <SvgConverrsionRate
          userVisit={userVisit}
          userSignUp={userSignUp}
          userSubscribed={userSubscribed}
          label={label}
        />
        <div className="d-flex flex-column gap-4">
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

export default ConversionRate;
