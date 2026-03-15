import React from 'react'
import { Link } from 'react-router-dom';
import serviceDesign from "../../assets/images/icons/service-design.svg";
import serviceHosting from "../../assets/images/icons/service-hosting.svg";
import serviceSocial from "../../assets/images/icons/service-social.svg";
import serviceSeo from "../../assets/images/icons/service-seo.svg";
import serviceCloud from "../../assets/images/icons/service-cloud.svg";
import serviceSecure from "../../assets/images/icons/service-secure.svg";

const Embedded = () => {
  return (
    <div>
      
  <main id="main">

    {/* Breadcrumbs */}
    <div className="breadcrumbs">
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="mb-4">Embedded Systems</h2>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="container">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>Embedded Systems</li>
          </ol>
        </div>
      </nav>
    </div>

    <div className="single-page">

      {/* Start Service Section */}
      <div id="services" className="section">
        <div className="top-icon-box position-relative">
          <div className="container position-relative">
            {/* Section Header */}
            <div className="text-start mb-5">
              <span className="badge bg-success mb-3">Services</span>
              <h2 className="fw-bold">Embedded Systems</h2>
              <p className="lead">
                We keep this cautious and production-focused. Two offerings to start, with private/on-prem options.
              </p>
            </div>
            <div className="row gy-4">

              <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="icon-box">
                  <div className="icon"><img src={serviceDesign} alt="icon" /></div>
                  <h4 className="title"><a href="" className="stretched-link">Edge AI on SBCs/NPUs</a></h4>
                  <p>Vision/audio pipelines with NPUs/GPUs for real-time processing.</p>
                </div>
              </div>
              {/* End Icon Box */}

              <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box">
                  <div className="icon"><img src={serviceHosting} alt="icon" /></div>
                  <h4 className="title"><a href="" className="stretched-link">On-Device Assistants (Local Q&A)</a></h4>
                  <p>SOP/checklist kiosk with local document store and role-based safety.</p>
                </div>
              </div>
              {/* End Icon Box */}

              <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="500">
                <div className="icon-box">
                  <div className="icon"><img src={serviceSocial} alt="icon"/></div>
                  <h4 className="title"><a href="" className="stretched-link">Offline-First Logging & Sync</a></h4>
                  <p>Works offline with automatic data sync when connected back online.</p>
                </div>
              </div>
              {/* End Icon Box */}

              <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="icon-box">
                  <div className="icon"><img src={serviceSeo} alt="icon" /></div>
                  <h4 className="title"><a href="" className="stretched-link">Optimized Runtimes</a></h4>
                  <p>TensorRT, ONNX Runtime, OpenVINO for hardware acceleration.</p>
                </div>
              </div>
              {/* End Icon Box */}

              <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box">
                  <div className="icon"><img src={serviceCloud} alt="icon" /></div>
                  <h4 className="title"><a href="" className="stretched-link">Pilot Program</a></h4>
                  <p>4–6 week pilot with site survey, build, testing, and handover training.</p>
                </div>
              </div>
              {/* End Icon Box */}

              <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="500">
                <div className="icon-box">
                  <div className="icon"><img src={serviceSecure} alt="icon" /></div>
                  <h4 className="title"><a href="" className="stretched-link">Private/On-Prem Options</a></h4>
                  <p>Fully isolated deployments with audit trails and compliance support.</p>
                </div>
              </div>
              {/* End Icon Box */}

            </div>
          </div>
        </div>
      </div>
      {/* End Service Section */}

    </div>

  </main>
  {/* End #main */}
    </div>
  )
}

export default Embedded