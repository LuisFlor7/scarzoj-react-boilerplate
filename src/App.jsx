import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import TimerPage from "./pages/TimerPage";

export const App = () => {
  return (
    <Router>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timer" element={<TimerPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
