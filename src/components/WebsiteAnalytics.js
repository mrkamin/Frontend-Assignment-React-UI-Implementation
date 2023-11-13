import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  BsFillArrowDownLeftSquareFill,
  BsFillArrowUpRightSquareFill,
} from 'react-icons/bs';
import { fetchData } from '../redux/data/actions';
import SvgWebSiteAnalytics from './SvgWebSiteAnalytics';

const WebsiteAnalytics = () => {
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
    <div className="hero-container-right-side d-flex flex-column">
      <div className="right-side-uper-head d-flex">
        <div className="uper-head-right-side">
          <h4>Website Analytics</h4>
          <p className="white-dark">Based on your performance</p>
          <div className="d-flex paragraph">
            <p className="white-dark p">Weekly</p>
            <p className="white-dark p active">Monthly</p>
            <p className="white-dark p">Yearly</p>
          </div>
        </div>
        <div className="d-flex gap-5">
          <div className="total-visits-first-item d-flex">
            <BsFillArrowDownLeftSquareFill className="" />
            <p>Visits</p>
          </div>
          <div className="total-visits-first-item d-flex">
            <BsFillArrowUpRightSquareFill className="" />
            <p>Sessions</p>
          </div>
        </div>
      </div>
      <div className="right-side-body">
        <SvgWebSiteAnalytics data={data} />
      </div>
    </div>
  );
};

export default WebsiteAnalytics;
