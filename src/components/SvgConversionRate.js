import React from 'react';
import PropTypes from 'prop-types';

export const SvgConverrsionRate = ({
  userVisit,
  userSignUp,
  userSubscribed,
}) => {
  const total = userVisit + userSignUp + userSubscribed;
  const visitPercentage = (userVisit / total) * 100;
  const signUpPercentage = (userSignUp / total) * 100;
  const subscribedPercentage = (userSubscribed / total) * 100;

  const visitEndX = 50 + Math.cos((visitPercentage * 3.6 - 90) * (Math.PI / 180)) * 40;
  const visitEndY = 50 + Math.sin((visitPercentage * 3.6 - 90) * (Math.PI / 180)) * 40;

  const signUpEndX = 50
    + Math.cos(
      ((visitPercentage + signUpPercentage) * 3.6 - 90) * (Math.PI / 180),
    )
      * 40;
  const signUpEndY = 50
    + Math.sin(
      ((visitPercentage + signUpPercentage) * 3.6 - 90) * (Math.PI / 180),
    )
      * 40;

  const subscribedEndX = 50
    + Math.cos(
      ((visitPercentage + signUpPercentage + subscribedPercentage) * 3.6 - 90)
        * (Math.PI / 180),
    )
      * 40;
  const subscribedEndY = 50
    + Math.sin(
      ((visitPercentage + signUpPercentage + subscribedPercentage) * 3.6 - 90)
        * (Math.PI / 180),
    )
      * 40;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="svg"
      viewBox="0 0 100 100"
    >
      {/* Circle for the entire border */}
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="#eee"
        strokeWidth="8"
      />

      {/* Line for userVisit */}
      <line
        x1="50"
        y1="50"
        x2={visitEndX}
        y2={visitEndY}
        stroke="#00F2DE"
        strokeWidth="8"
      />

      {/* Line for userSignUp */}
      <line
        x1="50"
        y1="50"
        x2={signUpEndX}
        y2={signUpEndY}
        stroke="#3F46F7"
        strokeWidth="8"
      />

      {/* Line for userSubscribed */}
      <line
        x1="50"
        y1="50"
        x2={subscribedEndX}
        y2={subscribedEndY}
        stroke="#5E5CE6"
        strokeWidth="8"
      />
    </svg>
  );
};

export const SvgConverrsionRate1 = () => (
  <svg width="52" height="20" xmlns="http://www.w3.org/2000/svg" className="">
    <line x1="0" y1="10" x2="50" y2="10" stroke="#3F46F7" strokeWidth="10" />
  </svg>
);
export const SvgConverrsionRate2 = () => (
  <svg width="52" height="20" xmlns="http://www.w3.org/2000/svg" className="">
    <line
      x1="0"
      y1="10"
      x2="50"
      y2="10"
      stroke="#5E5CE6"
      strokeWidth="10
      "
    />
  </svg>
);
export const SvgConverrsionRate3 = () => (
  <svg width="52" height="20" xmlns="http://www.w3.org/2000/svg" className="">
    <line
      x1="0"
      y1="10"
      x2="50"
      y2="10"
      stroke="#5e5ce68f"
      strokeWidth="10
      "
    />
  </svg>
);

SvgConverrsionRate.propTypes = {
  userVisit: PropTypes.number.isRequired,
  userSignUp: PropTypes.number.isRequired,
  userSubscribed: PropTypes.number.isRequired,
};
