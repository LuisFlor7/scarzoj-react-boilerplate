import { useState } from "react";
import { Container } from "react-bootstrap";

import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import TimerPage from "./pages/TimerPage";

export const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  const Pages = {
    Home: <HomePage />,
    Timer: <TimerPage />,
  };

  return (
    <>
      <NavBar currentPage={currentPage} pageSetter={setCurrentPage} />
      <Container>{Pages[currentPage]}</Container>
    </>
  );
};
