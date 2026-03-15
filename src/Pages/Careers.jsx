import { useEffect, useState } from "react";
import api from "../services/api";

export default function Careers() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api.get("/jobs").then((res) => setJobs(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Careers</h2>
      {jobs.map((job) => (
        <div key={job._id} className="card mb-3">
          <div className="card-body">
            <h5>{job.title}</h5>
            <p>{job.description}</p>
            <span className="badge bg-primary me-2">{job.location}</span>
            <span className="badge bg-secondary">{job.experience}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
