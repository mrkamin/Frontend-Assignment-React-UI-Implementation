import React from 'react';

// SvgLocation component
const SvgLocation = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="svg2"
  >

    {/* Vertical lines */}
    <line
      x1="6%"
      y1="10%"
      x2="6%"
      y2="80%"
      stroke="#AEBBDA"
      strokeDasharray="5"
      strokeWidth="0.5"
    />
    <line
      x1="21%"
      y1="10%"
      x2="21%"
      y2="80%"
      stroke="#AEBBDA"
      strokeDasharray="5"
      strokeWidth="0.5"
    />
    <line
      x1="36%"
      y1="10%"
      x2="36%"
      y2="80%"
      stroke="#AEBBDA"
      strokeDasharray="5"
      strokeWidth="0.5"
    />
    <line
      x1="51%"
      y1="10%"
      x2="51%"
      y2="80%"
      stroke="#AEBBDA"
      strokeDasharray="5"
      strokeWidth="0.5"
    />
    <line
      x1="66%"
      y1="10%"
      x2="66%"
      y2="80%"
      stroke="#AEBBDA"
      strokeDasharray="5"
      strokeWidth="0.5"
    />
    <line
      x1="81%"
      y1="10%"
      x2="81%"
      y2="80%"
      stroke="#AEBBDA"
      strokeDasharray="5"
      strokeWidth="0.5"
    />
    <line
      x1="96%"
      y1="10%"
      x2="96%"
      y2="80%"
      stroke="#AEBBDA"
      strokeDasharray="5"
      strokeWidth="0.5"
    />

    {/* Horizontal line */}
    <line
      x1="6%"
      y1="93%"
      x2="96%"
      y2="93%"
      stroke="#AEBBDA"
      strokeWidth="0.5"
    />

    {/* Rectangles with specific colors */}
    <rect
      x="5.5%"
      y="51%"
      width="1%"
      height="42%"
      fill="#00F2DE"
      rx="5"
      ry="5"
    />
    <rect
      x="5.5%"
      y="70%"
      width="1%"
      height="23%"
      fill="#FB4540"
      rx="5"
      ry="5"
    />
    <rect
      x="20.5%"
      y="40%"
      width="1%"
      height="52.7%"
      fill="#00F2DE"
      rx="5"
      ry="5"
    />
    <rect
      x="20.5%"
      y="65%"
      width="1%"
      height="28%"
      fill="#FB4540"
      rx="5"
      ry="5"
    />
    <rect
      x="35.5%"
      y="30%"
      width="1%"
      height="62.7%"
      fill="#00F2DE"
      rx="5"
      ry="5"
    />
    <rect
      x="35.5%"
      y="60%"
      width="1%"
      height="33%"
      fill="#FB4540"
      rx="5"
      ry="5"
    />
    <rect
      x="50.5%"
      y="20%"
      width="1%"
      height="73%"
      fill="#00F2DE"
      rx="5"
      ry="5"
    />
    <rect
      x="50.5%"
      y="55%"
      width="1%"
      height="38%"
      fill="#FB4540"
      rx="5"
      ry="5"
    />
    <rect
      x="65.5%"
      y="20%"
      width="1%"
      height="73%"
      fill="#00F2DE"
      rx="5"
      ry="5"
    />
    <rect
      x="65.5%"
      y="50%"
      width="1%"
      height="43%"
      fill="#FB4540"
      rx="5"
      ry="5"
    />
    <rect
      x="80.5%"
      y="30%"
      width="1%"
      height="62.7%"
      fill="#00F2DE"
      rx="5"
      ry="5"
    />
    <rect
      x="80.5%"
      y="55%"
      width="1%"
      height="38%"
      fill="#FB4540"
      rx="5"
      ry="5"
    />
    <rect
      x="95.5%"
      y="51%"
      width="1%"
      height="42%"
      fill="#00F2DE"
      rx="5"
      ry="5"
    />
    <rect
      x="95.5%"
      y="70%"
      width="1%"
      height="23%"
      fill="#FB4540"
      rx="5"
      ry="5"
    />

    {/* Text labels for the y-axis */}
    <text x="1%" y="10%" fontFamily="Arial" fontSize="10" fill="#AEBBDA">
      $3k
    </text>
    <text x="1%" y="37%" fontFamily="Arial" fontSize="10" fill="#AEBBDA">
      $2k
    </text>
    <text x="1%" y="64%" fontFamily="Arial" fontSize="10" fill="#AEBBDA">
      $1k
    </text>
    <text x="1%" y="95%" fontFamily="Arial" fontSize="10" fill="#AEBBDA">
      0
    </text>

    {/* Text labels for the x-axis (days of the week) */}
    <text x="4.5%" y="100%" fontFamily="Arial" fontSize="10" fill="#AEBBDA">
      Mo
    </text>
    <text x="19.5%" y="100%" fontFamily="Arial" fontSize="10" fill="#AEBBDA">
      Tu
    </text>
    <text x="34.5%" y="100%" fontFamily="Arial" fontSize="10" fill="#AEBBDA">
      We
    </text>
    <text x="49.5%" y="100%" fontFamily="Arial" fontSize="10" fill="#AEBBDA">
      Th
    </text>
    <text x="64.5%" y="100%" fontFamily="Arial" fontSize="10" fill="#AEBBDA">
      Fr
    </text>
    <text x="79.5%" y="100%" fontFamily="Arial" fontSize="10" fill="#AEBBDA">
      Sa
    </text>
    <text x="94.5%" y="100%" fontFamily="Arial" fontSize="10" fill="#AEBBDA">
      S8
    </text>
  </svg>
);

export default SvgLocation;
