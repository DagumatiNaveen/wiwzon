import React from 'react'
import { Link } from 'react-router-dom';

function Products() {
  return (
    <div>
      <main id="main">

        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <div className="page-header d-flex align-items-center">
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2 className="mb-4">Products</h2>
                </div>
              </div>
            </div>
          </div>
          <nav>
            <div className="container">
              <ol>
                <li><Link to="/">Home</Link></li>
                <li>Products</li>
              </ol>
            </div>
          </nav>
        </div>

        {/* <!-- Features Section --> */}
        <section className="py-5">
          <div className="container">
        {/* <!-- Section Header --> */}
        <div className="text-start mb-5">
          <h1 className="display-5 fw-bold">
            From Spec to Silicon — <span className="text-info">Smarter, Faster, Autonomous.</span>
          </h1>
          <p className="lead mt-3">
            We engineer practical AI and tools that remove repetitive effort in chip design and edge operations.
            <br />
            Simple promises: honest scope, steady delivery, private by default.
          </p>
          <div className="mt-4">
            <a href="#" className="btn btn-primary btn-lg me-2">Explore Products</a>
            <button type="button" className="btn btn-outline-dark btn-lg" data-bs-toggle="modal" data-bs-target="#myModal2">
              Talk to Us
            </button>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card custom-card-box h-100 shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold">Engineer-first</h5>
                <p className="mb-0">We build for daily workflows. Logs are clean; UIs stay fast; integrations are CLI and CI
                  friendly.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card custom-card-box h-100 shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold">Private by default</h5>
                <p className="mb-0">On-prem or isolated deployments; no training on your data without explicit consent.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card custom-card-box h-100 shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold">Outcome-focused</h5>
                <p className="mb-0">Short pilots, measurable wins, then scale. No buzzwords, just useful results.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Products Section --> */}
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 custom-card-box">
              <div className="card-body">
                <span className="badge bg-info text-dark mb-2">Early Access</span>
                <h5 className="fw-bold">EDA Toolchain</h5>
                <p>Verilog-first simulation and waveform debug with an engineer-first UX.</p>
                <a href="#" className="text-decoration-none">Learn more →</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 custom-card-box">
              <div className="card-body">
                <span className="badge bg-success mb-2">Private Beta</span>
                <h5 className="fw-bold">Silicon LLM</h5>
                <p>Domain model for specs, RTL intent, verification plans, and tool logs.</p>
                <a href="#" className="text-decoration-none">Learn more →</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 custom-card-box">
              <div className="card-body">
                <span className="badge bg-warning text-dark mb-2">Pilot</span>
                <h5 className="fw-bold">Edge Vision Kits</h5>
                <p>On-device vision kits for detection, counting, and alerts.</p>
                <a href="#" className="text-decoration-none">Learn more →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    {/* <!-- Modal --> */}
    <div className="modal right fade" id="myModal2" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel2">
      <div className="modal-dialog" role="document">
        <div className="modal-content">

          <div className="modal-header">
            <h4 className="modal-title" id="myModalLabel2">Contact Us</h4>
            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span
                aria-hidden="true">&times;</span></button>
          </div>

          <div className="modal-body">
            <form className="contact-form form" id="ajax-contact" method="post" action="assets/phpscripts/contact.php">
              <div className="controls">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group form-input-box mb-3">
                      <input type="text" className="form-control" id="name" name="name" placeholder="Name*"
                        required="required" data-error="Name is required." />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className ="col-12">
                    <div className="form-group form-input-box mb-3">
                      <input type="email" className="form-control" id="email" name="email" placeholder="Email*"
                        required="required" data-error="Valid email is required." />
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group form-input-box mb-3">
                      <input type="text" className="form-control" name="subject" placeholder="Subject" required="required" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group form-input-box mb-3">
                      <textarea className="form-control" id="message" name="message" rows="7"
                        placeholder="Write Your Message*" required="required"
                        data-error="Please, leave us a message."></textarea>
                      <div className="help-block with-errors"></div>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" data-text="Send Message">Send Message</button>
                  </div>
                  <div className="messages">
                    <div className="alert alert alert-success alert-dismissable alert-dismissable hidden" id="msgSubmit">
                      <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button> Thank
                      You! your message
                      has been sent.
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <div className="container">
              <div className="row">
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

        </div>
        {/* <!-- modal-content --> */}
      </div>
      {/* <!-- modal-dialog --> */}
    </div>{/* <!-- modal --> */}

  </main>
  {/* <!-- End #main --> */}

    </div>
  )
}
export default Products;
