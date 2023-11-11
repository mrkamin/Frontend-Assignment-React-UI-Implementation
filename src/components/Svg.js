const Svg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="svg" viewBox="0 0 100 30">
    {/* Y-axis (Percentage) */}
    <text x="5%" y="5%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">200%</text>
    <text x="5%" y="17%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">100%</text>
    <text x="5%" y="29%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">50%</text>
    <text x="5%" y="41%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">0%</text>
    <text x="5%" y="53%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">-50%</text>
    <text x="5%" y="65%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">-100%</text>
    <text x="5%" y="82%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">-200%</text>

    {/* X-axis (Months) */}
    <text x="10%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">Jan</text>
    <text x="18%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">Feb</text>
    <text x="26%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">Mar</text>
    <text x="34%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">Apr</text>
    <text x="42%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">May</text>
    <text x="50%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">Jun</text>
    <text x="58%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">Jul</text>
    <text x="66%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">Aug</text>
    <text x="74%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">Sep</text>
    <text x="82%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">Oct</text>
    <text x="90%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">Nov</text>
    <text x="98%" y="95%" fontFamily="Arial" fontSize="5%" fill="#AEBBDA">Dec</text>

    {/* Graph bars */}
    {/* Example bar for January, representing 50% */}
    <rect x="10%" y="35%" width="20%" height="3%" fill="green" />

    {/* Example bar for February, representing -20% */}
    <rect x="40%" y="65%" width="10%" height="3%" fill="red" />
  </svg>
);

export default Svg;
