import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Importa los estilos
import logo from "./Marca Hidden Diamond sin fondo.png";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página
    if (email === "LuisFlor" && password === "pocoapoco") {
      navigate("/Difficulty"); // Redirige a la ruta /Game si las credenciales son correctas
    } else {
      alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src={logo} alt="Logo" />
      </div>
      <h2 className="login-title">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text" // Cambiado a "text" porque el usuario no está ingresando un correo electrónico real
          placeholder="Usuario"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="login-options">
          <label>
            <input type="checkbox" /> Recuérdame
          </label>
          <a href="/" className="forgot-password">
            ¿Contraseña olvidada?
          </a>
        </div>
        <button type="submit" className="login-button">
          Acceder
        </button>
      </form>
      <p className="register-link">
        ¿No estás registrado? <a href="/">Regístrate</a>
      </p>
    </div>
  );
};

export default LogIn;
