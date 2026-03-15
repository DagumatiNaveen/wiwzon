import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo_w.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom shadow-sm sticky-top">
      <div className="container px-4">
        {/* Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Wiowiz" style={{ height: '40px', marginRight: '8px' }} />
          <div className="brand-text" style={{ lineHeight: 1 }}>
          </div>
        </NavLink>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#wiowizNavbar"
          aria-controls="wiowizNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="wiowizNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/Semiconductor">
                Semiconductor
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <NavLink
                className="nav-link"
                to="/Embedded-Systems"
          
              >
                Embedded Systems
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Ai-ML-Services">
                AI / ML Services
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/Products">
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/careers">
                Careers
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
            </li>

            {/* CTA Button */}
            <li className="nav-item ms-lg-3">
              <NavLink className="btn btn-primary px-4" to="/contact">
                Get in Touch
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
