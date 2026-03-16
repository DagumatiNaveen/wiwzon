import React from "react";
import { Link } from "react-router-dom";
import serviceDesign from "../../assets/images/icons/service-design.svg";
import serviceHosting from "../../assets/images/icons/service-hosting.svg";
import serviceSocial from "../../assets/images/icons/service-social.svg";

const Careers = () => {
  return (
    
    <main id="main">

<div className="section">

  <div className="container position-relative mb-5">
    <div className="section-header">
      <h2>Why Work With Us?</h2>
    </div>
    <div className="row gy-4">

      <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="100">
        <a href="blog-details.html">
          <div className="icon-box">
            <div className="icon"><img src="assets/images/icons/service-design.svg" alt="icon" /></div>
            <h4 className="title"><a href="service-details.html" class="stretched-link">Pioneering Technology</a></h4>
            <p>Work on AI-driven verification and autonomous engineering platforms.</p>
          </div>
        </a>
      </div>
      {/* <!--End Icon Box --> */}

      <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="200">
        <div className="icon-box">
          <div className="icon"><img src="assets/images/icons/service-hosting.svg" alt="icon" /></div>
          <h4 className="title"><a href="" class="stretched-link">Impact-Driven Culture</a></h4>
          <p>Every idea matters; we’re a team of builders and problem-solvers.</p>
        </div>
      </div>
      {/* <!--End Icon Box --> */}

      <div className="col-xl-4 col-md-4" data-aos="fade-up" data-aos-delay="500">
        <div className="icon-box">
          <div className="icon"><img src="assets/images/icons/service-social.svg" alt="icon" /></div>
          <h4 className="title"><a href="" className="stretched-link">Learning & Growth</a></h4>
          <p>Exposure to semiconductors, AI/ML, and high-impact engineering projects.</p>
        </div>
      </div>
      {/* <!--End Icon Box --> */}
    </div>
  </div>

  <div className="container mt-5">
    <div className="row">
      <div className="col-lg-7 mx-auto mb-4">
        <div className="section-title text-center ">
          <h3 className="top-c-sep">Join Us in Building the Future of Autonomous Verification</h3>
          <p>WIOWIZ is on a mission to redefine chip verification and design processes by developing intelligent,
            autonomous
            platforms. We’re looking for engineers, AI experts, and innovators who share our vision of building real
            solutions for
            real engineering challenges, not just hype.</p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-10 mx-auto">
        <div className="career-search mb-60">

          <div className="filter-result">
            <p className="mb-30 ff-montserrat">Current Job Openings:</p>

            <div className="job-box d-flex mb-30 align-items-center">
              <div className="job-left my-4 d-flex">
                <div className="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-3 d-md-none d-lg-flex">
                  <div className="job-role">AM</div>
                </div>
                <div className="job-content">
                  <h5 className="">AI/ML Engineer (Hardware-Aware)</h5>
                  <p className="m-0">Work on RAG pipelines, domain-specific LLMs, and pattern detection in engineering
                    datasets.</p>
                </div>
              </div>
              <div className="job-right my-4 flex-shrink-0">
                <a href="#" className="btn btn-primary d-block w-100 d-sm-inline-block">Apply now</a>
              </div>
            </div>


            <div className="job-box d-flex mb-30 align-items-center">
              <div class="job-left my-4 d-flex">
                <div class="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-3 d-md-none d-lg-flex">
                  <div class="job-role">C+</div>
                </div>
                <div class="job-content">
                  <h5 class="">C++ Engineer for EDA Simulator Core</h5>
                  <p class="m-0">Familiarity with parser generators (bison, flex, or equivalent) , Experience with
                    hardware languages
                    (Verilog/SystemVerilog) , Strong debugging and performance optimization</p>
                </div>
              </div>
              <div class="job-right my-4 flex-shrink-0">
                <a href="#" class="btn btn-primary d-block w-100 d-sm-inline-block">Apply now</a>
              </div>
            </div>

            <div class="job-box d-flex mb-30 align-items-center">
              <div class="job-left my-4 d-flex">
                <div class="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-3 d-md-none d-lg-flex">
                  <div class="job-role">FE</div>
                </div>
                <div class="job-content">
                  <h5 class="">Full-Stack Engineer (Frontend + API + Integration)</h5>
                  <p class="m-0">Build and maintain a browser-based GUI + backend API system for visualization,
                    control, and log analysis</p>
                </div>
              </div>
              <div class="job-right my-4 flex-shrink-0">
                <a href="#" class="btn btn-primary d-block w-100 d-sm-inline-block">Apply now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</div>

</main>

    
  )
};

export default Careers;
