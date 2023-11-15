// Import React library
import React from 'react';
// Import the SvgLocation component
import SvgLocation from './SvgLocation';

// Define the Location component
const Location = () => (
  // Render a div with the classes "hero-container-right-side" and "d-flex flex-column"
  <div className="hero-container-right-side d-flex flex-column">
    <div className="right-side-uper-head d-flex">
      <div className="uper-head-right-side">
        <h4>Location</h4>
      </div>
      <div className="uper-head-left-side d-flex">
        <div className="left-side-first-item d-flex">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <circle cx="10" cy="10" r="5" fill="#00F2DE" />
          </svg>
          <div className="white-dark">Country</div>
        </div>
        <div className="left-side-first-item d-flex">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <circle cx="10" cy="10" r="5" fill="#FB4540" />
          </svg>
          <div className="white-dark">City</div>
        </div>
      </div>
    </div>
    <div className="right-side-body">
      <SvgLocation />
    </div>
  </div>
);

// Export the Location component
export default Location;
