import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ icon, title, description, link }) => {
  return (
    <div className="col-xl-4 col-md-4" data-aos="fade-up">
      <div className="icon-box">
        <div className="icon">
          <img src={icon} alt={title} />
        </div>

        <h4 className="title">
          <Link to={link} className="stretched-link">
            {title}
          </Link>
        </h4>

        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;