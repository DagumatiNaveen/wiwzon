import React from 'react';
import { Link } from 'react-router-dom';

function Ai_ml_services() {
  return (
    <div>
      <main id="main">

        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <div className="page-header d-flex align-items-center">
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2 className="mb-4">AI/ML Services</h2>
                </div>
              </div>
            </div>
          </div>
          <nav>
            <div className="container">
              <ol>
                <li><Link to="/">Home</Link></li>
                <li>AI/ML Services</li>
              </ol>
            </div>
          </nav>
        </div>

        {/* <!-- AI / ML Section --> */}
        <section className="py-5">
          <div className="container">

        {/* <!-- Section Header --> */}
        <div className="text-start mb-5">
          <span className="badge bg-success mb-3">Services</span>
          <h2 className="fw-bold">AI/ML</h2>
          <p className="lead">
            We keep this practical: small pilots that prove value, then expand.
            We focus on edge vision and document/log intelligence — with private/on-prem options.
          </p>
        </div>
        {/* <!-- Top Features Row --> */}
        <div className="row g-4 mb-5">
          <div className="col-md-6 col-lg-6 d-flex">
            <div className="card custom-card-box flex-fill">
              <div className="card-body">
                <h5 className="fw-bold">Edge Vision (On-device)</h5>
                <ul className="mb-0 aiml-list">
                  <li>Object/zone events and counting.</li>
                  <li>Lightweight visual classifiers for on-device use.</li>
                  <li>Camera & lighting setup; per-device calibration.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 d-flex">
            <div className="card custom-card-box flex-fill">
              <div className="card-body">
                <h5 className="fw-bold">Document & Log Intelligence</h5>
                <ul className="mb-0 aiml-list">
                  <li>Spec/RTL/log Q&A scoped to your repos.</li>
                  <li>Template drafting (test attributes, checklists) with human approval.</li>
                  <li>Privacy: on-prem options, redaction, role-based access, audit trails.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 d-flex">
            <div className="card custom-card-box flex-fill">
              <div className="card-body">
                <h5 className="fw-bold">MLOps & Delivery</h5>
                <ul className="mb-0 aiml-list">
                  <li>Clear acceptance metrics (precision/recall, latency, false-alarm rate).</li>
                  <li>On-prem/edge packaging; offline-first sync; simple dashboards.</li>
                  <li>Handover docs so your staff can run it without us.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 d-flex">
            <div className="card custom-card-box flex-fill">
              <div className="card-body">
                <h5 className="fw-bold">How we start</h5>
                <ul className="aiml-list">
                  <li>Send sample photos/logs or a short site video and constraints.</li>
                  <li>We propose a 4–6 week pilot with fixed scope and pass/fail criteria.</li>
                  <li>If it works, expand by station/line and train your team.</li>
                </ul>
                <a href="#" className="btn btn-success mt-2">Start a Pilot</a>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Detailed Capabilities --> */}
        <h4 className="fw-bold mb-4">Detailed Capabilities</h4>
        <div className="row g-4">
          <div className="col-md-6 col-lg-6 d-flex">
            <div className="card custom-card-box flex-fill">
              <div className="card-body">
                <h5 className="fw-bold">Model Development & Evaluation</h5>
                <ul className="aiml-list">
                  <li>Data plan: labeling, QA, sampling; safe augmentation strategy.</li>
                  <li>Baselines: HF models (YOLOv7/RT-DETR) + classical checks.</li>
                  <li>Metrics: precision/recall, F1, latency, false-alarm rates; ablations.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 d-flex">
            <div className="card custom-card-box flex-fill">
              <div className="card-body">
                <h5 className="fw-bold">Edge AI Optimization & Accelerator Integration</h5>
                <ul className="aiml-list">
                  <li>Quantization (INT8/FP16), pruning; runtimes: TensorRT, ONNX Runtime, OpenVINO.</li>
                  <li>Targets: Jetson, x86 GPU, ARM SBCs; containerized builds.</li>
                  <li>Throughput tuning within power/thermal envelopes.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 d-flex">
            <div className="card custom-card-box flex-fill">
              <div className="card-body">
                <h5 className="fw-bold">Vision Systems & Data Collection</h5>
                <ul className="aiml-list">
                  <li>Camera/lens/lighting selection; rig setup & hygiene signage.</li>
                  <li>Per-station calibration; ISP tuning (WB/CCM/gamma) when required.</li>
                  <li>Data pipelines: retention policy, privacy & consent notes.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 d-flex">
            <div className="card custom-card-box flex-fill">
              <div className="card-body">
                <h5 className="fw-bold">Delivery Artifacts</h5>
                <ul className="aiml-list">
                  <li>Pilot report & model cards; acceptance runbook; dashboard starter.</li>
                  <li>Deployment scripts & configs with rollback plan.</li>
                  <li>Handover & staff training materials.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
    
    </div>
    );
    }
    export default Ai_ml_services;