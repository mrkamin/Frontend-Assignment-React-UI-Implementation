const Svg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="svg">
    {/* <!-- Y-axis (Percentage) --> */}
    <text x="20" y="20" fontFamily="Arial" fontSize="12" fill="#AEBBDA">200%</text>
    <text x="20" y="70" fontFamily="Arial" fontSize="12" fill="#AEBBDA">100%</text>
    <text x="20" y="120" fontFamily="Arial" fontSize="12" fill="#AEBBDA">50%</text>
    <text x="20" y="170" fontFamily="Arial" fontSize="12" fill="#AEBBDA">0%</text>
    <text x="20" y="220" fontFamily="Arial" fontSize="12" fill="#AEBBDA">-50%</text>
    <text x="20" y="270" fontFamily="Arial" fontSize="12" fill="#AEBBDA">-100%</text>
    <text x="20" y="320" fontFamily="Arial" fontSize="12" fill="#AEBBDA">-200%</text>
    {/* <!-- Add more percentage labels as needed --> */}

    {/* <!-- X-axis (Months) --> */}
    <text x="80" y="350" fontFamily="Arial" fontSize="12" fill="#AEBBDA">Jan</text>
    <text x="120" y="350" fontFamily="Arial" fontSize="12" fill="#AEBBDA">Feb</text>
    <text x="160" y="350" fontFamily="Arial" fontSize="12" fill="#AEBBDA">Mar</text>
    <text x="200" y="350" fontFamily="Arial" fontSize="12" fill="#AEBBDA">Apr</text>
    <text x="240" y="350" fontFamily="Arial" fontSize="12" fill="#AEBBDA">May</text>
    <text x="280" y="350" fontFamily="Arial" fontSize="12" fill="#AEBBDA">Jun</text>
    <text x="320" y="350" fontFamily="Arial" fontSize="12" fill="#AEBBDA">Jul</text>
    <text x="360" y="350" fontFamily="Arial" fontSize="12" fill="#AEBBDA">Aug</text>
    <text x="400" y="350" fontFamily="Arial" fontSize="12" fill="#AEBBDA">Sep</text>
    <text x="440" y="350" fontFamily="Arial" fontSize="12" fill="#AEBBDA">Oct</text>
    <text x="480" y="350" fontFamily="Arial" fontSize="12" fill="#AEBBDA">Nov</text>
    <text x="520" y="350" fontFamily="Arial" fontSize="12" fill="#AEBBDA">Dec</text>
    {/* <!-- Add more months as needed --> */}

    {/* <!-- Graph bars --> */}
    {/* <!-- Example bar for January, representing 50% --> */}
    <rect x="40" y="120" width="100" height="20" fill="green" />

    {/* <!-- Example bar for February, representing -20% --> */}
    <rect x="180" y="220" width="40" height="20" fill="red" />
    {/* <!-- Add more bars for other months as needed --> */}
  </svg>
);

export default Svg;
