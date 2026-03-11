import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo_w.png";
const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer-section">
        <div className="container">
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a
                      href="index.html"
                      className="logo d-flex align-items-center"
                    >
                      <img src={logo} alt="logo" />
                    </a>
                  </div>
                  <div className="footer-text">
                    <p>
                      We engineer AI systems that replace repetitive human
                      effort in chip design with autonomous logic, learning, and
                      optimization
                    </p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a
                      href="https://x.com/wiowiztech?s=21&t=wzQHpg-0gATOVrW3W4vbVA"
                      className="twitter"
                      target="_blank"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/share/1EmT35hi9Q/?mibextid=wwXIfr"
                      className="facebook"
                      target="_blank"
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/wiowiztech?igsh=MTd3bmFidm80N281dw%3D%3D&utm_source=qr"
                      className="instagram"
                      target="_blank"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/wiowiztech/"
                      className="linkedin"
                      target="_blank"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="service-widget footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Services</h3>
                  </div>
                  <ul className="list">
                    <li>
                      <a href="services.html">RTL Design</a>
                    </li>
                    <li>
                      <a href="services.html">Design Verification</a>
                    </li>
                    <li>
                      <a href="services.html">AMS Design</a>
                    </li>
                    <li>
                      <a href="services.html">Front-End Design</a>
                    </li>
                    <li>
                      <a href="services.html">Physical Design</a>
                    </li>
                    <li>
                      <a href="services.html">Design for Test (DFT)</a>
                    </li>
                    <li>
                      <a href="services.html">FPGA Design</a>
                    </li>
                    <li>
                      <a href="services.html">Prototyping/Emulation</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
                <div className="service-widget footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Information</h3>
                  </div>
                  <ul className="list">
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="porfolio.html">Portfolio</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQs</a>
                    </li>
                    <li>
                      <a href="blogs.html">Blogs</a>
                    </li>
                    <li>
                      <a href="privacy-policy.html">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="privacy-policy.html">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="contact-widget footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Contacts</h3>
                  </div>
                  <div className="footer-text">
                    <p>
                      <i className="bi bi-geo-alt-fill mr-15"></i> #234, Sy. No.
                      34 Mullur Road, Ambalipura, Sarjapur Taluk East Bengaluru,
                      Bangalore, Karnataka 560035
                    </p>
                    <p>
                      <i className="bi bi-telephone-inbound-fill mr-15"></i>{" "}
                      +91-76808 99967
                    </p>
                    <p>
                      <i className="bi bi-envelope-fill mr-15"></i>{" "}
                      hr@wiowiz.com
                    </p>
                  </div>
                </div>
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Newsletter</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Don't miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i className="bi bi-telegram"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-left text-lg-left">
                <div className="copyright-text">
                  <p>2025 Wiowiz Technologies Pvt Ltd. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
