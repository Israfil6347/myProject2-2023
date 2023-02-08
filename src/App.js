import React from "react";
import Header from "./Partials/Header";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="board-members">
          {/* <Route path="office-bearers" element={<OfficeBearerContent />} />
          <Route path="board-of-directors" element={<BoardOfDirector />} />
          <Route path="credit-committee" element={<CreditCommittee />} />
          <Route
            path="supervisory-committee"
            element={<SupervisoryCommittee />}
          /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
