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

 
    <main id="main">

{/* <!-- Service Start --> */}
<div className="container-fluid bg-light py-5">
  {/* <!-- Embedded Systems Section --> */}
  <div className="container">
    {/* <!-- Section Header --> */}
    <div className="text-start mb-5">
      <span className="badge bg-success mb-3">Services</span>
      <h2 className="fw-bold">Embedded Systems</h2>
      <p class="lead">
        We keep this cautious and production-focused. Two offerings to start, with private/on-prem options.
      </p>
    </div>

    {/* <!-- Offerings Row --> */}
    <div className="row g-4 mb-5">
      <div className="col-md-6 d-flex">
        <div className="card custom-card-box flex-fill">
          <div className="card-body">
            <h5 className="fw-bold">Edge AI on SBCs/NPUs</h5>
            <ul className="mb-0 aiml-list">
              <li>Vision/audio pipelines with NPUs/GPUs.</li>
              <li>Optimized runtimes (TensorRT, ONNX Runtime, OpenVINO).</li>
              <li>Offline-first logging; simple dashboards/APIs.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="col-md-6 d-flex">
        <div className="card custom-card-box flex-fill">
          <div className="card-body">
            <h5 className="fw-bold">On-device Assistants (Local Q&amp;A)</h5>
            <ul className="mb-0 aiml-list">
              <li>SOP/checklist kiosk with local document store (RAG).</li>
              <li>Role-based safety filters and audit trails.</li>
              <li>Works offline; syncs summaries when connected.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Pilot Plan --> */}
    <div className="card custom-card-box mb-4">
      <div className="card-body">
        <h5 className="fw-bold">Pilot plan (4–6 weeks)</h5>
        <ul className="aiml-list">
          <li><strong>Week 1:</strong> site survey, constraints, success metrics.</li>
          <li><strong>Weeks 2–3:</strong> prototype build + field capture; iterate on thresholds/models.</li>
          <li><strong>Weeks 4–6:</strong> stabilize, OTA, handover runbook &amp; training.</li>
        </ul>
        <a href="#" className="btn btn-primary">Discuss Embedded Pilot</a>
      </div>
    </div>

  </div>

</div>
{/* <!-- Service End --> */}

</main>

  </main>
  {/* End #main */}
    </div>
  )
}

export default Embedded