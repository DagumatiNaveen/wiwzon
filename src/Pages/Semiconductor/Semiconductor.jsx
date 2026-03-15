import React from 'react'
import { Link } from 'react-router-dom';
import serviceDesign from "../../assets/images/icons/service-design.svg";
import serviceHosting from "../../assets/images/icons/service-hosting.svg";
import serviceSocial from "../../assets/images/icons/service-social.svg";
import serviceSeo from "../../assets/images/icons/service-seo.svg";
import serviceCloud from "../../assets/images/icons/service-cloud.svg";
import serviceSecure from "../../assets/images/icons/service-secure.svg";


function Semiconductor() {
  return (
    <div>
      
  <main id="main">

    {/* Breadcrumbs */}
    <div className="breadcrumbs">
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="mb-4">Semiconductor</h2>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="container">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>Semiconductor Services</li>
          </ol>
        </div>
      </nav>
    </div>


    <div className="single-page">

      {/* <!-- Start Service Section --> */}
      <div id="services" className="section">
        <div className="top-icon-box position-relative">
          <div className="container position-relative">
            {/* <!-- Section Header --> */}
            <div className="text-start mb-5">
              <span className="badge bg-success mb-3">Services</span>
              <h2 className="fw-bold">Semiconductor</h2>
              <p className="lead">
                WIOWIZ provides end-to-end engineering services across semiconductors, embedded systems, and AI/ML
                hardware. From early
                RTL design to verification and embedded firmware, we help our clients bring complex systems to life.
              </p>
            </div>
            <div className="row gy-4">

              <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="icon-box">
                  <div className="icon"><img src={serviceDesign} alt="icon" /></div>
                  <h4 className="title"><a href="" className="stretched-link">RTL-to-GDSII Implementation</a></h4>
                  <p>Full-flow physical implementation from RTL synthesis to final GDSII signoff.</p>
                </div>
              </div>
              {/* <!--End Icon Box --> */}

              <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box">
                  <div className="icon"><img src={serviceHosting} alt="icon" /></div>
                  <h4 className="title"><a href="" className="stretched-link">AI-Augmented SoC Verification</a></h4>
                  <p>Intelligent verification cycles from RTL compliance to coverage signoff.</p>
                </div>
              </div>
              {/* <!--End Icon Box --> */}

              <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="500">
                <div className="icon-box">
                  <div className="icon"><img src={serviceSocial} alt="icon"/></div>
                  <h4 className="title"><a href="" className="stretched-link">Pre-Silicon Firmware & Co-Design</a></h4>
                  <p>Hardware-Software Co-Design and pre-silicon validation.</p>
                </div>
              </div>
              {/* <!--End Icon Box --> */}

              <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="icon-box">
                  <div className="icon"><img src={serviceSeo} alt="icon" /></div>
                  <h4 className="title"><a href="" className="stretched-link">Domain-Specific AI Architecture (RISC-V + NPU)</a>
                  </h4>
                  <p>Custom RISC-V ISA integration with neural acceleration.</p>
                </div>
              </div>
              {/* <!--End Icon Box --> */}


              <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box">
                  <div className="icon"><img src={serviceCloud} alt="icon" /></div>
                  <h4 className="title"><a href="" className="stretched-link">Emulation-Based System Validation</a></h4>
                  <p>High-fidelity hardware emulation for full-system stress testing.</p>
                </div>
              </div>
              {/* <!--End Icon Box --> */}


              <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="500">
                <div className="icon-box">
                  <div className="icon"><img src={serviceSecure} alt="icon" /></div>
                  <h4 className="title"><a href="" className="stretched-link">FPGA-to-ASIC Migration & Prototyping</a></h4>
                  <p>Transitioning prototypes to production-ready silicon.</p>
                </div>
              </div>
              {/* <!--End Icon Box --> */}

              <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="500">
                <div className="icon-box">
                  <div className="icon"><img src={serviceSecure} alt="icon" /></div>
                  <h4 className="title"><a href="" className="stretched-link">UCIe & Chiplet Interconnect Solutions</a></h4>
                  <p>Modular SoC architectures via Die-to-Die interfaces.</p>
                </div>
              </div>
              {/* <!--End Icon Box --> */}

            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Service Section --> */}

    </div>

  </main>
  {/* <!-- End #main --> */}
    </div>
  )
}
export default Semiconductor;
