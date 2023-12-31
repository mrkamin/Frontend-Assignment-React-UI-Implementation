// Import necessary React libraries and components
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  BsFillArrowDownLeftSquareFill,
  BsFillArrowUpRightSquareFill,
} from 'react-icons/bs';

// Import the fetchData action and SVG component
import { fetchData } from '../redux/data/actions';
import IMG from '../assets/Group.png';
import IMG1 from '../assets/Group2.png';
import '../css/hero.css';
import Svg from './Svg';

// Define the Hero component
const Hero = () => {
  // Initialize the Redux useDispatch and useSelector hooks
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);

  // useEffect to dispatch fetchData action when component mounts
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // Render loading state while fetching data
  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // Render error message if there's an error fetching data
  if (error) {
    return (
      <div className="loading">
        Error:
        {error}
      </div>
    );
  }

  // Render the main content of the Hero component
  return (
    <>
      {/* Hero container with left and right sides */}
      <div className=" hero-container grid">
        {/* Left side of the hero container */}
        <div className="hero-container-left-side d-flex flex-column">
          {/* Total Visits */}
          <div className="total-visits d-flex">
            <div className="total-visits-first-item d-flex">
              <BsFillArrowDownLeftSquareFill className="total-visit-first-item-item-one" />
              <div className="total-visit-first-item-item-two d-flex flex-column ">
                <p className="white-dark">Total Visits</p>
                <h3>{data.totalVisits}</h3>
              </div>
            </div>
            <p className="total-visits-second-item">+1.29%</p>
          </div>

          {/* Total Subscribers */}
          <div className="total-visits d-flex">
            <div className="total-visits-first-item d-flex">
              <BsFillArrowUpRightSquareFill className="total-sub-first-item-item-one" />
              <div className="total-visit-first-item-item-two d-flex flex-column ">
                <p className="white-dark">Total Sub</p>
                <h3>{data.totalSubscribers}</h3>
              </div>
            </div>
            <p className="total-sub-second-item">+1.29%</p>
          </div>

          {/* Active Users */}
          <div className="total-visits d-flex">
            <div className="total-visits-first-item d-flex">
              <img
                src={IMG}
                alt="acitve-img"
                className="total-active-first-item-item-one"
              />
              <div className="total-visit-first-item-item-two d-flex flex-column ">
                <p className="white-dark">Active Users</p>
                <h3>{data.activeUsers}</h3>
              </div>
            </div>
            <p className="Active-second-item" />
          </div>

          {/* Total Clicks */}
          <div className="total-visits d-flex">
            <div className="total-visits-first-item d-flex">
              <img
                src={IMG1}
                alt="acitve-img"
                className="total-click-first-item-item-one"
              />
              <div className="total-visit-first-item-item-two d-flex flex-column ">
                <p className="white-dark">Total Clicks</p>
                <h3>{data.totalClicks}</h3>
              </div>
            </div>
            <p className="Active-second-item" />
          </div>
        </div>

        {/* Right side of the hero container */}
        <div className="hero-container-right-side d-flex flex-column gap-2">
          {/* Upper header section */}
          <div className="right-side-uper-head d-flex">
            <div className="uper-head-right-side">
              <h4>User Traffic</h4>
            </div>
            {/* Legend items for user sign up and user subscribed */}
            <div className="uper-head-left-side d-flex">
              <div className="uper-head-left-side-ref d-flex gap-5">
                <div className="left-side-first-item d-flex">
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  >
                    <path
                      d="M 0 0 L 20 0 Q 20 0 20 20 L 20 20 L 0 20 Z"
                      stroke="black"
                      fill="#0082CC"
                    />
                  </svg>
                  <div className="white-dark">User Sign Up</div>
                </div>
                <div className="left-side-first-item d-flex">
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  >
                    <path
                      d="M 0 0 L 20 0 Q 20 0 20 20 L 20 20 L 0 20 Z"
                      stroke="black"
                      fill="#FB4540"
                    />
                  </svg>
                  <div className="white-dark">User Subscribed</div>
                </div>
              </div>

              {/* Dropdown for selecting the current year */}
              <div className="left-side-third-item">
                <select className="drop-down btn">
                  <option value="apple">Current Year</option>
                  <option value="banana">Banana</option>
                  <option value="orange">Orange</option>
                </select>
              </div>
            </div>
          </div>

          {/* Body section with SVG visualization */}
          <div className="right-side-body">
            <Svg data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

// Export the Hero component as the default export
export default Hero;
