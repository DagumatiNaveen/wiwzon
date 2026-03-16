import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ marginTop: "150px", textAlign: "center" }}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist.</p>

      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;