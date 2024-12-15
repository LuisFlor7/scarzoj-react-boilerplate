import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import LogIn from "./pages/LogIn";
import PreLogin from "./pages/PreLogin";

export const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<PreLogin />} />
          <Route path="/Login" element={<LogIn />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
