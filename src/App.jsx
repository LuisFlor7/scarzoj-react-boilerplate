import { useState } from "react";
import { Container } from "react-bootstrap";

import { NavBar } from "./components/NavBar";

import { CounterPage } from "./pages/CounterPage";
import { LandingPage } from "./pages/LandingPage";

export const App = () => {
  const [currentPage, setCurrentPage] = useState("Landing");

  const pageMap = {
    Landing: <LandingPage />,
    Counter: <CounterPage />,
  };

  return (
    <>
      <NavBar currentPage={currentPage} pageSetter={setCurrentPage} />
      <Container>{pageMap[currentPage]}</Container>
    </>
  );
};
