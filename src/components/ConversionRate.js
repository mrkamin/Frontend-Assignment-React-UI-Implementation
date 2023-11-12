import React from 'react';
import SvgConverrsionRate from './SvgConversionRate';

const ConversionRate = () => (
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
          <p>234324234</p>
        </div>
        <div>
          <h5>Total User Visit</h5>
          <p>234324234</p>
        </div>
        <div>
          <h5>Total User Visit</h5>
          <p>234324234</p>
        </div>
      </div>
    </div>
  </div>
);

export default ConversionRate;
