
import React from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import serviceDesign from "../../assets/images/icons/service-design.svg";
import serviceHosting from "../../assets/images/icons/service-hosting.svg";
import serviceSocial from "../../assets/images/icons/service-social.svg";
import serviceSeo from "../../assets/images/icons/service-seo.svg";
import serviceCloud from "../../assets/images/icons/service-cloud.svg";
import serviceSecure from "../../assets/images/icons/service-secure.svg";
import icon1 from "../../assets/images/icons/icon-1.svg";
import icon2 from "../../assets/images/icons/icon-2.svg";
import icon3 from "../../assets/images/icons/icon-3.svg";
import icon4 from "../../assets/images/icons/icon-4.svg";
import icon5 from "../../assets/images/icons/icon-5.svg";
import icon6 from "../../assets/images/icons/icon-6.svg";
import featuresImg from "../../assets/images/features-new.png";
import product1 from "../../assets/images/portfolio/Defense__Aerospace.jpeg";
import product2 from "../../assets/images/portfolio/AI-Native__SOC.jpeg";
import product3 from "../../assets/images/portfolio/Edge__AI__Computer__Vision.jpeg";
import product4 from "../../assets/images/portfolio/ADAS.jpeg";
import product5 from "../../assets/images/portfolio/Agricultural__Robotics.jpeg";
import product6 from "../../assets/images/portfolio/ARVR__Display__Systems.jpeg";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import ServiceGrid from '../../Components/ServiceGrid';
import semiconductorServices from '../../Data/semiconductorServices';


const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  
  return (
    <>
      <main id="main">
        {/* Hero section with background image */}
        <section className="hero" style={{ position: "relative", overflow: "hidden" }}>
        <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    fullScreen: { enable: false },
    background: { color: "transparent" },
    fpsLimit: 60,
    particles: {
      number: { value: 80 },
      color: { value: "#ffffff" },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2
      },
      size: {
        value: 3
      }
    }
  }}
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0
  }}
