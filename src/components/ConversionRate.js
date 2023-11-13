import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/data/actions';
import SvgConverrsionRate from './SvgConversionRate';

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
  console.log('show data', data.conversionRate.totalUserVisit);
  return (
    <div className="hero-container-right-side d-flex flex-column">
      <div className="right-side-uper-head d-flex">
        <div className="uper-head-right-side">
          <h4>Conversion Rate</h4>
        </div>
      </div>
      <div className="right-side-body grid2">
        <SvgConverrsionRate />
        <div>
          <div>
            <h5>Total User Visit</h5>
            <p>{data.conversionRate.userSignUp}</p>
          </div>
          <div>
            <h5>Total User Visit</h5>
            <p>{data.conversionRate.totalUserVisit}</p>
          </div>
          <div>
            <h5>Total User Visit</h5>
            <p>{data.conversionRate.userSubscribed}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversionRate;
