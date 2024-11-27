import { useState } from "react";

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
      <NavBar pageSetter={setCurrentPage} />
      {pageMap[currentPage]}
    </>
  );
};
