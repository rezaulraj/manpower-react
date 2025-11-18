import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Homepages/HomePage";
import AboutPage from "./pages/Aboutpages/AboutPage";
import ServicesPage from "./pages/Servicespages/ServicesPage";
import EmployerPage from "./pages/Employees/EmployerPage";
import PartnerPage from "./pages/Partners/PartnerPage";
import HndustriesPage from "./pages/Industries/HndustriesPage";
import IndustryDetail from "./pages/Industries/IndustryDetail";
import ContactPage from "./pages/Contactpages/ContactPage";
import CareerPage from "./pages/Careers/CareerPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/employees" element={<EmployerPage />} />
            <Route path="/partnership" element={<PartnerPage />} />
            <Route path="/industries" element={<HndustriesPage />} />
            <Route path="/industries/:href" element={<IndustryDetail />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareerPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
