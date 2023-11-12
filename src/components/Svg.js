import PropTypes from 'prop-types';

const Svg = ({ data }) => {
  if (!data || !data.months) {
    console.error('Data or data.months is undefined or null');
    return null; // or some default content or a loading indicator
  }
  const months = Object.keys(data.months);
  const calculateXcoordinate = (index) => `${index * 8 + 9.5}%`;

  const calculateYCoordinate = (value) => {
    const percentage = (value / 100) * 100;
    return `${percentage}`;
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="svg"
      viewBox="0 0 100 27"
    >
      <rect x="8.2%" y="46%" width="3%" height="36%" fill="#0082CC" />
      <rect x="8.7%" y="46%" width="2%" height="28%" fill="#FB4540" />
      <rect x="16%" y="46%" width="3%" height="16%" fill="#0082CC" />
      <rect x="16.5%" y="46%" width="2%" height="8%" fill="#FB4540" />
      <rect x="24%" y="46%" width="3%" height="30%" fill="#0082CC" />
      <rect x="24.5%" y="46%" width="2%" height="8%" fill="#FB4540" />
      <rect x="32%" y="19%" width="3%" height="27%" fill="#FB4540" />
      <rect x="32.5%" y="39%" width="2%" height="7%" fill="#0082CC" />
      <rect x="40%" y="19%" width="3%" height="27%" fill="#FB4540" />
      <rect x="40.5%" y="29%" width="2%" height="17%" fill="#0082CC" />
      <rect x="48%" y="46%" width="3%" height="22%" fill="#0082CC" />
      <rect x="48.5%" y="46%" width="2%" height="13%" fill="#FB4540" />
      <rect x="56%" y="46%" width="3%" height="26%" fill="#0082CC" />
      <rect x="56.5%" y="46%" width="2%" height="7%" fill="#FB4540" />
      <rect x="64%" y="29%" width="3%" height="17%" fill="#FB4540" />
      <rect x="64.5%" y="38%" width="2%" height="8%" fill="#0082CC" />
      <rect x="72%" y="28%" width="3%" height="18%" fill="#FB4540" />
      <rect x="72.5%" y="37%" width="2%" height="9%" fill="#0082CC" />
      <rect x="80%" y="46%" width="3%" height="18%" fill="#FB4540" />
      <rect x="80.5%" y="46%" width="2%" height="12%" fill="#0082CC" />
      <rect x="88%" y="46%" width="3%" height="36%" fill="#0082CC" />
      <rect x="88.5%" y="46%" width="2%" height="28%" fill="#FB4540" />
      <rect x="96%" y="28%" width="3%" height="18%" fill="#FB4540" />
      <rect x="96.5%" y="38%" width="2%" height="8%" fill="#0082CC" />

      {months.map((month, index) => {
        const height = calculateYCoordinate(data.months[month].userSignUp);
        return (
          <circle
            key={`userSignUp-${month}`}
            cx={calculateXcoordinate(index)}
            cy={`${46 + +height}%`}
            r="0.4"
            fill="#00F2DE"
          />
        );
      })}

      {months.map((month, index) => {
        const height = calculateYCoordinate(data.months[month].userSubscribed);
        return (
          <circle
            key={`userSubscribed-${month}`}
            cx={calculateXcoordinate(index)}
            cy={`${46 + +height}%`}
            r="0.4"
            fill="#FB4540"
          />
        );
      })}

      {months.map((month, index) => {
        const height = calculateYCoordinate(data.months[month].userSignUp);
        const nextHeight = index < months.length - 1
          ? calculateYCoordinate(data.months[months[index + 1]].userSignUp)
          : height; // For the last element, use the same height

        return (
          <line
            key={`line-${month}`}
            x1={calculateXcoordinate(index)}
            y1={`${46 + +height}%`}
            x2={calculateXcoordinate(index + 1)}
            y2={`${46 + +nextHeight}%`}
            stroke="#00F2DE"
            strokeDasharray="0.5"
            strokeWidth="0.08"
            opacity="1"
          />
        );
      })}
      {months.map((month, index) => {
        const height = calculateYCoordinate(data.months[month].userSubscribed);
        const nextHeight = index < months.length - 1
          ? calculateYCoordinate(data.months[months[index + 1]].userSubscribed)
          : height; // For the last element, use the same height

        return (
          <line
            key={`line-${month}`}
            x1={calculateXcoordinate(index)}
            y1={`${46 + +height}%`}
            x2={calculateXcoordinate(index + 1)}
            y2={`${46 + +nextHeight}%`}
            stroke="#FB4540"
            strokeDasharray="0.5"
            strokeWidth="0.08"
            opacity="1"
          />
        );
      })}
      <text x="1%" y="5%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">
        200%
      </text>
      <text x="1%" y="19%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">
        100%
      </text>
      <text x="1%" y="33%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">
        50%
      </text>
      <text x="1%" y="46%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">
        0%
      </text>
      <text x="1%" y="60%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">
        -50%
      </text>
      <text x="1%" y="74%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">
        -100%
      </text>
      <text x="1%" y="88%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">
        -200%
      </text>

      <text x="10%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">
        Jan
      </text>
      <text x="18%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">
        Feb
      </text>
      <text x="26%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">
        Mar
      </text>
      <text x="34%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">
        Apr
      </text>
      <text x="42%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">
        May
      </text>
      <text x="50%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">
        Jun
      </text>
      <text x="58%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">
        Jul
      </text>
      <text x="66%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">
        Aug
      </text>
      <text x="74%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">
        Sep
      </text>
      <text x="82%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">
        Oct
      </text>
      <text x="90%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">
        Nov
      </text>
      <text x="98%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">
        Dec
      </text>
      <line
        x1="5%"
        y1="5%"
        x2="100%"
        y2="5%"
        stroke="#AEBBDA"
        strokeDasharray="0.3"
        strokeWidth="0.02"
      />
      <line
        x1="5%"
        y1="19%"
        x2="100%"
        y2="19%"
        stroke="#AEBBDA"
        strokeDasharray="0.3"
        strokeWidth="0.02"
      />
      <line
        x1="5%"
        y1="33%"
        x2="100%"
        y2="33%"
        stroke="#AEBBDA"
        strokeDasharray="0.3"
        strokeWidth="0.02"
      />
      <line
        x1="5%"
        y1="46%"
        x2="100%"
        y2="46%"
        stroke="#AEBBDA"
        strokeDasharray="0.3"
        strokeWidth="0.02"
      />
      <line
        x1="5%"
        y1="60%"
        x2="100%"
        y2="60%"
        stroke="#AEBBDA"
        strokeDasharray="0.3"
        strokeWidth="0.02"
      />
      <line
        x1="5%"
        y1="74%"
        x2="100%"
        y2="74%"
        stroke="#AEBBDA"
        strokeDasharray="0.3"
        strokeWidth="0.02"
      />
      <line
        x1="5%"
        y1="88%"
        x2="100%"
        y2="88%"
        stroke="#AEBBDA"
        strokeDasharray="0.3"
        strokeWidth="0.02"
      />
    </svg>
  );
};

Svg.propTypes = {
  data: PropTypes.shape({
    months: PropTypes.objectOf(
      PropTypes.shape({
        userSignUp: PropTypes.number.isRequired,
        userSubscribed: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default Svg;
