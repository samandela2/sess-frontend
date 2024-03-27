import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#2E2E6A" }}
    >
      <div className="container-fluid">
        <span
          className="navbar-brand mb-0 h1"
          style={{ fontSize: "24px", position: "absolute", top: "10px" }}
        >
          SESS
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{ marginTop: "50px" }}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/schedule">
                Schedule
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/client-search">
                Client Search
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/client-detail">
                Client Detail
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/task-page">
                Tasks
              </Link>
            </li>

            {/* Navigation links */}
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/logoff">
                Logoff
              </Link>
            </li>

            {/* Right-aligned links, like Logoff */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
