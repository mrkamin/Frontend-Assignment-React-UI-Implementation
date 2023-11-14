// Import the CSS stylesheet for the Navbar component
import '../css/navbar.css';

// Define the Navbar component
const Navbar = () => (
  <>
    {/* Navigation bar with flex layout, justified content, and aligned items */}
    <nav className="d-flex justify-content-between align-items-center navbar">
      {/* Left side of the navbar with title and description */}
      <div className="d-flex flex-column navbar-title">
        <h1>User Analytics</h1>
        <p>Lorem ipsum dolor sit consectetur.</p>
      </div>

      {/* Right side of the navbar with a dropdown */}
      <div>
        {/* Dropdown for selecting user type */}
        <select className="drop-down btn">
          <option value="apple">User</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      </div>
    </nav>
  </>
);

// Export the Navbar component as the default export
export default Navbar;
