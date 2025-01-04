import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Difficulty.css";

const Difficulty = ({ onStartGame }) => {
  const [language, setLanguage] = useState("es"); // Idioma predeterminado: español
  const [difficulty, setDifficulty] = useState(null);
  const navigate = useNavigate();

  const handleStartGame = () => {
    difficulty === "beginner"
      ? navigate("/GamePrincipiante")
      : difficulty === "classic"
        ? navigate("/GameClasico")
        : difficulty === "expert"
          ? navigate("/GameExperto")
          : alert(
              "Por favor selecciona un nivel de dificultad antes de continuar.",
            );
  };

  return (
    <div className="selection-container">
      <div className="language-selection">
        <h2>Idioma:</h2>
        <div className="language-options">
          <button
            className={`language-button ${language === "es" ? "selected" : ""}`}
            onClick={() => setLanguage("es")}
          >
            Español
          </button>
          <button
            className={`language-button ${language === "en" ? "selected" : ""}`}
            onClick={() => setLanguage("en")}
          >
            English
          </button>
        </div>
      </div>

      <div className="difficulty-selection">
        <h2>Nivel de Dificultad:</h2>
        <div className="difficulty-options">
          <div
            className={`difficulty-bar beginner ${difficulty === "beginner" ? "selected" : ""}`}
            onClick={() => setDifficulty("beginner")}
          >
            Principiante
          </div>
          <div
            className={`difficulty-bar classic ${difficulty === "classic" ? "selected" : ""}`}
            onClick={() => setDifficulty("classic")}
          >
            Clásico
          </div>
          <div
            className={`difficulty-bar expert ${difficulty === "expert" ? "selected" : ""}`}
            onClick={() => setDifficulty("expert")}
          >
            Experto
          </div>
        </div>
      </div>

      <button className="start-game-button" onClick={handleStartGame}>
        Comenzar Juego
      </button>
    </div>
  );
};

export default Difficulty;
