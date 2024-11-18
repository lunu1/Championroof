import "./App.scss";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Navbar from "./components/Navbar";
import NavSec from "./components/NavSec";
import Footer from "./components/Footer";

const Home = React.lazy(() => import("./pages/Home"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const Services = React.lazy(() => import("./pages/Services"));
const GRPLining = React.lazy(() => import("./pages/GrpLining"));
const Contact = React.lazy(() => import("./pages/ContactUs"));
const Combosystem = React.lazy(() => import("./pages/Combosystem"));
const Conventional = React.lazy(() => import("./pages/Convention"));
const Polyurethene = React.lazy(() => import("./pages/Polyurethene"));
const Gonesheet = React.lazy(() => import("./pages/Gonesheet"));
const Membrane = React.lazy(() => import("./pages/Membrane"));
const Substructure = React.lazy(() => import("./pages/Substructure"));
const WetArea = React.lazy(() => import("./pages/WetArea"));
const Concrete = React.lazy(() => import("./pages/Concrete"));
const Workflow = React.lazy(() => import("./pages/WorkFlow"));
const Process = React.lazy(() => import("./components/Process"));

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <NavSec />
          <Routes>
            <Route
              path={routes.home}
              element={
                <div>
                  <Home />
                  <AboutUs />
                  <Services />
                  <Process />
                </div>
              }
            />
            <Route path={routes.about} element={<AboutUs />} />
            <Route path={routes.grplining} element={<GRPLining />} />
            <Route path={routes.services} element={<Services />} />
            <Route path={routes.contact} element={<Contact />} />
            <Route
              path={routes.cs}
              element={
                <div>
                  <Combosystem />
                  <Process />
                </div>
              }
            />
            <Route
              path={routes.polyurethene}
              element={
                <div>
                  <Polyurethene />
                  <Process />
                </div>
              }
            />
            <Route
              path={routes.conventional}
              element={
                <div>
                  <Conventional />
                  <Process />
                </div>
              }
            />
            <Route
              path={routes.gonesheet}
              element={
                <div>
                  <Gonesheet />
                  <Process />
                </div>
              }
            />
            <Route
              path={routes.membrane}
              element={
                <div>
                  <Membrane />
                  <Process />
                </div>
              }
            />
            <Route
              path={routes.substructure}
              element={
                <div>
                  <Substructure />
                  <Process />
                </div>
              }
            />
            <Route
              path={routes.wetarea}
              element={
                <div>
                  <WetArea />
                  <Process />
                </div>
              }
            />
            <Route
              path={routes.concrete}
              element={
                <div>
                  <Concrete />
                  <Process />
                </div>
              }
            />
            <Route
              path={routes.workflow}
              element={
                <div>
                  <Workflow />
                  <Process />
                </div>
              }
            />
            {/* <Process/> */}

            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
        <div className="whatsapp-icon">
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/971526336867"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="Chat on WhatsApp"
            src="/Whatsapp.png"
            style={{ width: "50px", height: "50px" }}
          />
        </a>
      </div>
      <Footer />
      </Router>
      
    </div>
  );
}

export default App;
