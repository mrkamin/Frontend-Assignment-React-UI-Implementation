import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsFillArrowDownLeftSquareFill } from 'react-icons/bs';
import { fetchData } from '../redux/data/actions';
import '../css/hero.css';

const Hero = () => {
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
    <>
      <div className="grid hero-container">
        <div className="d-flex flex-column hero-container-left-side">
          <div className="total-visits">
            <BsFillArrowDownLeftSquareFill />
            <h3>
              Total Visits:
              {data.totalVisits}
            </h3>
          </div>
        </div>
        <div className="hero-container-right-side">
          <h1>User Traffic</h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
