import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import LogIn from "./pages/LogIn";
import PreLogin from "./pages/PreLogin";
import Difficulty from "./components/Difficulty";
import Game from "./components/Game";
import Tablero from "./components/Tablero";

export const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<PreLogin />} />
          <Route path="/Login" element={<LogIn />} />
          <Route path="/Difficulty" element={<Difficulty />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/tablero" element={<Tablero />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
