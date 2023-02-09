import React from "react";
import Header from "./Partials/Header";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "./Partials/Footer";
import OfficeBearerContent from "./Boardmembers/OfficeBearerContent";
import Home from "./Partials/Home/Home.jsx";
import Service from "./Partials/Service/Service.jsx";
import Projects from "./Partials/Projects/Projects";
import Loan from "./Partials/Loan/Loan";
import Deposit from "./Partials/Deposit/Deposit";
import Career from "./Partials/Career/Career";
import About from "./Partials/About/About";
import Notice from "./Partials/Notice/Notice";
import Faq from "./Partials/Faq/Faq";
import Contact from "./Partials/Contact/Contact";
import BoardOfDirector from "./Boardmembers/BoardOfDirector";
import CreditCommittee from "./Boardmembers/CreditCommittee";
import SupervisoryCommittee from "./Boardmembers/SupervisoryCommittee";

function App() {
  const location = useLocation();
  return (
    <div className="relative bg-background min-h-screen flex flex-col font-sans-serif">
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="services" element={<Service />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="loan-products" element={<Loan />}></Route>
        <Route path="deposit-products" element={<Deposit />}></Route>
        <Route path="job-circulars" element={<Career />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="notice" element={<Notice />}></Route>
        <Route path="faq" element={<Faq />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="office-bearers" element={<OfficeBearerContent />}></Route>
        <Route path="board-of-directors" element={<BoardOfDirector />}></Route>
        <Route path="credit-committee" element={<CreditCommittee />}></Route>
        <Route
          path="supervisory-committee"
          element={<SupervisoryCommittee />}
        ></Route>
        {/* <Route path="board-members">
          <Route path="office-bearers" element={<OfficeBearerContent />} /> */}
        {/* <Route path="board-of-directors" element={<BoardOfDirector />} />
          <Route path="credit-committee" element={<CreditCommittee />} />
          <Route
            path="supervisory-committee"
            element={<SupervisoryCommittee />}
          /> */}
        {/* </Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
