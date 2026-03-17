import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Layout */
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";

/* Pages */
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Ai_ml_services from "../Pages/AI/ML_Services/AI_ML_Services";
import Embedded from "../Pages/Embedded_System/Embedded";
import Products from "../Pages/Products/Products";
import Semiconductor from "../Pages/Semiconductor/Semiconductor";
import BlogList from "../Pages/Blog/BlogList";
import BlogDetails from "../Pages/Blog/BlogDetails";
import Contact from "../Pages/Contact/Contact";
import NotFound from "../Pages/NotFound";
import Careers from "../Pages/Careers/Careers";
import JobDetails from "../Pages/Careers/JobDetails";
import RTL_to_GDSII from "../Pages/Semiconductor/RTL_to_GDSII";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Embedded-Systems" element={<Embedded />} />
        <Route path="/Ai-ML-Services" element={<Ai_ml_services />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Semiconductor" element={<Semiconductor />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:jobId" element={<JobDetails />} />
        <Route path="/RTL_to_GDSII" element={<RTL_to_GDSII />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blogDetails" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      {/* ✅ GLOBAL SCROLL BUTTON */}
      <ScrollToTop />
    </BrowserRouter>
  );
};

export default AppRoutes;