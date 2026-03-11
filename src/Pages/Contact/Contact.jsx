import React from "react";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <main id="main">

        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <div className="page-header d-flex align-items-center">
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2 className="mb-4">Contact Us</h2>
                </div>
              </div>
            </div>
          </div>
          <nav>
            <div className="container">
              <ol>
                <li><Link to="/">Home</Link></li>
                <li>Contact Us</li>
              </ol>
            </div>
          </nav>
        </div>

    <div className="single-page">
      {/* <!-- Start Contact Section --> */}
      <div id="contact" className="contact-section section">

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12" data-aos="fade-right">
              <div className="contact-information-box-3">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="single-contact-info-box">
                      <div className="contact-info">
                        <h6>Address:</h6>
                        <p>#234, Sy. No. 34 Mullur Road, Ambalipura,
                          Sarjapur Taluk East Bengaluru, Bangalore, Karnataka 560035</p>
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
                  <form className="contact-form form" id="ajax-contact" method="post"
                    action="assets/phpscripts/contact.php">
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group form-input-box">
                            <input type="text" className="form-control" id="name" name="name" placeholder="Name*"
                              required="required" data-error="Name is required." />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group form-input-box">
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email*"
                              required="required" data-error="Valid email is required." />
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group form-input-box">
                            <input type="text" className="form-control" name="subject" placeholder="Subject"
                              required="required" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group form-input-box">
                            <textarea className="form-control" id="message" name="message" rows="7"
                              placeholder="Write Your Message*" required="required"
                              data-error="Please, leave us a message."></textarea>
                            <div className="help-block with-errors"></div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group form-input-box">
                            <input type="text" name="wiowiz" style={{display: 'none'}} />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="submit" data-text="Send Message">Send Message</button>
                        </div>
                        <div className="messages">
                          <div className="alert alert alert-success alert-dismissable alert-dismissable hidden"
                            id="msgSubmit"><button type="button" className="close" data-dismiss="alert"
                              aria-hidden="true">&times;</button> Thank You! your message has been sent. </div>
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
      {/* <!-- End Contact Section --> */}
    </div>

  </main>
  {/* <!-- End #main --> */}
    </>
  );
};

export default Contact;
