import React from "react";
import { Link } from "react-router-dom";

const RTL_to_GDSII = () => {
  return (
    
    <main >
       <div className="breadcrumbs">
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="mb-4">RTL to GDSII</h2>
            </div>

          </div>
        </div>
      </div>
      <nav>
        <div className="container">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>RTL to GDSII</li>
          </ol>
        </div>
      </nav>
    </div>
    <div>
    <h2>RTL to GDSII</h2>
      <p>Site is under construction. Please check back later.</p>

      <Link to="/">Go Back Home</Link>

    </div>
    
    </main>
  );
};

export default RTL_to_GDSII;