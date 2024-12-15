import React from "react";
import "./PreLogin.css";
import { useNavigate } from "react-router-dom";

// Importa las imágenes
import card1 from "./179.png";
import card2 from "./178.png";
import card3 from "./122.png";
import card4 from "./34.png";
import card5 from "./141.png";
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
