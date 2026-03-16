import React from 'react'
import { Link } from 'react-router-dom';
import serviceDesign from "../../assets/images/icons/service-design.svg";
import serviceHosting from "../../assets/images/icons/service-hosting.svg";
import serviceSocial from "../../assets/images/icons/service-social.svg";
import serviceSeo from "../../assets/images/icons/service-seo.svg";
import serviceCloud from "../../assets/images/icons/service-cloud.svg";
import serviceSecure from "../../assets/images/icons/service-secure.svg";
import { useNavigate } from 'react-router-dom';
import ServiceCard from "../../Components/Servicecard";
import semiconductorServices from '../../Data/semiconductorServices';
import ServiceGrid from '../../Components/ServiceGrid';

function Semiconductor() {
 
  return (
    <div>

  <main id="main">

    {/* Breadcrumbs */}
    <div className="breadcrumbs">
      <div className="page-header d-flex align-items-center">
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2 className="mb-4">Semiconductor</h2>
            </div>

          </div>
        </div>
      </div>
      <nav>
        <div className="container">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li>Semiconductor Services</li>
          </ol>
        </div>
      </nav>
    </div>


    {/* <div className="row gy-4">
  {semiconductorServices.map((service, index) => (
    <ServiceCard
      key={index}
      icon={service.icon}
      title={service.title}
      description={service.description}
      link={service.link}
    />
  ))}
</div> */}

<ServiceGrid services={semiconductorServices} />
  </main>
  {/* <!-- End #main --> */}
    </div>
  )
}
export default Semiconductor;
