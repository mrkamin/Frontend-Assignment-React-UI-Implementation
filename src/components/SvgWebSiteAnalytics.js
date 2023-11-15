// Import PropTypes for defining prop types
import PropTypes from 'prop-types';

// Define the SvgWebSiteAnalytics component with data as a prop
const SvgWebSiteAnalytics = ({ data }) => {
  // If data or data.webSiteAnalytics is not available, return null
  if (!data || !data.webSiteAnalytics) {
    return null;
  }

  // Extract months from the data object
  const months = Object.keys(data.webSiteAnalytics);

  // Function to calculate X coordinate based on index
  const calculateXcoordinate = (index) => `${index * 25 + 8}%`;

  // Function to calculate Y coordinate based on a percentage value
  const calculateYCoordinate = (value) => {
    const percentage = (value / 100) * 100;
    return `${percentage}`;
  };

  // Render an SVG element
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="svg1"
    >
      { months.map((month, index) => {
        const height = calculateYCoordinate(data.webSiteAnalytics[month].visits);
        return (
          <circle
            key={`userSignUp-${month}`}
            cx={calculateXcoordinate(index)}
            cy={`${46 + +height}%`}
            r="5"
            fill="#8EF27E"
          />
        );
      }) }

      { months.map((month, index) => {
        const height = calculateYCoordinate(data.webSiteAnalytics[month].sessions);
        return (
          <circle
            key={`userSubscribed-${month}`}
            cx={calculateXcoordinate(index)}
            cy={`${46 + +height}%`}
            r="5"
            fill="#2B3FF2"
          />
        );
      }) }
      {months.map((month, index) => {
        const height = calculateYCoordinate(data.webSiteAnalytics[month].visits);
        const nextHeight = index < months.length - 1
          ? calculateYCoordinate(data.webSiteAnalytics[months[index + 1]].visits)
          : height; // For the last element, use the same height

        return (
          <line
            key={`line-${month}`}
            x1={calculateXcoordinate(index)}
            y1={`${46 + +height}%`}
            x2={calculateXcoordinate(index + 1)}
            y2={`${46 + +nextHeight}%`}
            stroke="#8EF27E"
            strokeWidth="1"
            opacity="1"
          />
        );
      })}
      {months.map((month, index) => {
        const height = calculateYCoordinate(data.webSiteAnalytics[month].sessions);
        const nextHeight = index < months.length - 1
          ? calculateYCoordinate(
            data.webSiteAnalytics[months[index + 1]].sessions,
          )
          : height; // For the last element, use the same height

        return (
          <line
            key={`line-${month}`}
            x1={calculateXcoordinate(index)}
            y1={`${46 + +height}%`}
            x2={calculateXcoordinate(index + 1)}
            y2={`${46 + +nextHeight}%`}
            stroke="#2B3FF2"
            strokeWidth="1"
            opacity="1"
          />
        );
      })}

      <text x="10%" y="100%" fontFamily="Arial" fontSize="10" fill="#AEBBDA">
        Jan
      </text>
      <text x="37%" y="100%" fontFamily="Arial" fontSize="10" fill="#AEBBDA">
        Feb
      </text>
      <text x="62%" y="100%" fontFamily="Arial" fontSize="10" fill="#AEBBDA">
        Mar
      </text>
      <text x="90%" y="100%" fontFamily="Arial" fontSize="10" fill="#AEBBDA">
        Apr
      </text>
      <line
        x1="1%"
        y1="5%"
        x2="100%"
        y2="5%"
        stroke="#AEBBDA"
        strokeDasharray="5"
        strokeWidth="0.5"
      />
      <line
        x1="1%"
        y1="19%"
        x2="100%"
        y2="19%"
        stroke="#AEBBDA"
        strokeDasharray="05"
        strokeWidth="0.5"
      />
      <line
        x1="1%"
        y1="33%"
        x2="100%"
        y2="33%"
        stroke="#AEBBDA"
        strokeDasharray="5"
        strokeWidth="0.5"
      />
      <line
        x1="1%"
        y1="46%"
        x2="100%"
        y2="46%"
        stroke="#AEBBDA"
        strokeDasharray="5"
        strokeWidth="0.5"
      />
      <line
        x1="1%"
        y1="60%"
        x2="100%"
        y2="60%"
        stroke="#AEBBDA"
        strokeDasharray="5"
        strokeWidth="0.5"
      />
      <line
        x1="1%"
        y1="74%"
        x2="100%"
        y2="74%"
        stroke="#AEBBDA"
        strokeDasharray="5"
        strokeWidth="0.5"
      />
      <line
        x1="1%"
        y1="88%"
        x2="100%"
        y2="88%"
        stroke="#AEBBDA"
        strokeWidth="0.5"
      />
      <line
        x1="1%"
        y1="5%"
        x2="1%"
        y2="88%"
        stroke="#AEBBDA"
        strokeWidth="0.5"
      />
      <line
        x1="100%"
        y1="5%"
        x2="100%"
        y2="88%"
        stroke="#AEBBDA"
        strokeWidth="0.5"
        strokeDasharray="5"
      />
    </svg>
  );
};

SvgWebSiteAnalytics.propTypes = {
  data: PropTypes.shape({
    webSiteAnalytics: PropTypes.objectOf(
      PropTypes.shape({
        visits: PropTypes.number.isRequired,
        sessions: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default SvgWebSiteAnalytics;
