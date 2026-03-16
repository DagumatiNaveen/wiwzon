import React from "react";
// import ServiceCard from "./ServiceCard";
import ServiceCard from "./Servicecard.jsx";
const ServiceGrid = ({ services }) => {
  return (
    <div className="row gy-4">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
          link={service.link}
        />
      ))}
    </div>
  );
};

export default ServiceGrid;