/>
          <div className="container position-relative"  style={{ zIndex: 1 }}>
            <div className="row align-items-center">
              <div className="col-lg-6"></div>
              <div className="col-lg-6" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="hero-title">From Spec To Silicon</h2>
                <p className="hero-subtitle">Intelligent. Autonomous. Sign-Off Aware</p>
                <h3 className="hero-heading mt-5 mb-3">Who We Are</h3>
                <p className="hero-text">
                  We combine open-source EDA with WIOWIZ intelligence to observe,
                  learn, and act autonomously across real silicon workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div id="services" className="section">
          <div className="top-icon-box position-relative">
            <div className="container position-relative">
              <div className="section-header">
                <h2>Services We Offer</h2>
              </div>
              {/* <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="100">
  <div className="icon-box">
    <div className="icon">
      <img src={serviceDesign} alt="icon" />
    </div>  

    <h4 className="title">
      <Link to="/RTL_to_GDSII" className="stretched-link">
        RTL-to-GDSII Implementation
      </Link>
    </h4>

    <p>
      Full-flow physical implementation from RTL synthesis final to GDSII signoff.
    </p>
  </div>
</div> */}
<ServiceGrid services={semiconductorServices} />
            </div>
          </div>
        </div>

        <section>
          <div className="container why-choose" id="featured">
            <div
              className="section-header"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2>Why Choose Us</h2>
            </div>
            <div className="row align-items-center g-4">
              <div className="col-lg-3">
                <div className="why-choose-block" data-aos="fade-up" data-aos-delay="100">
                  <div className="why-choose-title-row">
                    <h4 className="why-choose-title">Top Layer – The Brain</h4>
                    <img className="why-choose-icon" src={icon1} alt="" />
                  </div>
                  <div className="why-choose-subtitle">Intelligence & Observation</div>
                  <ul className="why-choose-list">
                    <li>Captures decisions, failures, fixes</li>
                    <li>Builds persistent engineering memory</li>
                    <li>Prevents repeated mistakes</li>
                  </ul>
                </div>

                <div className="why-choose-block" data-aos="fade-up" data-aos-delay="200">
                  <div className="why-choose-title-row">
                    <h4 className="why-choose-title">Middle Layer – The Accelerator</h4>
                    <img className="why-choose-icon" src={icon2} alt="" />
                  </div>
                  <div className="why-choose-subtitle">AI Augmentation</div>
                  <ul className="why-choose-list">
                    <li>AI inside the flow</li>
                    <li>Guides verification, PPA, compliance</li>
                    <li>Speeds iteration without replacing tools</li>
                  </ul>
                </div>

                <div className="why-choose-block" data-aos="fade-up" data-aos-delay="300">
                  <div className="why-choose-title-row">
                    <h4 className="why-choose-title">Base Layer – The Foundation</h4>
                    <img className="why-choose-icon" src={icon3} alt="" />
                  </div>
                  <div className="why-choose-subtitle">OSS + Commercial Bridge</div>
                  <ul className="why-choose-list">
                    <li>Open-source tools for exploration</li>
                    <li>Commercial EDA for sign-off</li>
                    <li>Right tool at the right time</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="why-choose-visual" data-aos="zoom-in" data-aos-delay="150">
                  <img src={featuresImg} alt="WIOWIZ layered stack" className="img-fluid" />
                </div>
              </div>

              <div className="col-lg-3">
                <div className="why-choose-block" data-aos="fade-up" data-aos-delay="100">
                  <div className="why-choose-title-row">
                    <h4 className="why-choose-title">Lower Cost</h4>
                    <img className="why-choose-icon" src={icon4} alt="" />
                  </div>
                  <ul className="why-choose-list">
                    <li>Reduced license burn</li>
                    <li>Smarter tool usage</li>
                  </ul>
                </div>

                <div className="why-choose-block" data-aos="fade-up" data-aos-delay="200">
                  <div className="why-choose-title-row">
                    <h4 className="why-choose-title">Better Decisions</h4>
                    <img className="why-choose-icon" src={icon5} alt="" />
                  </div>
                  <ul className="why-choose-list">
                    <li>Evidence over assumptions</li>
                    <li>Risk visible before tapeout</li>
                  </ul>
                </div>

                <div className="why-choose-block" data-aos="fade-up" data-aos-delay="300">
                  <div className="why-choose-title-row">
                    <h4 className="why-choose-title">Continuity</h4>
                    <img className="why-choose-icon" src={icon6} alt="" />
                  </div>
                  <ul className="why-choose-list">
                    <li>Knowledge preserved across stages</li>
                    <li>No reset at handoffs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio sections-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Domains & Applications</h2>
            </div>
            <div
              className="portfolio-isotope"
              data-portfolio-filter="*"
              data-portfolio-layout="masonry"
              data-portfolio-sort="original-order"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div>
                <ul className="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    Automotive chip visual
                  </li>
                  <li data-filter=".filter-app">IoT network board</li>
                  <li data-filter=".filter-product">AI chip art</li>
                  <li data-filter=".filter-books">Data center/HPC rack</li>
                  <li data-filter=".filter-books">Radar/RF diagram</li>
                  <li data-filter=".filter-books">
                    Power IC or battery schematic
                  </li>
                </ul>
              </div>

              <div className="row gy-4 portfolio-container">
                <div className="col-xl-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <a
                      href={product1}
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img src={product1} className="img-fluid" alt="" />
                    </a>
                  </div>
                </div>

                {/* <!-- End Portfolio Item --> */}

                <div className="col-xl-4 col-md-6 portfolio-item filter-product">
                  <div className="portfolio-wrap">
                    <a
                      href={product2}
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img src={product2} className="img-fluid" alt="" />
                    </a>
                  </div>
                </div>

                {/* <!-- End Portfolio Item --> */}

                <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
                  <div className="portfolio-wrap">
                    <a
                      href={product3}
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img src={product3} className="img-fluid" alt="" />
                    </a>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}

                <div className="col-xl-4 col-md-6 portfolio-item filter-books">
                  <div className="portfolio-wrap">
                    <a
                      href={product4}
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img src={product4} className="img-fluid" alt="" />
                    </a>
                  </div>
                </div>

                {/* <!-- End Portfolio Item --> */}

                <div className="col-xl-4 col-md-6 portfolio-item filter-app">
                  <div className="portfolio-wrap">
                    <a
                      href={product5}
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img src={product5} className="img-fluid" alt="" />
                    </a>
                  </div>
                </div>

                {/* <!-- End Portfolio Item --> */}

                <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
                  <div className="portfolio-wrap">
                    <a
                      href={product6}
                      data-gallery="portfolio-gallery-app"
                      className="glightbox"
                    >
                      <img src={product6} className="img-fluid" alt="" />
                    </a>
                  </div>
                </div>
                {/* <!-- End Portfolio Item --> */}
              </div>
              {/* <!-- End Portfolio Container --> */}
            </div>
          </div>
        </section>
        {/* <!-- End Portfolio Section --> */}

        {/* <!--  Recent Blog Posts Section  -->
    <!-- <section id="recent-posts" className="recent-posts sections-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Blogs</h2>
          <p>Latest Insights from our Experts</p>
        </div>


      </div>
    </section>End Recent Blog Posts Section --> */}

        {/* <!-- Start Contact Section --> */}

        <div id="contact" className="contact-section section">
          <div className="section-header">
            <h2>Contact Us</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12" data-aos="fade-right">
                <div className="contact-information-box-3">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="single-contact-info-box">
                        <div className="contact-info">
                          <h6>Address:</h6>
                          <p>
                            #234, Sy. No. 34 Mullur Road, Ambalipura, Sarjapur
                            Taluk East Bengaluru, Bangalore, Karnataka 560035
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-contact-info-box">
                        <div className="contact-info">
                          <h6>Phone:</h6>
                          <p>+91-76808 99967</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-contact-info-box">
                        <div className="contact-info">
                          <h6>Email:</h6>
                          <p>hr@wiowiz.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12" data-aos="fade-left">
                <div className="contact-form-box contact-form contact-form-3">
                  <div className="form-container-box">
                    <form
                      className="contact-form form"
                      id="ajax-contact"
                      method="post"
                      action="assets/phpscripts/contact.php"
                    >
                      <div className="controls">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group form-input-box">
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Name*"
                                required="required"
                                data-error="Name is required."
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group form-input-box">
                              <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Email*"
                                required="required"
                                data-error="Valid email is required."
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group form-input-box">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                placeholder="Subject"
                                required="required"
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group form-input-box">
                              <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="7"
                                placeholder="Write Your Message*"
                                required="required"
                                data-error="Please, leave us a message."
                              ></textarea>
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button type="submit" data-text="Send Message">
                              Send Message
                            </button>
                          </div>
                          <div className="messages">
                            <div
                              className="alert alert alert-success alert-dismissable alert-dismissable hidden"
                              id="msgSubmit"
                            >
                              <button
                                type="button"
                                className="close"
                                data-dismiss="alert"
                                aria-hidden="true"
                              >
                                &times;
                              </button>{" "}
                              Thank You! your message has been sent.{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Home;
