import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Layout */
// import Header from "../components/Header";
import Footer from "../components/Footer";
import Header from "../Components/Header";

/* Pages */
import Home from "../pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../pages/Services/Services";
import ServiceDetails from "../pages/Services/ServiceDetails";
import Ai_ml_services from "../Pages/AI/ML_Services/AI_ML_Services";
import Embedded from "../Pages/Embedded_System/Embedded";
import Products from "../Pages/Products/Products";
import Semiconductor from "../Pages/Semiconductor/Semiconductor"; 
import BlogList from "../Pages/Blog/BlogList";
import BlogDetails from "../Pages/Blog/BlogDetails";
import Contact from "../pages/Contact/Contact";
import NotFound from "../Pages/NotFound";
import Careers from "../Pages/Careers/Careers";
import JobDetails from "../Pages/Careers/JobDetails";
// import Header from "../Components/Header";
import RTL_to_GDSII from "../Pages/Semiconductor/RTL_to_GDSII";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Static Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Embedded-Systems" element={<Embedded />} />
        <Route path="/Ai-ML-Services" element={<Ai_ml_services />} />
        <Route path="/Products" element={<Products />} />  
        <Route path="/Semiconductor" element={<Semiconductor />} />
        {/* Careers (Dynamic) */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:jobId" element={<JobDetails />} />
        <Route path="/RTL_to_GDSII" element={<RTL_to_GDSII />} />
        {/* Blog (Dynamic) */}
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blogDetails" element={<BlogDetails />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
