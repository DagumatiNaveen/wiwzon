import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import logoLight from "../assets/images/logo_w.png";
import logoDark from "../assets/images/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY || 0;

    const onScroll = () => {
      const y = window.scrollY || 0;
      setIsScrolled(y > 10);

      const prevY = lastScrollYRef.current;
      if (y > prevY + 2) setScrollDirection("down");
      else if (y < prevY - 2) setScrollDirection("up");

      lastScrollYRef.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="header"
      className={[
        "header",
        "align-items-center",
        "sticked",
        "stikcy-menu",
        isScrolled ? "is-scrolled" : "",
        scrollDirection === "down" ? "is-scroll-down" : "is-scroll-up",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
        <div className="container px-4">
          {/* Logo */}
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={isScrolled ? logoDark : logoLight}
              alt="Wiowiz"
              style={{ height: "40px", marginRight: "8px" }}
            />
            <div className="brand-text" style={{ lineHeight: 1 }}></div>
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
                <NavLink className="nav-link" to="/Embedded-Systems">
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
    </header>
  );
};

export default Header;
