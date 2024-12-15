import React from "react";
import "./PreLogin.css";
import { useNavigate } from "react-router-dom";

// Importa las imágenes
import card1 from "./179.png";
import card2 from "./178.png";
import card3 from "./122.png";
import card4 from "./34.png";
import card5 from "./141.png";
import card6 from "./155.png";
import card7 from "./170.png";
import card8 from "./175.png";
import card9 from "./177.png";
import logo from "./Marca Hidden Diamond sin fondo.png";

const PreLogin = () => {
  const navigate = useNavigate();

  const handleScreenTap = () => {
    navigate("/login");
  };

  return (
    <div className="prelogin-container" onClick={handleScreenTap}>
      {/* Fondo con cartas flotantes */}
      <div className="floating-images">
        <img src={card1} alt="Carta 1" className="card card1" />
        <img src={card2} alt="Carta 2" className="card card2" />
        <img src={card3} alt="Carta 3" className="card card3" />
        <img src={card4} alt="Carta 4" className="card card4" />
        <img src={card5} alt="Carta 5" className="card card5" />
        <img src={card6} alt="Carta 6" className="card card6" />
        <img src={card7} alt="Carta 7" className="card card7" />
        <img src={card8} alt="Carta 8" className="card card8" />
        <img src={card9} alt="Carta 9" className="card card9" />
      </div>

      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Texto "Toca para comenzar" */}
      <div className="tap-to-start">
        <p>Toca para comenzar</p>
      </div>
    </div>
  );
};

export default PreLogin;
