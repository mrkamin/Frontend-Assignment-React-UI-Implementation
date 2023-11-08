import '../css/navbar.css';

const Navbar = () => (
  <>
    <nav className="d-flex justify-content-between align-items-center navbar">
      <div className="d-flex flex-column navbar-title">
        <h1>User Analytics</h1>
        <p>Lorem ipsum dolor sit consectetur.</p>
      </div>
      <div>
        <select className="drop-down btn">
          <option value="apple">User</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      </div>
    </nav>
  </>
);

export default Navbar;
